"use server";

import { revalidatePath } from "next/cache";
import { createTask, type TaskPriority } from "@entities/task";

export type CreateTaskState = {
  errors?: {
    title?: string;
    description?: string;
    priority?: string;
  };
  success?: boolean;
};

export async function createTaskAction(
  _prevState: CreateTaskState,
  formData: FormData,
): Promise<CreateTaskState> {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const priority = formData.get("priority") as string;

  const errors: CreateTaskState["errors"] = {};

  if (!title || title.trim().length === 0) {
    errors.title = "タイトルは必須です";
  }
  if (!description || description.trim().length === 0) {
    errors.description = "説明は必須です";
  }
  if (!["low", "medium", "high"].includes(priority)) {
    errors.priority = "優先度を選択してください";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await createTask({
    title: title.trim(),
    description: description.trim(),
    priority: priority as TaskPriority,
  });

  revalidatePath("/");
  return { success: true };
}
