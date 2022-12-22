import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  registerForm: FormGroup;

  constructor(
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.car.id = this.carService.getLastId() + 1;

    this.registerForm = new FormGroup({
      brandName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      modelName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      priceInRub: new FormControl('', [Validators.required, Validators.minLength(10000), Validators.maxLength(9999999)]),

    });


  }
  public validateControl = (controlName: string) => {
    return this.registerForm.get(controlName)?.invalid && this.registerForm.get(controlName)?.touched
  }
  public hasError = (controlName: string, errorName: string) => {
    console.log(this.registerForm);
    return this.registerForm.get(controlName)?.hasError(errorName)
  }
  addCar(): void {
    this.carService.addCar(this.car);
    this.router.navigate(['/cars']);
  }
}