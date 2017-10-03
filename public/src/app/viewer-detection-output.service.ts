import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {ViewerDetectionService} from "./viewer-detection.service";
import {IViewer} from "./iviewer";
import {Observable} from "rxjs/Observable";

const viewerUrl = 'ws://localhost:3333/';

@Injectable()
export class ViewerDetectionOutputService {

  constructor(public wsService: ViewerDetectionService) {
    this.messages = <Subject<any>>wsService
      .connect(viewerUrl)
      .map((response: MessageEvent): IViewer[] => {
        const res = JSON.parse(response.data);
        return JSON.parse(response.data);
      });
  }

  public messages: Subject<any>;
  public connection: Observable<any> = this.wsService.connection;
  public ws = this.wsService.ws;
}
