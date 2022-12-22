import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  public car: Car = new Car();
  constructor(
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.car.id = this.carService.getLastId() + 1;
  }

  addCar(): void {
    this.carService.addCar(this.car);
    this.router.navigate(['/cars']);
  }
}