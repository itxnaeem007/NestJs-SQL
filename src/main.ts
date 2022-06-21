import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'
import * as dotenv from 'dotenv'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ skipMissingProperties: false }))
	app.enableCors()

  const config = new DocumentBuilder()
  .setTitle('Nest Practice') 
  .setDescription('To learn Nest js and mongoDb') 
  .setVersion('1.0')
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
