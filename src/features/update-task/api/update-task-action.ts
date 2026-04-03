"use server";

import { revalidatePath } from "next/cache";
import { updateTaskStatus, type TaskStatus } from "@entities/task";

export async function updateTaskStatusAction(id: string, status: TaskStatus) {
  await updateTaskStatus(id, status);
  revalidatePath("/");
}
