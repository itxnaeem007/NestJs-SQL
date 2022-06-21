/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common';
import { project } from '../../../entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Exceptions } from 'src/utils/exceptions/exceptions';
import { RESPONSE_MESSAGES } from 'src/utils/enums/response.messages';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(project) 
    private readonly projectsRepository: Repository<project>,
  ) {}

  /**
   * @description Project listing
   * @author Naeem Akram
   */
  async getAllProject(): Promise<{ project: project[] }> {
    try {
      let response = await this.projectsRepository.find({
				select: ['name', 'email', 'age' , 'id' ]
			})
      return { project: response };
    } catch (error) {}
  }

  /**
   * @description Project listing by id
   * @author Naeem Akram
   */
  async getProjectById(id): Promise<{ project: project[] }> {
    try {
      let response = await this.projectsRepository.find({
				select: ['name', 'email', 'age' , 'id'],
        where: {
					id: id,
				},
			})
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
  async addNewProject(newEntery) {
    try {
			const insertedResult = await this.projectsRepository.save(newEntery)
      console.log('saved result', insertedResult)
      return { insertedResult };
    } catch (error) {
      console.log(error)
    }
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
      let projectOnDb = await this.projectsRepository.findOne({
				where: {
					id: id,
				},
				select: ['name', 'email', 'age' , 'id'],
			})
      if(!projectOnDb){
        Exceptions.sendNotFoundException(RESPONSE_MESSAGES.PROJECT_NOT_FOUND)
      }
      const updatedData = { ...projectOnDb, ...updates };

      const response = await this.projectsRepository.save(updatedData)

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
      const response = await this.projectsRepository.delete(id)
      return { response };
    } catch (error) {}
  }
}
