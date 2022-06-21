import { Module } from '@nestjs/common';
import { ProjectController } from './controllers/project.controller';
import { ProjectsService } from './services/projects.service';
import { project } from '../../entities/project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([project]),
  ],
  controllers: [ProjectController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
