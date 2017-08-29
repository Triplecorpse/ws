import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {ViewerDetectionService} from "./viewer-detection.service";

const viewerUrl = 'ws://localhost:3333/connect-viewer';

export interface Message {
  author: string,
  message: string
}

@Injectable()
export class ViewerDetectionOutputService {
  public messages: Subject<Message>;

  constructor(wsService: ViewerDetectionService) {
    this.messages = <Subject<Message>>wsService
      .connect(viewerUrl)
      .map((response: MessageEvent): Message => {
        return JSON.parse(response.data);
      });
  }
}
