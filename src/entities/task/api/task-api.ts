import type { Task, TaskStatus } from "../model";
import { mockTasks } from "./mock-data";

export async function getTasks(): Promise<Task[]> {
  return mockTasks;
}

export async function getTaskById(id: string): Promise<Task | undefined> {
  return mockTasks.find((task) => task.id === id);
}

export async function createTask(
  data: Pick<Task, "title" | "description" | "priority">,
): Promise<Task> {
  const now = new Date().toISOString();
  const task: Task = {
    id: String(Date.now()),
    title: data.title,
    description: data.description,
    status: "todo",
    priority: data.priority,
    createdAt: now,
    updatedAt: now,
  };
  mockTasks.unshift(task);
  return task;
}

export async function updateTaskStatus(
  id: string,
  status: TaskStatus,
): Promise<Task | undefined> {
  const task = mockTasks.find((t) => t.id === id);
  if (!task) return undefined;
  task.status = status;
  task.updatedAt = new Date().toISOString();
  return task;
}

export async function deleteTask(id: string): Promise<boolean> {
  const index = mockTasks.findIndex((t) => t.id === id);
  if (index === -1) return false;
  mockTasks.splice(index, 1);
  return true;
}
