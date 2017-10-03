import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";

@Injectable()
export class DataService {

  private api = {
    newPerson: '/person'
  };

  constructor(public http: Http) { }

  sendPerson(options: any) {
    let search = new URLSearchParams();

    for (let option in options) {
      if (options.hasOwnProperty(option)) {
        search.set(option, options[option]);
      }
    }

    console.log(options, search);

    return this.http.get(this.api.newPerson, {search});
  }
}
