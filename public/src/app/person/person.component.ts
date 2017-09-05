import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input() viewer: any;

  constructor() {
  }

  getTime(timestamp: number): string {
    const time = new Date(timestamp);
    let hours: string = time.getHours().toString();
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();
    if (+hours < 10) {
      hours = "0" + hours;
    }
    if (+minutes < 10) {
      minutes = "0" + minutes;
    }
    if (+seconds < 10) {
      seconds = "0" + seconds;
    }
    return `${hours}:${minutes}:${seconds}`;
  }
}
