export interface TaskDto {
  id: number,
  title: string,
  responsibleName: string,
}

export const TaskDtoColumns = [
  {
    key: 'id',
    type: 'number',
    label: 'id',
  },
  {
    key: 'title',
    type: 'text',
    label: 'title',
  },
  {
    key: 'responsibleName',
    type: 'text',
    label: 'responsibleName',
  }  
];