import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxCsvParser, NgxCSVParserError} from "ngx-csv-parser";

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  csvRecords: any[] = [];
  headers: string[] = [];
  constructor(private ngxCsvParser: NgxCsvParser) {
  }

  // Your applications input change listener for the CSV File
  fileChangeListener($event: any): void {

    // Select the files from the event
    const files = $event.srcElement.files;

    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], {header: true, delimiter: ','})
      .pipe().subscribe((result: Array<any>) => {

      console.log('Result', result);
      this.csvRecords = result;
      if (result) {
        this.headers = Object.keys(result[0]);
      }
    }, (error: NgxCSVParserError) => {
      console.log('Error', error);
    });
  }

  ngOnInit(): void {
  }
}
