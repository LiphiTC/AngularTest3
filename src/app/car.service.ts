import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = [
    { id: 1, brandName: 'Ford', modelName: 'Focus', priceInRub: 600000 },
    { id: 2, brandName: 'Toyota', modelName: 'Corolla', priceInRub: 700000 },
    { id: 3, brandName: 'Mazda', modelName: '3', priceInRub: 800000 }
  ];

  getCars(): Observable<Car[]> {
    return of(this.cars);
  }

  getCar(id: number): Observable<Car> {
    return of(this.cars.find(car => car.id === id));
  }

  addCar(car: Car): void {
    this.cars.push(car);
  }
  getLastId() { return this.cars[this.cars.length - 1].id; }
}