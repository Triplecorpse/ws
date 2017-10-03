import {Component, OnDestroy} from '@angular/core';

import {ViewerDetectionOutputService} from './viewer-detection-output.service';
import {DataService} from "./data.service";

import * as _ from 'lodash';
import {IPersonUpdate} from "./i-person-update";
import {IPersonAlive} from "./i-person-alive";
import {IPersonForm} from "./i-person-form";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy {

  private initMessage: any = {
    type: 'rpc',
    message_id: '26fcc4a9-2fc5-4c46-a272-5e33485d9026',
    method_name: 'request_manifest',
    data: {}
  };
  public statusText: string = 'Connecting...';
  public qty = 1;
  public people = [];

  constructor(public viewerDetectionOutput: ViewerDetectionOutputService,
              public dataService: DataService) {
    viewerDetectionOutput.connection
      .subscribe((data) => {
        this.statusText = data.text;

        viewerDetectionOutput.messages
          .next(this.initMessage);
      });

    viewerDetectionOutput.manifest
      .subscribe((data) => {
      });

    viewerDetectionOutput.person_update
      .subscribe((person: IPersonUpdate) => {
        const peopleIds = _.map(this.people, iterablePerson => iterablePerson.person_id);
        const index = _.includes(peopleIds, person.person_id);

        if (!index) {
          this.people.push(person);
        }
      });

    viewerDetectionOutput.persons_alive
      .subscribe((data: IPersonAlive) => {
        const ids = data.person_ids;
      });

  }

  public submitPerson(personForm: IPersonForm): void {
    this.dataService.sendPerson(personForm)
      .subscribe(data => {
      });
  }

  private cleanPeople(ids): void {
    const indexesToDelete = [];

    _.forEach(this.people, (person, index) => {
      const includes = _.includes(ids, person.person_id);

      if (!includes) {
        indexesToDelete.push(index);
      }
    });

    _.forEach(indexesToDelete, index => {
      this.people.splice(index, 1);
    });
  }

  ngOnDestroy() {
    this.viewerDetectionOutput.messages.unsubscribe();
    this.viewerDetectionOutput.messages.complete();
    this.viewerDetectionOutput.ws.close();
  }
}
