export type Priority = 'low' | 'medium' | 'high';

export type Category = 'work' | 'personal' | 'general' | 'shopping' | 'other';

export interface TaskData {
    title: string;
    completed?: boolean;
    createdAt?: Date | string;
    description?: string;
    priority: Priority;
    category: Category;
}

export default class Task {
    title: string;
    completed: boolean;
    createdAt: Date;
    description: string;
    priority: Priority;
    category: Category;
    
    constructor(title:string, description: string = '', priority: Priority = 'medium', category: Category = 'general') {
        this.title = title;
        this.description = description;
        this.completed = false;
        this.createdAt = new Date();
        this.priority = priority;
        this.category = category;
    }

    toggleComplete(): Task {
        this.completed = !this.completed;
        return this;
    }

    static fromObject(obj: TaskData): Task {
        const task = new Task(obj.title, obj.description || '', obj.priority || 'medium');

        if (obj.completed !== undefined) {
            task.completed = obj.completed;
        }

        if (obj.createdAt) {
            task.createdAt = new Date(obj.createdAt);
        }
        
        return task;
    }
}