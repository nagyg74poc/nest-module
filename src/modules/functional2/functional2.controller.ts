import { Controller, Get } from '@nestjs/common';
import { Functional2Service } from './functional2.service';

@Controller('f2')
export class Functional2Controller {

    constructor(
        private readonly f2Service: Functional2Service
    ) {
    }

    @Get('data')
    async getData(): Promise<any> {
        return await this.f2Service.getF2data();
    }
}
