import { Module } from '@nestjs/common';
import { Functional1Service } from './functional1.service';
import { Functional1Controller } from './functional1.controller';

@Module({
    providers: [ Functional1Service ],
    controllers: [ Functional1Controller ],
})
export class Functional1Module {
}
