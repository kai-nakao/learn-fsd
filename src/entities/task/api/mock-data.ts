import type { Task } from "../model";

// サーバーサイドのインメモリストア（Phase 6 で外部 API に置き換え）
export let mockTasks: Task[] = [
  {
    id: "1",
    title: "FSD のドキュメントを読む",
    description: "Feature-Sliced Design の公式ドキュメントを通読し、レイヤー構成を理解する",
    status: "todo",
    priority: "high",
    createdAt: "2026-03-28T09:00:00Z",
    updatedAt: "2026-03-28T09:00:00Z",
  },
  {
    id: "2",
    title: "Next.js 16 の新機能を試す",
    description: "Server Actions, useActionState, Turbopack など主要な新機能を動作確認する",
    status: "in_progress",
    priority: "high",
    createdAt: "2026-03-29T10:00:00Z",
    updatedAt: "2026-03-30T14:00:00Z",
  },
  {
    id: "3",
    title: "shared/ui コンポーネントの作成",
    description: "Button, Input, Card, Badge などの汎用UIコンポーネントを実装する",
    status: "done",
    priority: "medium",
    createdAt: "2026-03-30T08:00:00Z",
    updatedAt: "2026-04-01T12:00:00Z",
  },
  {
    id: "4",
    title: "テストの追加",
    description: "Vitest を導入し、shared/lib のユーティリティ関数にユニットテストを追加する",
    status: "todo",
    priority: "low",
    createdAt: "2026-03-31T11:00:00Z",
    updatedAt: "2026-03-31T11:00:00Z",
  },
  {
    id: "5",
    title: "エラーハンドリングの実装",
    description: "error.tsx, not-found.tsx を追加し、適切なエラー表示を実装する",
    status: "todo",
    priority: "medium",
    createdAt: "2026-04-01T09:00:00Z",
    updatedAt: "2026-04-01T09:00:00Z",
  },
];
