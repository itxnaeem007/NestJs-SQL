import { Entity , Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projects')
export class project {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  age: number
}
