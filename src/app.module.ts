import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { project, ProjectSchema } from './entities/project.entity';
import * as dotenv from 'dotenv'
import { ProjectsModule } from './components/project/project.module';
dotenv.config()

@Module({
  imports: [
    MongooseModule.forRoot(process.env.ATLAS_URI),
    MongooseModule.forFeature([
      { name: project.name, schema: ProjectSchema },
    ]),
    ProjectsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
