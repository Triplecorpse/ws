import {Component, OnInit} from '@angular/core';
import {ViewerDetectionOutputService} from './viewer-detection-output.service';
import {ContentDeliveryOutputService} from './content-delivery-output.service';

import {IMessage} from "./imessage";
import {ContentDeliveryService} from "./content-delivery.service";
import {ViewerDetectionService} from "./viewer-detection.service";

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

  constructor(public viewerDetectionOutput: ViewerDetectionOutputService,
              public contentDeliveryOutput: ContentDeliveryOutputService) {
    viewerDetectionOutput.messages
      .subscribe(msg => {
        this.updateViewers(msg)
      });

    contentDeliveryOutput.messages
      .subscribe((msg) => {
        this.previousContentId = this.contentId;
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
