import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [ 'entidad', 'unidad', 'estado', 'selection'];

  displayedColumns2: string[] = [ 'operador', 'numero', 'selection'];

  displayedColumns3: string[] = [ 'email', 'selection'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSourceTel = new MatTableDataSource<TelefonoElement>(ELEMENT_DATA_2);
  dataSourceEmail = new MatTableDataSource<EmailElement>(ELEMENT_DATA_3);

  @ViewChild(MatPaginator) paginator: MatPaginator;



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }


  ngOnInit():void{
   
  }

}


export interface PeriodicElement {
  position: number;
  entidad: string;
  unidad: string;
  estado: string;
}

export interface TelefonoElement {
  position: number;
  operador: string;
  numero: string;
}

export interface EmailElement {
  position: number;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,  entidad: 'Municipalidad de Huaura', unidad: 'Contabilidad', estado: 'Activo'},
  {position: 2,  entidad: 'Municipalidad de Santa Eulalia', unidad: 'Contabilidad', estado: 'Activo'},

];

const ELEMENT_DATA_2: TelefonoElement[] = [
  {position: 1,  operador: 'Movistar', numero: '999 888 777'},
  {position: 2,  operador: 'Claro', numero: '999 888 777'},

];


const ELEMENT_DATA_3: EmailElement[] = [
  {position: 1,  email: 'test@yopmail.com'},
  {position: 2,  email: 'test@yopmail.com'},

];

