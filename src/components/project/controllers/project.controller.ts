import {
  Controller,
  Get,
  Request,
  Response,
  Post,
  HttpStatus,
  Put,
  Delete,
  Body
} from '@nestjs/common';
import { ProjectsService } from '../services/projects.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectsService) {}

  @Get()
  async getAllProjects(@Request() req, @Response() res) {
    let response: unknown = await this.projectService.getAllProject();

    if (response === false) {
      return res.status(HttpStatus.EXPECTATION_FAILED).json({
        code: HttpStatus.EXPECTATION_FAILED,
        response,
      });
    }
    return res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      response,
    });
  }

  @Get('/:id')
  async getProjectById(@Request() req, @Response() res) {
    let response: unknown = await this.projectService.getProjectById(
      req.params['id'],
    );

    if (response === false) {
      return res.status(HttpStatus.EXPECTATION_FAILED).json({
        code: HttpStatus.EXPECTATION_FAILED,
        response,
      });
    }
    return res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      response,
    });
  }

  @Post('add')
  async addProject(@Body() obj: any, @Request() req, @Response() res) {
    let response: unknown = await this.projectService.addNewProject(obj);
    if (response === false) {
      return res.status(HttpStatus.EXPECTATION_FAILED).json({
        code: HttpStatus.EXPECTATION_FAILED,
        response,
      });
    }
    return res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      response,
    });
  }

  @Put('update/:id')
  async updateProject(@Body() obj: any, @Request() req, @Response() res) {
    let response: unknown = await this.projectService.updateProject(obj , req.params['id']);

    if (response === false) {
      return res.status(HttpStatus.EXPECTATION_FAILED).json({
        code: HttpStatus.EXPECTATION_FAILED,
        response,
      });
    }
    return res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      response,
    });
  }

  @Delete('delete/:id')
  async deleteProject(@Request() req, @Response() res) {

    let response: unknown = await this.projectService.deleteProjectById(req.params['id']);

    if (response === false) {
      return res.status(HttpStatus.EXPECTATION_FAILED).json({
        code: HttpStatus.EXPECTATION_FAILED,
        response,
      });
    }
    return res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      response,
    });
  }
}
