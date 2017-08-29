import {Component, OnInit} from '@angular/core';
import {ViewerDetectionOutputService} from './viewer-detection-output.service';
import {ContentDeliveryOutputService} from './content-delivery-output.service';

import {IMessage} from "./imessage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  viewers: any[] = [];
  content: string = '';

  constructor(public viewerDetectionOutput: ViewerDetectionOutputService, public contentDeliveryOutput: ContentDeliveryOutputService) {
    viewerDetectionOutput.messages
      .subscribe(msg => {
        this.updateViewers(msg)
      });

    contentDeliveryOutput.messages
      .subscribe((msg) => {
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

  setContentUrl(msg) {
    if (msg) {
      this.content = '../assets/' + msg.content_name;
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
