import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['selection', 'usuario', 'tipoDocumento', 'numeroDocumento', 'nombres', 'vigencia', 'estado'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }


  selection: SelectionModel<Element> = new SelectionModel<Element>(false, []);
  ngOnInit():void{
   
  }

  selectRow($event: any, row:any){
    console.info("clicked", $event);
    $event.preventDefault();
        if (row.selectable && !row.selected) {
           /*  this.dataSource.forEach((row) => row.selected = false);
            row.selected = true;
            this.selection.select(row);
            if (location.href.indexOf(queryParamName) >= 0) {
                location.href = location.href.replace(queryParamName, "");
            } */
        }
  }
}


export interface PeriodicElement {
  position: number;
  usuario: string;
  tipoDocumento: string;
  numeroDocumento: string;
  nombres: string;
  vigencia: string;
  estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,  usuario: 'DNI20557652',  tipoDocumento: 'DNI',  numeroDocumento: '20557652', nombres: 'Juan Sebastian Rosas Lopez', vigencia: '01/01/2021 - 01/01/2022', estado: 'Activo'},
  {position: 2,  usuario: 'DNI20557652',  tipoDocumento: 'DNI',  numeroDocumento: '20557652', nombres: 'Juan Sebastian Rosas Lopez', vigencia: '01/01/2021 - 01/01/2022', estado: 'Activo'},
  {position: 3,  usuario: 'DNI20557652',  tipoDocumento: 'DNI',  numeroDocumento: '20557652', nombres: 'Juan Sebastian Rosas Lopez', vigencia: '01/01/2021 - 01/01/2022', estado: 'Activo'},
  {position: 4,  usuario: 'DNI20557652',  tipoDocumento:  'DNI',   numeroDocumento: '20557652', nombres: 'Juan Sebastian Rosas Lopez', vigencia: '01/01/2021 - 01/01/2022', estado: 'Activo'},
  {position: 5,  usuario: 'DNI20557652',  tipoDocumento:  'DNI',   numeroDocumento: '20557652', nombres: 'Juan Sebastian Rosas Lopez', vigencia: '01/01/2021 - 01/01/2022', estado: 'Activo'},
  {position: 6,  usuario: 'DNI20557652',  tipoDocumento:  'DNI',    numeroDocumento: '20557652', nombres: 'Juan Sebastian Rosas Lopez', vigencia: '01/01/2021 - 01/01/2022', estado: 'Activo'},
  {position: 7,  usuario: 'DNI20557652',  tipoDocumento:  'DNI',    numeroDocumento: '20557652', nombres: 'Juan Sebastian Rosas Lopez', vigencia: '01/01/2021 - 01/01/2022', estado: 'Activo'},
  {position: 8,  usuario: 'DNI20557652',  tipoDocumento:  'DNI',    numeroDocumento: '20557652', nombres: 'Juan Sebastian Rosas Lopez', vigencia: '01/01/2021 - 01/01/2022', estado: 'Activo'},
  {position: 9,  usuario: 'DNI20557652',  tipoDocumento:  'DNI',    numeroDocumento: '20557652', nombres: 'Juan Sebastian Rosas Lopez', vigencia: '01/01/2021 - 01/01/2022', estado: 'Activo'},
  {position: 10,  usuario: 'DNI20557652',  tipoDocumento:  'DNI',    numeroDocumento: '20557652', nombres: 'Juan Sebastian Rosas Lopez', vigencia: '01/01/2021 - 01/01/2022', estado: 'Activo'},

];