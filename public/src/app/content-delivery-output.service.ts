import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {ContentDeliveryService} from "./content-delivery.service";

const viewerUrl = 'ws://localhost:3333/show-content';

export interface Message {
  author: string,
  message: string
}

@Injectable()
export class ContentDeliveryOutputService {
  public messages: Subject<Message>;

  constructor(wsService: ContentDeliveryService) {
    this.messages = <Subject<Message>>wsService
      .connect(viewerUrl)
      .map((response: MessageEvent): Message => {
        return response.data;
      });
  }
}
