import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskService } from './task.service';

@Controller('users/:idUser/tasks')
export class TaskController {
    constructor(private taskService: TaskService){}

    @Post()
    createTask(@Param("idUser") idUser: string, @Body() createTaskDto: CreateTaskDto) {
        createTaskDto.userId = +idUser;
        return this.taskService.createTask(createTaskDto);
    }
    
    @Get()
    findTasks(@Param("idUser", ParseIntPipe) userId: number) {
        return this.taskService.findTasks(userId);
    }

    @Delete(":id")
    deleteTask(@Param("id", ParseIntPipe) id: number) {
        return this.taskService.deleteTask(id);
    }
}