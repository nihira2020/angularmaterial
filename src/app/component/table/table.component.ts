import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  customerlist !: Customer[];
  dataSource:any;
  displayedColumns:string[]=["code","name","email","phone","status","action"];
  @ViewChild(MatPaginator) paginatior !:MatPaginator;
  @ViewChild(MatSort) sort !:MatSort;

  constructor(private service: MasterService) {
    this.service.GetCustomer().subscribe(res => {
      this.customerlist = res;
      this.dataSource=new MatTableDataSource<Customer>(this.customerlist);
      this.dataSource.paginator=this.paginatior;
      this.dataSource.sort=this.sort;
    });
  }

  Filterchange(data:Event){
  const value=(data.target as HTMLInputElement).value;
  this.dataSource.filter=value;
  }

}
