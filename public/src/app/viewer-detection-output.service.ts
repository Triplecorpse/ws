import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import {ViewerDetectionService} from "./viewer-detection.service";

const CHAT_URL = 'ws://localhost:3333/connect-viewer';

export interface Message {
  author: string,
  message: string
}

@Injectable()
export class ViewerDetectionOutputService {
  public messages: Subject<Message>;

  constructor(wsService: ViewerDetectionService) {
    this.messages = <Subject<Message>>wsService
      .connect(CHAT_URL)
      .map((response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        return data;
      });
  }
}
