import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Functional1Module } from '../functional1/functional1.module';
import { Functional2Module } from '../functional2/functional2.module';
import { BaseModule } from '../base/base.module';

@Module({
    imports: [
        BaseModule,
        Functional1Module,
        Functional2Module,
    ],
    controllers: [ AppController ],
    providers: [ AppService ],
})
export class AppModule {
}
