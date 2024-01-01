"use server";

import { CreateCategoryParams } from "@/types";
import { handleError } from "../utils";
import Category from "../database/models/category.model";
import { connectToDB } from "../database";

export const createCategory = async ({
  categoryName,
}: CreateCategoryParams) => {
  try {
    await connectToDB();

    const newCategory = await Category.create({ name: categoryName });

    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    handleError(error);
  }
};

export const getAllCategories = async () => {
  try {
    await connectToDB();

    const categories = await Category.find();

    // Sort categories alphabetically by name
    const sortedCategories = categories.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    return JSON.parse(JSON.stringify(sortedCategories));
  } catch (error) {
    handleError(error);
  }
};
