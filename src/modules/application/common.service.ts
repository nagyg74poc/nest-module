import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';

@Injectable()
export class CommonService {

    constructor(
        private readonly baseService: BaseService,
    ) {
    }

    public async commonFn() {
        return Object.assign({ commonFnHasRun: true }, this.baseService.alteredData());
    }
}
