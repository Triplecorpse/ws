import {Component, OnDestroy} from '@angular/core';

import {ViewerDetectionOutputService} from './viewer-detection-output.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy{

  private initMessage: any = {
    type: 'rpc',
    message_id: '26fcc4a9-2fc5-4c46-a272-5e33485d9026',
    method_name: 'request_manifest',
    data: {}
  };
  public statusText: string = 'Connecting...';

  constructor(public viewerDetectionOutput: ViewerDetectionOutputService) {
    viewerDetectionOutput.messages
      .subscribe(msg => {
        // console.log(msg);
      });

    viewerDetectionOutput.connection
      .subscribe((data) => {
        this.statusText = data.text;

        viewerDetectionOutput.messages
          .next(this.initMessage);
      });
  }

  ngOnDestroy() {
    this.viewerDetectionOutput.messages.unsubscribe();
    this.viewerDetectionOutput.messages.complete();
    this.viewerDetectionOutput.ws.close();
  }
}
