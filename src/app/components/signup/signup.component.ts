import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/validators/mustMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  test : Date = new Date();
    focus : any;
    focus1 : any;
    focus2 : any;
    signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router :Router ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({

      nom: [ '' , [ Validators.minLength(3), Validators.required]],
      email: [ '' ,   Validators.required ],
      pwd: [ '' , Validators.minLength(8) ],
      confirmpwd: ['']

    },
      {

        validator: MustMatch ('pwd', 'confirmpwd')
    }
    );

  }




signup(){
  alert("Welcome" + " "+ this.signupForm.value.nom)
  console.log(this.signupForm.value);
  this.router.navigate([""])
  
}

}
