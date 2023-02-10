import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';

async function bootstrap() {
  console.log('Initialization started');
  //Initialization Settings started
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('BattleStar')
    .setDescription('Меня зовут Кира Ёшикагэ')
    .setVersion(process.env.VERSION)
    .addTag('Ku_r_umi')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  //Initialization Settings finished
  console.log('Initialization finished')
  
  await app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
}
bootstrap();
