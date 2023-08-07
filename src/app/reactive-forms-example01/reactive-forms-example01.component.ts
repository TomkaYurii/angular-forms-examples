import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive-forms-example01',
  templateUrl: './reactive-forms-example01.component.html',
  styleUrls: ['./reactive-forms-example01.component.css']
})
export class ReactiveFormsExample01Component {

  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
      address:new FormGroup({
        city: new FormControl(),
        street: new FormControl(),
        pincode:new FormControl(),
        country: new FormControl(),
      })
  })

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
