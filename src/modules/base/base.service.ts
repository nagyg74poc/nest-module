import { Injectable } from '@nestjs/common';

import * as file from './base.data.json';

@Injectable()
export class BaseService {
    private readonly loaded: Promise<boolean>;
    private $data: any;

    constructor() {
        this.loaded = new Promise<boolean>((resolveLoaded, rejectLoaded) => {
            setTimeout(() => {
                const d: any = Object.assign({}, file);
                d.random = Math.floor(Math.random() * ( 15000 - 100 ) + 100);
                this.data = d;
                resolveLoaded(true);
            }, 1500);
        });
    }

    public async getData(): Promise<any> {
        await this.loaded;
        return this.$data;
    }

    public set data(val: any) {
        this.$data = val;
    }

    public alteredData() {
        const altered = Math.floor(Math.random() * ( 15000 - 100 ) + 100);
        const a = Object.assign({ altered }, this.$data);
        return a;
    }

    public async logData(): Promise<void> {
        await this.loaded;
        console.log(this.$data);
    }
}
