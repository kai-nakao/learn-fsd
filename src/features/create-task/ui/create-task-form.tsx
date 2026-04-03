"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button, Input, Textarea } from "@shared/ui";
import { createTaskAction, type CreateTaskState } from "../api/create-task-action";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "作成中..." : "タスクを作成"}
    </Button>
  );
}

export function CreateTaskForm() {
  const [state, formAction] = useActionState<CreateTaskState, FormData>(
    createTaskAction,
    {},
  );

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <div>
        <Input name="title" placeholder="タスク名" />
        {state.errors?.title && (
          <p className="mt-1 text-xs text-red-600">{state.errors.title}</p>
        )}
      </div>

      <div>
        <Textarea name="description" placeholder="説明" />
        {state.errors?.description && (
          <p className="mt-1 text-xs text-red-600">{state.errors.description}</p>
        )}
      </div>

      <div>
        <select
          name="priority"
          className="flex h-10 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          defaultValue="medium"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        {state.errors?.priority && (
          <p className="mt-1 text-xs text-red-600">{state.errors.priority}</p>
        )}
      </div>

      <SubmitButton />

      {state.success && (
        <p className="text-sm text-green-600">タスクを作成しました</p>
      )}
    </form>
  );
}
