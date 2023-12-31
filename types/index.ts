// User Params
export type CreateUserParams = {
  clerkId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  photo: string;
};

export type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

//  Project Params
export type CreateProjectParams = {
  userId: string;
  project: {
    title: string;
    description: string;
    imageUrl: string;
    categoryId: string;
    githubUrl: string;
    demoUrl: string;
  };
  path: string;
};

export type UpdateProjectParams = {
  userId: string;
  project: {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    categoryId: string;
    githubUrl: string;
    demoUrl: string;
  };
  path: string;
};

export type DeleteProjectParams = {
  projectId: string;
  path: string;
};

export type GetAllProjectsParams = {
  query: string;
  category: string;
  limit: number;
  page: number;
};

export type GetProjectsByUserParams = {
  userId: string;
  limit?: number;
  page: number;
};

export type GetRelatedProjectsByCategoryParams = {
  categoryId: string;
  projectId: string;
  limit?: number;
  page: number | string;
};

export type Project = {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  categoryId: string;
  githubUrl: string;
  demoUrl: string;

  organizer: {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
  };
  category: {
    _id: string;
    name: string;
  };
};

// Category Params
export type CreateCategoryParams = {
  categoryName: string;
};

// URL Query Params
export type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

export type RemoveUrlQueryParams = {
  params: string;
  keysToRemove: string[];
};

export type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
