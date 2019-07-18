import { Module } from '@nestjs/common';
import { Functional2Service } from './functional2.service';
import { Functional2Controller } from './functional2.controller';
import { CommonService } from '../application/common.service';

@Module({
    providers: [
        Functional2Service,
        CommonService,
    ],
    controllers: [ Functional2Controller ],
})
export class Functional2Module {
}
