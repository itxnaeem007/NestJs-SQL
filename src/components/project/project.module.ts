import { Module } from '@nestjs/common';
import { ProjectController } from './controllers/project.controller';
import { ProjectsService } from './services/projects.service';
import { project, ProjectSchema } from '../../entities/project.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: project.name, schema: ProjectSchema }]),
  ],
  controllers: [ProjectController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
