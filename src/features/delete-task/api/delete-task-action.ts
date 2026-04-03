"use server";

import { revalidatePath } from "next/cache";
import { deleteTask } from "@entities/task";

export async function deleteTaskAction(id: string) {
  await deleteTask(id);
  revalidatePath("/");
}
