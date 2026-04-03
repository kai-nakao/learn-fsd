import { TaskCard, TASK_STATUS_LABEL, type Task, type TaskStatus } from "@entities/task";
import { TaskStatusToggle } from "@features/update-task";
import { DeleteTaskButton } from "@features/delete-task";

type TaskBoardColumnProps = {
  status: TaskStatus;
  tasks: Task[];
};

export function TaskBoardColumn({ status, tasks }: TaskBoardColumnProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">{TASK_STATUS_LABEL[status]}</h3>
        <span className="text-xs text-zinc-400">{tasks.length}</span>
      </div>
      <div className="flex flex-col gap-3">
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
          <p className="py-8 text-center text-sm text-zinc-300">なし</p>
        )}
      </div>
    </div>
  );
}
