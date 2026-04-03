import type { Task, TaskStatus } from "@entities/task";

export type TaskFilter = {
  status?: TaskStatus;
  search?: string;
};

export function filterTasks(tasks: Task[], filter: TaskFilter): Task[] {
  let result = tasks;

  if (filter.status) {
    result = result.filter((task) => task.status === filter.status);
  }

  if (filter.search) {
    const query = filter.search.toLowerCase();
    result = result.filter(
      (task) =>
        task.title.toLowerCase().includes(query) ||
        task.description.toLowerCase().includes(query),
    );
  }

  return result;
}
