import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';

@Injectable()
export class Functional1Service {

    constructor(private readonly baseService: BaseService) {

    }

    public async getF1data() {
        return await this.baseService.getData();
    }
}
