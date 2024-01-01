"use server";

import {
  CreateProjectParams,
  DeleteProjectParams,
  GetAllProjectsParams,
  GetProjectsByUserParams,
  GetRelatedProjectsByCategoryParams,
  UpdateProjectParams,
} from "@/types";
import Category from "../database/models/category.model";
import User from "../database/models/user.model";
import { handleError } from "../utils";
import { connectToDB } from "../database";
import Project from "../database/models/project.model";
import { revalidatePath } from "next/cache";

const getCategoryByName = async (name: string) => {
  return Category.findOne({ name: { $regex: name, $options: "i" } });
};

const populateProject = (query: any) => {
  return query
    .populate({
      path: "organizer",
      model: User,
      select: "_id firstName lastName username",
    })
    .populate({ path: "category", model: Category, select: "_id name" });
};

export async function createProject({
  userId,
  project,
  path,
}: CreateProjectParams) {
  try {
    await connectToDB();

    const organizer = await User.findById(userId);
    if (!organizer) throw new Error("Organizer not found");

    const newProject = await Project.create({
      ...project,
      category: project.categoryId,
      organizer: userId,
    });
    revalidatePath(path);

    return JSON.parse(JSON.stringify(newProject));
  } catch (error) {
    handleError(error);
  }
}

export async function getProjectById(projectId: string) {
  try {
    await connectToDB();

    const project = await populateProject(Project.findById(projectId));

    if (!project) throw new Error("Project not found");

    return JSON.parse(JSON.stringify(project));
  } catch (error) {
    handleError(error);
  }
}

export async function updateProject({
  userId,
  project,
  path,
}: UpdateProjectParams) {
  try {
    await connectToDB();

    const projectToUpdate = await Project.findById(project._id);
    if (
      !projectToUpdate ||
      projectToUpdate.organizer.toHexString() !== userId
    ) {
      throw new Error("Unauthorized or project not found");
    }

    const updatedProject = await Project.findByIdAndUpdate(
      project._id,
      { ...project, category: project.categoryId },
      { new: true }
    );
    revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedProject));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteProject({ projectId, path }: DeleteProjectParams) {
  try {
    await connectToDB();

    const deletedProject = await Project.findByIdAndDelete(projectId);
    if (deletedProject) revalidatePath(path);
  } catch (error) {
    handleError(error);
  }
}

export async function getAllProjects({
  query,
  limit = 6,
  page,
  category,
}: GetAllProjectsParams) {
  try {
    await connectToDB();

    const titleCondition = query
      ? { title: { $regex: query, $options: "i" } }
      : {};
    const categoryCondition = category
      ? await getCategoryByName(category)
      : null;
    const conditions = {
      $and: [
        titleCondition,
        categoryCondition ? { category: categoryCondition._id } : {},
      ],
    };

    const skipAmount = (Number(page) - 1) * limit;
    const projectsQuery = Project.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const projects = await populateProject(projectsQuery);
    const projectsCount = await Project.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(projects)),
      totalPages: Math.ceil(projectsCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
}

export async function getProjectsByUser({
  userId,
  limit = 6,
  page,
}: GetProjectsByUserParams) {
  try {
    await connectToDB();

    const conditions = { organizer: userId };
    const skipAmount = (page - 1) * limit;

    const projectsQuery = Project.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const projects = await populateProject(projectsQuery);
    const projectsCount = await Project.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(projects)),
      totalPages: Math.ceil(projectsCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
}

export async function getRelatedProjectsByCategory({
  categoryId,
  projectId,
  limit = 3,
  page = 1,
}: GetRelatedProjectsByCategoryParams) {
  try {
    await connectToDB();

    const skipAmount = (Number(page) - 1) * limit;
    const conditions = {
      $and: [{ category: categoryId }, { _id: { $ne: projectId } }],
    };

    const projectsQuery = Project.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const projects = await populateProject(projectsQuery);
    const projectsCount = await Project.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(projects)),
      totalPages: Math.ceil(projectsCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
}
