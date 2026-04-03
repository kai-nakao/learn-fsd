import { TaskList } from "@widgets/task-list";

type TaskListPageProps = {
  status?: string;
  search?: string;
};

export function TaskListPage({ status, search }: TaskListPageProps) {
  return (
    <div className="mx-auto w-full max-w-lg flex flex-col gap-6 p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">タスク一覧</h1>
        <p className="mt-2 text-zinc-500">タスクの作成・管理</p>
      </div>
      <TaskList status={status} search={search} />
    </div>
  );
}
