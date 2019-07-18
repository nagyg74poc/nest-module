import { Module } from '@nestjs/common';
import { Functional2Service } from './functional2.service';
import { Functional2Controller } from './functional2.controller';

@Module({
    providers: [ Functional2Service ],
    controllers: [ Functional2Controller ],
})
export class Functional2Module {
}
