import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTaskDto } from '../dto/create-task.dto';
import { Task } from './task.model';

@Injectable()
export class TaskService {
    constructor(
        @InjectModel(Task)
        private taskModel: typeof Task,
    ){}

    createTask(createTaskDto: CreateTaskDto) {
        return this.taskModel.create(createTaskDto);
    }

    findTasks(userId: number): Promise<Task[]> {
        const where: any = {} 
        where.userId = userId;
        return this.taskModel.findAll({ where });
    }

    deleteTask(id: number) {
        return this.taskModel.destroy({ where: { id } })
    }

}
