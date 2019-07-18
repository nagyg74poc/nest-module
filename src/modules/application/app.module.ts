import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Functional1Module } from '../functional1/functional1.module';
import { Functional2Module } from '../functional2/functional2.module';
import { BaseModule } from '../base/base.module';
import { CommonService } from './common.service';

@Global()
@Module({
    imports: [
        BaseModule,
        Functional1Module,
        Functional2Module,
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
        CommonService,
    ],
    exports: [
        CommonService,
    ],
})
export class AppModule {
}
