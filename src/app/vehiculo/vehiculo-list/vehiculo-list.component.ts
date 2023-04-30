import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];
  imagenUrl: string = 'assets/img/banner.png';

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.getVehiculos();

  }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
    });
  }

  cantidadVehiculosPorMarca(vehiculos: Vehiculo[]): { marca: string, cantidad: number }[] {
    const conteos: {[marca: string]: number} = {};
    for (const vehiculo of vehiculos) {
      if (conteos[vehiculo.marca]) {
        conteos[vehiculo.marca]++;
      } else {
        conteos[vehiculo.marca] = 1;
      }
    }

    //creación de objeto tipo key:value para iterar fácilmente en el HTML
    const resultado = [];
    for (const marca in conteos) {
      if (conteos.hasOwnProperty(marca)) {
        resultado.push({ marca: marca, cantidad: conteos[marca] });
      }
    }
    return resultado;
  }


}
