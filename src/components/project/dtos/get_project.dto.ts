import { IsOptional } from 'class-validator'

export class GetProjectDTO {
	@IsOptional()
	name: string

	@IsOptional()
	email: string

	@IsOptional()
	age: number
}
