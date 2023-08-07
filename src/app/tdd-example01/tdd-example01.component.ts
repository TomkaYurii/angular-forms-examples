import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tdd-example01',
  templateUrl: './tdd-example01.component.html',
  styleUrls: ['./tdd-example01.component.css']
})
export class TddExample01Component {
  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
  onSubmit(contactForm: NgForm) {
    console.log(contactForm.value);
  }
}

export class country {
  id: string;
  name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

}
