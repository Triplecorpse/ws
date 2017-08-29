import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() viewer: any;

  constructor() {
  }

  getTime(timestamp: number): string {
    const time = new Date(timestamp);

    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  }

  ngOnInit() {
  }

}
