import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/interfaces/dog';
import { DogApiServiceService } from 'src/app/services/dog-api-service.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dog!: Dog;

  constructor(private dogApiService: DogApiServiceService) { }

  ngOnInit(): void {
    this.getDog();
  }

  getDog(){
    this.dogApiService.getDog().subscribe((dog) => (
      this.dog = dog
    ));
  }
}
