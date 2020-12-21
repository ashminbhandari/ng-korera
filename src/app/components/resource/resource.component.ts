import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {NgxCsvParser, NgxCSVParserError} from 'ngx-csv-parser';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private ngxCsvParser: NgxCsvParser) {
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  // Your applications input change listener for the CSV File
  fileChangeListener($event: any): void {

    // Select the files from the event
    const files = $event.srcElement.files;

    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], {header: true, delimiter: ','})
      .pipe().subscribe((result: Array<any>) => {

      console.log('Result', result);
      this.dataSource.data = result;
      if (result) {
        this.displayedColumns = Object.keys(result[0]);
      }
    }, (error: NgxCSVParserError) => {
      console.log('Error', error);
    });
  }

  ngOnInit(): void {
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

