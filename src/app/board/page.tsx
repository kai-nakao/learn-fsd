import type { Metadata } from "next";
import { TaskBoardPage } from "@pages/task-board";

export const metadata: Metadata = {
  title: "タスクボード | FSD Tasks",
};

export default function Board() {
  return <TaskBoardPage />;
}
