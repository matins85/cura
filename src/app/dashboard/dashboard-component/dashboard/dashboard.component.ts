import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

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

  constructor() {
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
        phone: '07038485738',
        complain_type: 'Emergency Unit',
        rating: '3.5',
        nps: '5',
        status: 'Open',
        id: 3,
      },
      {
        time: '12:43:01 pm',
        date: '10/09/2022',
        phone: '07038485738',
        complain_type: 'Cash/Account',
        rating: '2',
        nps: '1.0',
        status: 'In-Progress',
        id: 4,
      },
      {
        time: '12:43:01 pm',
        date: '10/09/2022',
        phone: '07038485738',
        complain_type: 'Pharmacy',
        rating: '3.2',
        nps: '7',
        status: 'Resolved',
        id: 5,
      },
      {
        time: '12:43:01 pm',
        date: '10/09/2022',
        phone: '07038485738',
        complain_type: 'Laboratory',
        rating: '1.0',
        nps: '3',
        status: 'In-Progress',
        id: 6,
      },
      {
        time: '12:43:01 pm',
        date: '10/09/2022',
        phone: '07038485738',
        complain_type: 'Emergency Unit',
        rating: '3.5',
        nps: '5',
        status: 'Open',
        id: 7,
      },
      {
        time: '12:43:01 pm',
        date: '10/09/2022',
        phone: '07038485738',
        complain_type: 'Cash/Account',
        rating: '2',
        nps: '1.0',
        status: 'In-Progress',
        id: 8,
      },
      {
        time: '12:43:01 pm',
        date: '10/09/2022',
        phone: '07038485738',
        complain_type: 'Pharmacy',
        rating: '3.2',
        nps: '7',
        status: 'Resolved',
        id: 9,
      },
      {
        time: '12:43:01 pm',
        date: '10/09/2022',
        phone: '07038485738',
        complain_type: 'Laboratory',
        rating: '1.0',
        nps: '3',
        status: 'In-Progress',
        id: 10,
      },
      {
        time: '12:43:01 pm',
        date: '10/09/2022',
        phone: '07038485738',
        complain_type: 'Emergency Unit',
        rating: '3.5',
        nps: '5',
        status: 'Open',
        id: 11,
      },
      {
        time: '12:43:01 pm',
        date: '10/09/2022',
        phone: '07038485738',
        complain_type: 'Cash/Account',
        rating: '2',
        nps: '1.0',
        status: 'In-Progress',
        id: 12,
      },
    ];
  }
}
