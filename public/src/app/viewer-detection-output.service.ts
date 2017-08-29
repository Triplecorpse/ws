import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {ViewerDetectionService} from "./viewer-detection.service";
import {IMessage} from "./imessage";
import {IViewer} from "./iviewer";

const viewerUrl = 'ws://localhost:3333/connect-viewer';

export interface Message {
  author: string,
  message: string
}

@Injectable()
export class ViewerDetectionOutputService {
  public messages: Subject<IMessage>;

  constructor(wsService: ViewerDetectionService) {
    this.messages = <Subject<any>>wsService
      .connect(viewerUrl)
      .map((response: MessageEvent): IViewer[] => {
        const res = JSON.parse(response.data);
        return JSON.parse(response.data);
      });
  }
}
