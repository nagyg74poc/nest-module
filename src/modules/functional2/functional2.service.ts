import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';

@Injectable()
export class Functional2Service {

    constructor(private readonly baseService: BaseService) {

    }

    public async getF2data() {
        return await this.baseService.getData();
    }
}
