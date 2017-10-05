import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-manifest-setter',
  templateUrl: './manifest-setter.component.html',
  styleUrls: ['./manifest-setter.component.scss']
})
export class ManifestSetterComponent implements OnInit {
  private schema: string;
  private manifest: string;

  constructor(public dataService: DataService) {
    dataService.getManifestSchema()
      .subscribe((schema: Response) => {
        this.schema = schema.text();
      });

    dataService.getManifest()
      .subscribe((manifest: Response) => {
        this.manifest = manifest.text();
      });
  }

  saveManifest() {
    this.dataService.setManifest(this.manifest)
      .subscribe(() => {
        alert('Manifest is saved');
      }, (error) => {
        alert('Manifest is NOT saved, llok the console');
        console.error(error);
      });
  }

  ngOnInit() {
  }

}
