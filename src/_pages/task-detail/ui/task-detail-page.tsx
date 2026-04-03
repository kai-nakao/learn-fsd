import { notFound } from "next/navigation";
import { getTaskById, TaskCard } from "@entities/task";
import { TaskStatusToggle } from "@features/update-task";
import { DeleteTaskButton } from "@features/delete-task";

type TaskDetailPageProps = {
  id: string;
};

export async function TaskDetailPage({ id }: TaskDetailPageProps) {
  const task = await getTaskById(id);

  if (!task) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-lg flex flex-col gap-6 p-8">
      <TaskCard
        task={task}
        actionSlot={
          <div className="flex items-center gap-2">
            <TaskStatusToggle taskId={task.id} currentStatus={task.status} />
            <DeleteTaskButton taskId={task.id} />
          </div>
        }
      />
    </div>
  );
}
