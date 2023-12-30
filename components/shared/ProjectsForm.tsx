"use client";

import * as z from "zod";
import { IProject } from "@/lib/database/models/project.model";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useUploadThing } from "@/lib/uploadthing";
import { useForm } from "react-hook-form";
import { projectFormSchema } from "@/lib/validator";
import { createProject, updateProject } from "@/lib/actions/project.actions";
import { projectDefaultValues } from "@/constants";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Dropdown from "./Dropdown";
import { Textarea } from "../ui/textarea";
import { FileUploader } from "./FileUploader";

type ProjectFormProps = {
  userId: string;
  type: "Create" | "Update";
  project?: IProject;
  projectId?: string;
};

function ProjectsForm({ userId, type, project, projectId }: ProjectFormProps) {
  const [files, setFiles] = useState<File[]>([]);
  const router = useRouter();

  const initialValues =
    project && type === "Update"
      ? {
          ...project,
        }
      : projectDefaultValues;

  const { startUpload } = useUploadThing("imageUploader");

  const form = useForm<z.infer<typeof projectFormSchema>>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: z.infer<typeof projectFormSchema>) {
    let uploadedImageUrl = values.imageUrl;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) {
        return;
      }

      uploadedImageUrl = uploadedImages[0].url;
    }

    if (type === "Create") {
      try {
        const newProject = await createProject({
          project: { ...values, imageUrl: uploadedImageUrl },
          userId,
          path: "/profile",
        });

        if (newProject) {
          form.reset();
          router.push(`/projects/${newProject._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (type === "Update") {
      if (!projectId) {
        router.back();
        return;
      }

      try {
        const updatedProject = await updateProject({
          userId,
          project: { ...values, imageUrl: uploadedImageUrl, _id: projectId },
          path: `/projects/${projectId}`,
        });

        if (updatedProject) {
          form.reset();
          router.push(`/projects/${updatedProject._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  function onCancel() {
    // Reset the form to its initial values
    form.reset();

    // Example: Navigate back to the previous page
    router.back();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="wrapper">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col gap-5 w-full">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Project Title"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Dropdown
                      onChangeHandler={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="githubUrl"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="GitHub URL"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="demoUrl"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Showcase URL"
                      {...field}
                      className="input-field"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl className="h-72 mt-5">
                <Textarea
                  placeholder="About the project"
                  {...field}
                  className="textarea rounded-2xl resize-none border-transparent focus:border-transparent focus:ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button
            size="lg"
            className="w-full py-6 sm:py-5 sm:max-w-40 bg-gray-200 hover:bg-slate-300 text-slate-700  mt-4"
            disabled={form.formState.isSubmitting}
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            size="lg"
            className="w-full py-6 sm:py-5 sm:max-w-40 bg-indigo-600 hover:bg-indigo-800 mt-4 text-white"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Submitting..." : `${type} Event`}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default ProjectsForm;
