import { Responsible } from "./responsible";

export interface Task {
  id: number,
  title: string,
  description: string,
  responsible: Responsible,
  priorityEnum: string,
  deadLine: Date  
}

const category: Partial<Task> = {};
