export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export interface PostTask {
    title: string
    completed?: boolean
}