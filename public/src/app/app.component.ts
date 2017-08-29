import {Component, HostListener} from '@angular/core';
import {ViewerDetectionOutputService} from "./viewer-detection-output.service";
import {ViewerDetectionService} from "./viewer-detection.service";

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

  constructor(public viewerDetectionOutput: ViewerDetectionOutputService, public viewerDetectionService: ViewerDetectionService) {
    viewerDetectionService.onConnectionReady
      .subscribe(data => {
        console.log('connected');
      });

    viewerDetectionOutput.messages
      .subscribe(msg => {
        // console.log("Response from websocket:", msg);
        this.updateViewers(msg)
      });
  }

  private message = {
    author: 'MSG01',
    message: ''
  };

  private updateViewers(viewer) {
    if (viewer.away) {
      return;
    }

    this.viewers = viewer;
  }

  sendMsg(command: string) {
    this.message.message = command;
    this.viewerDetectionOutput.messages
      .next(this.message);
  }
}
