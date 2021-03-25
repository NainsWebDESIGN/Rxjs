import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    Observer = {
        next: value => { console.log(value); },
        complete: () => { console.log('完成!'); },
        error: error => { console.log(error); }
    }
    constructor() { }

}
