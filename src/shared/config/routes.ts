export const ROUTES = {
  HOME: "/",
  BOARD: "/board",
  TASK_DETAIL: (id: string) => `/tasks/${id}`,
} as const;
