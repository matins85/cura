import { CommonModule, DatePipe } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    TableModule,
    DropdownModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  complains: any[] = [];
  loading: boolean = false;
  startDate: Date | undefined;
  endDate: Date | undefined;
  selectedComplain: any;
  selectedStatus: any;
  filterStatus: any[] = [
    { name: 'Open', value: 'open' },
    { name: 'In-Progress', value: 'in-progress' },
    { name: 'Resolved', value: 'resolved' },
  ];
  search: string = '';
  searchData: any[] = [];
  cols: any[] = [];
  exportColumns: any[] = [];

  constructor(public datepipe: DatePipe) {
    this.loading = true;
    setTimeout(() => {
      this.complains = [
        {
          time: '12:43:01 pm',
          date: '10/09/2022',
          phone: '07038485738',
          complain_type: 'Pharmacy',
          rating: '3.2',
          nps: '7',
          status: 'Resolved',
          id: 1,
        },
        {
          time: '12:43:01 pm',
          date: '10/09/2022',
          phone: '07038485738',
          complain_type: 'Laboratory',
          rating: '1.0',
          nps: '3',
          status: 'In-Progress',
          id: 2,
        },
        {
          time: '12:43:01 pm',
          date: '10/09/2022',
          phone: '08038485738',
          complain_type: 'Emergency Unit',
          rating: '3.5',
          nps: '5',
          status: 'Open',
          id: 3,
        },
        {
          time: '12:43:01 pm',
          date: '10/09/2022',
          phone: '01038485738',
          complain_type: 'Cash/Account',
          rating: '2',
          nps: '1.0',
          status: 'In-Progress',
          id: 4,
        },
        {
          time: '12:43:01 pm',
          date: '10/09/2022',
          phone: '02038485738',
          complain_type: 'Pharmacy',
          rating: '3.2',
          nps: '7',
          status: 'Resolved',
          id: 5,
        },
        {
          time: '12:43:01 pm',
          date: '10/09/2022',
          phone: '03038485738',
          complain_type: 'Laboratory',
          rating: '1.0',
          nps: '3',
          status: 'In-Progress',
          id: 6,
        },
        {
          time: '12:43:01 pm',
          date: '10/09/2022',
          phone: '04038485738',
          complain_type: 'Emergency Unit',
          rating: '3.5',
          nps: '5',
          status: 'Open',
          id: 7,
        },
        {
          time: '12:43:01 pm',
          date: '10/09/2022',
          phone: '05038485738',
          complain_type: 'Cash/Account',
          rating: '2',
          nps: '1.0',
          status: 'In-Progress',
          id: 8,
        },
        {
          time: '12:43:01 pm',
          date: '10/09/2022',
          phone: '06038485738',
          complain_type: 'Pharmacy',
          rating: '3.2',
          nps: '7',
          status: 'Resolved',
          id: 9,
        },
        {
          time: '12:43:01 pm',
          date: '10/09/2022',
          phone: '09038485738',
          complain_type: 'Laboratory',
          rating: '1.0',
          nps: '3',
          status: 'In-Progress',
          id: 10,
        },
        {
          time: '12:43:01 pm',
          date: '10/09/2022',
          phone: '010038485738',
          complain_type: 'Emergency Unit',
          rating: '3.5',
          nps: '5',
          status: 'Open',
          id: 11,
        },
        {
          time: '12:43:01 pm',
          date: '10/09/2022',
          phone: '011038485738',
          complain_type: 'Cash/Account',
          rating: '2',
          nps: '1.0',
          status: 'In-Progress',
          id: 12,
        },
      ];
      this.searchData = this.complains;
      this.loading = false;
    }, 2000);

    this.cols = [
      { field: 'time', header: 'Time' },
      { field: 'phone', header: 'Phone Number' },
      { field: 'complain_type', header: 'Complaint Type' },
      { field: 'rating', header: 'Rating' },
      { field: 'nps', header: 'NPS' },
      { field: 'status', header: 'Status' },
    ];

    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  modelChange(search: any) {
    this.search = search;
  }

  clearFilter() {
    this.startDate = undefined;
    this.endDate = undefined;
    this.selectedComplain = undefined;
    this.selectedStatus = undefined;
    this.search = '';
    this.complains = this.searchData;
  }

  filter() {
    let filters: any = [];
    if (this.search) {
      // search
      const data = this.searchData?.filter((data: any) => {
        return (
          data?.phone.includes(this.search) ||
          data?.complain_type
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
          data?.rating.toLowerCase().includes(this.search.toLowerCase()) ||
          data?.nps.toLowerCase().includes(this.search.toLowerCase()) ||
          data?.status.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    }
    // filter status
    if (this.selectedStatus) {
      filters.push(
        this.searchData?.filter((data: any) => {
          return (
            data?.status.toLowerCase() ===
            this.selectedStatus?.name.toLowerCase()
          );
        })
      );
    }

    // filter start date
    if (this.startDate) {
      filters.push(
        this.searchData?.filter((data: any) => {
          return (
            this.datepipe.transform(data.date, 'YYYY-MM-dd') ===
            this.datepipe.transform(this.startDate, 'YYYY-MM-dd')
          );
        })
      );
    }

    // filter end date
    if (this.endDate) {
      filters.push(
        this.searchData?.filter((data: any) => {
          return (
            this.datepipe.transform(data.date, 'YYYY-MM-dd') ===
            this.datepipe.transform(this.endDate, 'YYYY-MM-dd')
          );
        })
      );
    }

    const uniqueData = [
      ...new Map(filters.map((v: any) => [v.id, v])).values(),
    ];

    // remove duplicates
    let complains: any = uniqueData.map((item) => item);
    this.complains = complains[0];
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }
}
