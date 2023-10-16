import { TaskDto } from "./taskDto"

export interface PageableTask {
  tasks: TaskDto[],
  currentPage: number,
  totalItems: number,
  totalPages: number
}

