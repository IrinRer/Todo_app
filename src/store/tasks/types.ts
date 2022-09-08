export const TASKS_SLICE_ALIAS = "tasks";

export interface ITaskItem {
    description: string;
    state: string;
    ready: boolean;
}
export interface ITasks {
    tasks: Array<ITaskItem>
}