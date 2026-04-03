import type { Metadata } from "next";
import { getTaskById } from "@entities/task";
import { TaskDetailPage } from "@pages/task-detail";

type Params = Promise<{ id: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
  const task = await getTaskById(id);

  return {
    title: task ? `${task.title} | FSD Tasks` : "タスクが見つかりません",
  };
}

export default async function TaskDetail({ params }: { params: Params }) {
  const { id } = await params;
  return <TaskDetailPage id={id} />;
}
