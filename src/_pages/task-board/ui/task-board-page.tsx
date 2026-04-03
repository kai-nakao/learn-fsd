import { TaskBoard } from "@widgets/task-board";

export function TaskBoardPage() {
  return (
    <div className="mx-auto w-full max-w-5xl flex flex-col gap-6 p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">タスクボード</h1>
        <p className="mt-2 text-zinc-500">ステータスごとのカンバンビュー</p>
      </div>
      <TaskBoard />
    </div>
  );
}
