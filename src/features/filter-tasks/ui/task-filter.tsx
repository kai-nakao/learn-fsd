"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@shared/ui";
import { TASK_STATUS, TASK_STATUS_LABEL } from "@entities/task";

export function TaskFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentStatus = searchParams.get("status") ?? "";
  const currentSearch = searchParams.get("search") ?? "";

  function updateParams(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`);
  }

  return (
    <div className="flex gap-3">
      <Input
        placeholder="検索..."
        defaultValue={currentSearch}
        onChange={(e) => updateParams("search", e.target.value)}
        className="max-w-xs"
      />
      <select
        value={currentStatus}
        onChange={(e) => updateParams("status", e.target.value)}
        className="flex h-10 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
      >
        <option value="">すべて</option>
        {Object.values(TASK_STATUS).map((status) => (
          <option key={status} value={status}>
            {TASK_STATUS_LABEL[status]}
          </option>
        ))}
      </select>
    </div>
  );
}
