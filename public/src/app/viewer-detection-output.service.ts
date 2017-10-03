import {Injectable} from '@angular/core';
import {Subject, ReplaySubject} from 'rxjs/Rx';
import {ViewerDetectionService} from "./viewer-detection.service";
import {Observable} from "rxjs/Observable";

const viewerUrl = 'ws://localhost:3333/';

@Injectable()
export class ViewerDetectionOutputService {

  constructor(public wsService: ViewerDetectionService) {
    this.messages = <Subject<any>>wsService
      .connect(viewerUrl)
      .map((response: MessageEvent): any => {
        return JSON.parse(response.data);
      });

    const msgQ = this.messages.share();

    this.persons_alive = msgQ
      .filter((response: any): any => {
        return response.subject === 'persons_alive';
      })
      .map(alive => {
        return alive.data;
      });

    this.person_update = msgQ
      .filter((response: any): any => {
        return response.subject === 'person_update';
      })
      .map(update => {
        return update.data;
      });

    this.manifest = msgQ
      .filter((response: any): any => {
        return response.subject === 'manifest';
      })
      .map(manifest => {
        return manifest.data;
      });
  }

  public persons_alive: Observable<any>;
  public person_update: Observable<any>;
  public manifest: Observable<any>;

  public messages: Subject<any>;
  public up: Subject<any>;
  public connection: Observable<any> = this.wsService.connection;
  public ws = this.wsService.ws;
}
