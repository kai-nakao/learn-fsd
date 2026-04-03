import { TaskListPage } from "@pages/task-list";

type SearchParams = Promise<{ status?: string; search?: string }>;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  return <TaskListPage status={params.status} search={params.search} />;
}
