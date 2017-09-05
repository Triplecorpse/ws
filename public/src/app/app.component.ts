import {Component, OnDestroy, OnInit} from '@angular/core';
import {ViewerDetectionOutputService} from './viewer-detection-output.service';
import {ContentDeliveryOutputService} from './content-delivery-output.service';

import {IMessage} from "./imessage";
import {IViewer} from "./iviewer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy {

  viewers: any[] = [];
  viewerIsLooking: any = {
    male: 0,
    female: 0
  };
  content: string = '';
  contentId: number;
  contentName: string;
  previousContentId: number;
  previousContentName: string;
  stats: any = {
    age: 0,
    gender: '',
    people: {
      male: 0,
      female: 0
    }
  };

  constructor(public viewerDetectionOutput: ViewerDetectionOutputService,
              public contentDeliveryOutput: ContentDeliveryOutputService) {
    viewerDetectionOutput.messages
      .subscribe(msg => {
        this.updateViewers(msg);
      });

    contentDeliveryOutput.messages
      .subscribe((msg) => {
        this.previousContentId = this.contentId;
        this.previousContentName = this.contentName;
        this.setStats();
        this.setContentUrl(msg);
      });
  }

  private message: IMessage = {
    author: 'AUTH1',
    message: ''
  };

  private updateViewers(viewer) {
    if (viewer.away) {
      return;
    }

    this.viewers = viewer;
    this.viewerIsLooking.male = 0;
    this.viewerIsLooking.female = 0;
    this.viewers.forEach((v) => {
      if (v.rolling_expected_values.isLooking) {
        v.rolling_expected_values.gender === 'male' ? this.viewerIsLooking.male += 1 : this.viewerIsLooking.female += 1;
      }
    });
  }

  setStats() {
    let mGenderCount: number = 0;
    let fGenderCount: number = 0;
    let avgAge: number = 0;

    this.stats.people.female = 0;
    this.stats.people.male = 0;
    this.stats.age = 0;

    if (!this.viewers.length) {
      return;
    }

    this.viewers.forEach((viewer) => {
      if (viewer.rolling_expected_values.gender === 'male') {
        mGenderCount++;
      } else {
        fGenderCount++;
      }
    });

    let sum: number = 0;

    this.viewers.forEach((viewer) => {
      sum += viewer.rolling_expected_values.age;
    });
    avgAge = sum / this.viewers.length;

    this.stats.people.female = fGenderCount;
    this.stats.people.male = mGenderCount;
    this.stats.age = avgAge.toFixed(0);
  }

  setContentUrl(msg) {
    if (msg) {
      this.content = '../assets/' + msg.content_name;
      this.contentId = msg.content_id;
      this.contentName = msg.content_name;
    } else {
      this.content = '';
    }
  }

  sendMsg(command: string) {
    this.viewerIsLooking.male = 0;
    this.viewerIsLooking.female = 0;
    this.message.message = command;
    this.viewerDetectionOutput.messages
      .next(this.message);
    this.message.message = 'start';
    this.contentDeliveryOutput.messages
      .next(this.message);
    this.message.message = '';
  }

  ngOnDestroy() {
    this.viewerDetectionOutput.messages.unsubscribe();
    this.contentDeliveryOutput.messages.unsubscribe();
  }
}
