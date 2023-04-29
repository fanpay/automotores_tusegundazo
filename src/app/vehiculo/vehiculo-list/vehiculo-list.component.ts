import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {
  vehiculo: Array<Vehiculo> = [];

  constructor() { }

  ngOnInit() {

  }

}
