import {Component, OnInit} from '@angular/core';
import {ViewerDetectionOutputService} from './viewer-detection-output.service';
import {ContentDeliveryOutputService} from './content-delivery-output.service';

import {IMessage} from "./imessage";
import {IViewer} from "./iviewer";
import {Stats} from "./stats";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  viewers: any[] = [];
  content: string = '';
  contentId: number;
  contentName: string;
  previousContentId: number;
  stats: any = {
    age: new Stats(),
    gender: new Stats(),
    handsUp: new Stats()
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
    this.stats.age.resetAll();
    this.stats.gender.resetAll();
    this.stats.handsUp.resetAll();
    if (!this.viewers.length) {
      return;
    }

    this.viewers.forEach((viewer) => {
      if (viewer.rolling_expected_values.gender === 'male') {
        this.stats.gender.countMale();
        this.stats.age.addMale(viewer.rolling_expected_values.age);
        if (viewer.rolling_expected_values.handUp) {
          this.stats.handsUp.countMale();
        }
      } else {
        this.stats.gender.countFemale();
        this.stats.age.addFemale(viewer.rolling_expected_values.age);
        if (viewer.rolling_expected_values.handUp) {
          this.stats.handsUp.countFemale();
        }
      }

    });
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
    this.message.message = command;
    this.viewerDetectionOutput.messages
      .next(this.message);
    this.message.message = 'start';
    this.contentDeliveryOutput.messages
      .next(this.message);
    this.message.message = '';
  }

  avgAge(sumAge, sumPeople): number {
    if (sumAge == 0 || sumPeople == 0) {
      return 0;
    } else {
      return +(sumAge / sumPeople).toFixed(0)
    }
  }

  avgAllAge(male, female): number {
    if (male == 0 || female == 0) {
      if (male) {
        return male;
      } else {
        return female;
      }
    } else {
      return +((male + female) / 2).toFixed(0);
    }
  }

  ngOnInit() {
  }
}
