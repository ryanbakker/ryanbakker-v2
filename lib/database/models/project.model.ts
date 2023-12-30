import { Document, Schema, model, models } from "mongoose";

export interface IProject extends Document {
  _id: string;
  title: string;
  description?: string;
  createdAt: Date;
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  tools: string[];
  category: { _id: string; name: string };
  organizer: {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
  };
}

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  tools: { type: [String], default: [] },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  githubUrl: { type: String },
  demoUrl: { type: String },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Project = models.Project || model("Project", ProjectSchema);

export default Project;
