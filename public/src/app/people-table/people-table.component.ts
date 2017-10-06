import {Component, OnInit, Input} from '@angular/core';
import {IPersonUpdate} from "../i-person-update";
import {DataService} from "../data.service";

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit {
  @Input() people: IPersonUpdate[];

  constructor(public dataService: DataService) {

  }

  removePerson(id: string) {
    this.dataService.removePerson(id)
      .subscribe();
  }

  ngOnInit() {
  }
}
