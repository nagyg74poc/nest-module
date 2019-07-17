import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './modules/application/app.module';

async function bootstrap() {
    const servicePort = 3000;
    const app = await NestFactory.create(AppModule);

    const docUrl = 'docs';
    const docOptions = new DocumentBuilder()
        .setTitle('Wallet Public API')
        .setDescription('The wallet API description')
        .setSchemes('http')
        .setVersion('1.0')
        .build();
    const doc = SwaggerModule.createDocument(app, docOptions);
    SwaggerModule.setup(docUrl, app, doc);

    await app.listen(servicePort)
        .then( () => {
            Logger.log(`Documentation is available on http://localhost:${servicePort}/${docUrl}`);
        });
}

bootstrap();
