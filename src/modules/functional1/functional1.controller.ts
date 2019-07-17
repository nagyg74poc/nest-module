import { Controller, Get } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Functional1Service } from './functional1.service';

@Controller('f1')
export class Functional1Controller {

    constructor(
        private readonly f1Service: Functional1Service
    ) {
    }

    @Get('data')
    async getData(): Promise<any> {
        return await this.f1Service.getF1data();
    }
}
