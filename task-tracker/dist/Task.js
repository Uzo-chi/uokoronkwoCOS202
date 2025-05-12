export default class Task {
    constructor(title, description = '', priority = 'medium', category = 'general') {
        this.title = title;
        this.description = description;
        this.completed = false;
        this.createdAt = new Date();
        this.priority = priority;
        this.category = category;
    }
    toggleComplete() {
        this.completed = !this.completed;
        return this;
    }
    static fromObject(obj) {
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
