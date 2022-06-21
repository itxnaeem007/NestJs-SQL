import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'test' })
export class project {
  @Prop()
  name: string

  @Prop()
  email: string

  @Prop()
  age: number
}

export const ProjectSchema = SchemaFactory.createForClass(project);
export type ProjectDocument = project & Document;