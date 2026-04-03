"use client";

import { useTransition } from "react";
import { Button } from "@shared/ui";
import { deleteTaskAction } from "../api/delete-task-action";

type DeleteTaskButtonProps = {
  taskId: string;
};

export function DeleteTaskButton({ taskId }: DeleteTaskButtonProps) {
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    if (!confirm("このタスクを削除しますか？")) return;
    startTransition(async () => {
      await deleteTaskAction(taskId);
    });
  }

  return (
    <Button variant="ghost" onClick={handleClick} disabled={isPending}>
      {isPending ? "削除中..." : "削除"}
    </Button>
  );
}
