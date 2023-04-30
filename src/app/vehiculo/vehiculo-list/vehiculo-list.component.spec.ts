/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { VehiculoListComponent } from './vehiculo-list.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../../app.component';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';


describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ AppComponent, VehiculoListComponent ],
      providers: [ VehiculoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const vehiculo = new Vehiculo(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.vehicle.manufacturer(),
        faker.vehicle.type(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.vehicle.color(),
        faker.image.imageUrl()
      );
      component.vehiculos.push(vehiculo);
    }


    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create component itself', () => {
    expect(component).toBeTruthy();
  });

  it('should have at least a table with 3 rows and a header', async () => {
    //Check if exists a table at least
    expect(debug.queryAll(By.css('div.table'))).toBeTruthy()
  });

  it('should have at least a table with a header and 4 columns', async () => {
    expect(debug.queryAll(By.css('div > table > thead'))).toHaveSize(1)

    expect(debug.queryAll(By.css('div > table > thead > tr'))).toHaveSize(1)

    expect(debug.queryAll(By.css('div > table > thead > tr > th'))).toHaveSize(4)
  });

  it('should have at least a table with 3 rows', async () => {
    expect(debug.queryAll(By.css('div > table > tbody > tr'))).toHaveSize(3)
  });

});
