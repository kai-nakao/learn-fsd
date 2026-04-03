"use client";

import { useOptimistic, useTransition } from "react";
import { Badge } from "@shared/ui";
import {
  TASK_STATUS,
  TASK_STATUS_LABEL,
  type TaskStatus,
} from "@entities/task";
import { updateTaskStatusAction } from "../api/update-task-action";

const statusCycle: TaskStatus[] = [
  TASK_STATUS.TODO,
  TASK_STATUS.IN_PROGRESS,
  TASK_STATUS.DONE,
];

const statusVariant: Record<TaskStatus, "default" | "warning" | "success"> = {
  [TASK_STATUS.TODO]: "default",
  [TASK_STATUS.IN_PROGRESS]: "warning",
  [TASK_STATUS.DONE]: "success",
};

type TaskStatusToggleProps = {
  taskId: string;
  currentStatus: TaskStatus;
};

export function TaskStatusToggle({ taskId, currentStatus }: TaskStatusToggleProps) {
  const [optimisticStatus, setOptimisticStatus] = useOptimistic(currentStatus);
  const [, startTransition] = useTransition();

  function handleClick() {
    const currentIndex = statusCycle.indexOf(optimisticStatus);
    const nextStatus = statusCycle[(currentIndex + 1) % statusCycle.length];

    startTransition(async () => {
      setOptimisticStatus(nextStatus);
      await updateTaskStatusAction(taskId, nextStatus);
    });
  }

  return (
    <button onClick={handleClick} className="cursor-pointer">
      <Badge variant={statusVariant[optimisticStatus]}>
        {TASK_STATUS_LABEL[optimisticStatus]}
      </Badge>
    </button>
  );
}
