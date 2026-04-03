import { Suspense } from "react";
import { getTasks, TaskCard, type TaskStatus } from "@entities/task";
import { CreateTaskForm } from "@features/create-task";
import { TaskStatusToggle } from "@features/update-task";
import { DeleteTaskButton } from "@features/delete-task";
import { TaskFilter, filterTasks } from "@features/filter-tasks";

type TaskListProps = {
  status?: string;
  search?: string;
};

export async function TaskList({ status, search }: TaskListProps) {
  const allTasks = await getTasks();
  const tasks = filterTasks(allTasks, {
    status: status as TaskStatus | undefined,
    search,
  });

  return (
    <div className="flex flex-col gap-6">
      <CreateTaskForm />

      <Suspense fallback={<div>読み込み中...</div>}>
        <TaskFilter />
      </Suspense>

      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            actionSlot={
              <div className="flex items-center gap-2">
                <TaskStatusToggle taskId={task.id} currentStatus={task.status} />
                <DeleteTaskButton taskId={task.id} />
              </div>
            }
          />
        ))}
        {tasks.length === 0 && (
          <p className="text-center text-zinc-400">タスクがありません</p>
        )}
      </div>
    </div>
  );
}
