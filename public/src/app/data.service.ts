import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import {IPersonForm} from "./i-person-form";

@Injectable()
export class DataService {

  private api = {
    newPerson: '/person'
  };

  constructor(public http: Http) { }

  addPerson(options: IPersonForm, qty: number) {
    let search: URLSearchParams = new URLSearchParams();

    for (let option in options) {
      if (options.hasOwnProperty(option)) {
        search.set(option, options[option]);
      }
    }

    search.set('qty', qty.toString());

    return this.http.get(this.api.newPerson + '/add', {search});
  }

  removePerson(id: string) {
    let search: URLSearchParams = new URLSearchParams();

    search.set('id', id);

    return this.http.get(this.api.newPerson + '/remove', {search});
  }
}
