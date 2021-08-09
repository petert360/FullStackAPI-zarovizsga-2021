import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.scss']
})
export class CarEditComponent implements OnInit {

  car: Car = new Car();

  constructor(
    private carService: CarService,
    private router: Router,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(
      params =>
        this.carService.get(params.id).subscribe(
          car => {
            this.car = car || new Car();
          }
        )
    );
  }

  onSave(): void {
    this.carService.update(this.car).subscribe(
      () => this.router.navigate(['/', 'cars']),
      err => console.error(err)
    );
  }

}
