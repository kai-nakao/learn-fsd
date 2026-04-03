import { getTasks, TASK_STATUS, type TaskStatus } from "@entities/task";
import { TaskBoardColumn } from "./task-board-column";

export async function TaskBoard() {
  const tasks = await getTasks();
  const columns = Object.values(TASK_STATUS) as TaskStatus[];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {columns.map((status) => (
        <TaskBoardColumn
          key={status}
          status={status}
          tasks={tasks.filter((task) => task.status === status)}
        />
      ))}
    </div>
  );
}
