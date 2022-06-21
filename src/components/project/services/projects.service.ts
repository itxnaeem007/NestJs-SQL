/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { project, ProjectDocument } from '../../../entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(project.name) private projectModel: Model<ProjectDocument>,
  ) {}

  /**
   * @description Project listing
   * @author Naeem Akram
   */
  async getAllProject(): Promise<{ project: project[] }> {
    try {
      let response = await this.projectModel.find({}).exec();
      return { project: response };
    } catch (error) {}
  }

  /**
   * @description Project listing by id
   * @author Naeem Akram
   */
  async getProjectById(id): Promise<{ project: project }> {
    try {
      let response = await this.projectModel
        .findById({ _id: new mongoose.Types.ObjectId(id) })
        .exec();
      return { project: response };
    } catch (error) {}
  }

  /**
   * @description Add new Project
   * @param name name of project
   * @param email email of project onwer
   * @param age age of project onwer
   * @author Naeem Akram
   */
  async addNewProject(newEntery: project) {
    try {
      let response = await this.projectModel.create(newEntery);
      return { response };
    } catch (error) {}
  }

  /**
   * @description update Project
   * @param name name of project
   * @param email email of project onwer
   * @param age age of project onwer
   * @author Naeem Akram
   */
  async updateProject(updates, id) {
    try {
      const listingQuery = { _id: new mongoose.Types.ObjectId(id) };
      let response = await this.projectModel.updateOne(listingQuery, {
        $set: updates,
      });
      return { response };
    } catch (error) {}
  }

  /**
   * @description detete Project by id
   * @param id project id
   * @author Naeem Akram
   */
  async deleteProjectById(id) {
    try {
      const query = { _id: new mongoose.Types.ObjectId(id) };
      let response = await this.projectModel.deleteOne(query);
      return { response };
    } catch (error) {}
  }
}
