import {Component, HostListener} from '@angular/core';
import {ViewerDetectionOutputService} from "./viewer-detection-output.service";
import {ViewerDetectionService} from "./viewer-detection.service";
import {ContentDeliveryService} from "./content-delivery.service";
import {ContentDeliveryOutputService} from "./content-delivery-output.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    console.log('closing');
  }

  private viewers: any[] = [];
  content: string = '';

  constructor(public viewerDetectionOutput: ViewerDetectionOutputService, public viewerDetectionService: ViewerDetectionService,
              public contentDeliveryOutput: ContentDeliveryOutputService, public contentDeliveryService: ContentDeliveryService) {
    viewerDetectionService.onConnectionReady
      .subscribe(data => {
        console.log('connected');
      });

    viewerDetectionOutput.messages
      .subscribe(msg => {
        this.updateViewers(msg)
      });

    contentDeliveryOutput.messages
      .subscribe(msg => {
        this.getContentUrl(msg);
      });
  }

  private message = {
    author: 'AUTH1',
    message: ''
  };

  private updateViewers(viewer) {
    if (viewer.away) {
      return;
    }

    this.viewers = viewer;
  }

  getContentUrl(msg) {
    if (msg) {
      msg = JSON.parse(msg);
      console.log(msg.properties, msg.properties.content_name);
      this.content = '../assets/' + msg.properties.content_name;
      return '../assets/' + msg.properties.content_name;
    } else {
      this.content = '';
      return '';
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
}
