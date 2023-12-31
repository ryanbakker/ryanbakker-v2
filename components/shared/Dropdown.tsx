import { startTransition, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Input } from "../ui/input";
import {
  createCategory,
  getAllCategories,
} from "@/lib/actions/category.actions";
import { ICategory } from "@/lib/database/models/category.model";

type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
};

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    createCategory({
      categoryName: newCategory.trim(),
    }).then((category) => {
      setCategories((prevState) => [...prevState, category]);
    });
  };

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();

      categoryList && setCategories(categoryList as ICategory[]);
    };

    getCategories();
  }, []);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="w-full bg-gray-200 dark:bg-slate-700 dark:placeholder:text-slate-300 dark:text-slate-100 h-[54px] placeholder:text-gray-500 rounded-md px-5 py-3 border-none focus-visible:ring-transparent focus:ring-transparent !important text-slate-950">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent className="dark:bg-slate-700 dark:placeholder:text-slate-300 dark:text-slate-100">
        {categories.length > 0 &&
          categories.map((category) => (
            <SelectItem
              key={category._id}
              value={category._id}
              className="py-3 cursor-pointer dark:bg-slate-700 dark:placeholder:text-slate-300 dark:text-slate-100"
            >
              {category.name}
            </SelectItem>
          ))}

        <AlertDialog>
          <AlertDialogTrigger className="flex w-full rounded-sm py-3 pl-8 text-slate-950 hover:bg-indigo-700 hover:text-white bg-gray-200 focus:text-purple-500 dark:bg-slate-700 dark:placeholder:text-slate-300 dark:text-slate-100">
            Add Custom Category
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white dark:bg-slate-900">
            <AlertDialogHeader>
              <AlertDialogTitle>Custom Category</AlertDialogTitle>
              <AlertDialogDescription>
                <Input
                  type="text"
                  placeholder="Category name"
                  className="input-field mt-3"
                  onChange={(e) => setNewCategory(e.target.value)}
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => startTransition(handleAddCategory)}
              >
                Add
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
