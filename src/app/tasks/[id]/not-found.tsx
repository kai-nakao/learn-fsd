import Link from "next/link";
import { Button } from "@shared/ui";
import { ROUTES } from "@shared/config";

export default function TaskNotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-6xl font-bold text-zinc-200 dark:text-zinc-800">404</h1>
      <p className="text-zinc-500">タスクが見つかりません</p>
      <Link href={ROUTES.HOME}>
        <Button variant="secondary">タスク一覧に戻る</Button>
      </Link>
    </div>
  );
}
