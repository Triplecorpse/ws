import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {ContentDeliveryService} from './content-delivery.service';

import {IContent} from './icontent';
import {IMessage} from "./imessage";

const viewerUrl = 'ws://localhost:3333/show-content';

@Injectable()
export class ContentDeliveryOutputService {
  public messages: Subject<IMessage>;

  constructor(wsService: ContentDeliveryService) {
    this.messages = <Subject<any>>wsService
      .connect(viewerUrl)
      .map((response: MessageEvent): IContent => {
        const res = JSON.parse(response.data);
        return {
          local_timestamp: res.local_timestamp,
          name_of_event: res.name_of_event,
          content_id: res.content_id,
          content_name: res.content_name
        };
      });
  }
}
