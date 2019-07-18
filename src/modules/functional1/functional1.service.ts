import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { CommonService } from '../application/common.service';

@Injectable()
export class Functional1Service {

    constructor(
        private readonly baseService: BaseService,
        private readonly commonService: CommonService,
    ) {

    }

    public async getF1data() {
        const b = await this.baseService.getData();
        const c = await this.commonService.commonFn();
        return Object.assign({}, b, c);
    }
}
