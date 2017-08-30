import {Component, OnInit} from '@angular/core';
import {ViewerDetectionOutputService} from './viewer-detection-output.service';
import {ContentDeliveryOutputService} from './content-delivery-output.service';

import {IMessage} from "./imessage";
import {IViewer} from "./iviewer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  viewers: any[] = [];
  content: string = '';
  contentId: number;
  previousContentId: number;
  stats: any = {
    age: 0,
    gender: '',
    people: 0
  };

  constructor(public viewerDetectionOutput: ViewerDetectionOutputService,
              public contentDeliveryOutput: ContentDeliveryOutputService) {
    viewerDetectionOutput.messages
      .subscribe(msg => {
        this.updateViewers(msg)
      });

    contentDeliveryOutput.messages
      .subscribe((msg) => {
        this.previousContentId = this.contentId;
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
  }

  setStats() {
    let avgGender = 'Male';
    let mGenderCount: number = 0;
    let fGenderCount: number = 0;
    let avgAge: number = 0;

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

    const sum = this.viewers.reduce((v1, v2) => {
      let sum = 0;
      if( typeof v1 === 'number' ) {
        sum = v1
      } else {
        sum = v1.rolling_expected_values.age;
      }
      return sum + v2.rolling_expected_values.age;
    });
    avgAge = sum / this.viewers.length;

    if (fGenderCount > mGenderCount) {
      avgGender = 'Female'
    }

    this.stats.age = avgAge.toFixed(0);
    this.stats.gender = avgGender;
    this.stats.people = this.viewers.length;
  }

  setContentUrl(msg) {
    if (msg) {
      this.content = '../assets/' + msg.content_name;
      this.contentId = msg.content_id;
    } else {
      this.content = '';
    }
  }

  sendMsg(command: string) {
    this.message.message = command;
    this.viewerDetectionOutput.messages
      .next(this.message);
    this.message.message = 'start';
    this.contentDeliveryOutput.messages
      .next(this.message);
    this.message.message = '';
  }

  ngOnInit() {
  }
}
