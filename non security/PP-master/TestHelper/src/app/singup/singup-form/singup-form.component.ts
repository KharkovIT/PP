import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/User';
import {Router} from '@angular/router';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.css']
})
export class SingupFormComponent implements OnInit {
  user: User = new User();

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  isPassport: boolean;
  maskPassport = [/[А-Я]/, /[А-Я]/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  maskStud = [/[А-Я]/, /[А-Я]/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
  errorMessage: string;

  constructor(private _formBuilder: FormBuilder, public accountService: AccountService, public router: Router) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      document: ['', Validators.required]

    });
    this.secondFormGroup = this._formBuilder.group({
      lastName: ['', Validators.minLength(2)],
      firstName: ['', Validators.minLength(2)]
    });
    this.thirdFormGroup = this._formBuilder.group({
      email: [Validators.required, Validators.email],
      password: ['', Validators.minLength(8)]
    });

    this.fourthFormGroup = this._formBuilder.group({
      activity: ['', Validators.required]
    });
  }


  singUp() {
    this.accountService.createAccount(this.user).subscribe(data => {
       return this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        this.errorMessage = 'username already exist';
      }
    );
  }

}
