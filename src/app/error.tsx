"use client";

import { Button } from "@shared/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-6xl font-bold text-zinc-200 dark:text-zinc-800">Error</h1>
      <p className="text-zinc-500">{error.message || "予期しないエラーが発生しました"}</p>
      <Button variant="secondary" onClick={reset}>
        再試行
      </Button>
    </div>
  );
}
