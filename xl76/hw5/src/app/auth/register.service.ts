import {Injectable} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Injectable()

// for register
export class RegisterService {

  accNameControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[A-Za-z][A-Za-z0-9]*$')
  ]);

  emlControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$')
  ]);

  phoneControl = new FormControl('', [
    Validators.required,
    Validators.pattern('\\d\\d\\d-\\d\\d\\d-\\d\\d\\d\\d')
  ]);

  bdayControl = new FormControl('', [
    Validators.required
  ]);

  zipControl = new FormControl('', [
    Validators.required,
    Validators.pattern('\\d\\d\\d\\d\\d')
  ]);

  pswdControl = new FormControl('', [
    Validators.required,
    Validators.pattern('\\S+-\\S+-\\S+')
  ]);

  pswdCControl = new FormControl('', [
    Validators.required
  ]);

  constructor() {
  }

  getAccNameControl(): FormControl {
    return this.accNameControl;
  }

  getEmlControl(): FormControl {
    return this.emlControl;
  }

  getPhoneControl(): FormControl {
    return this.phoneControl;
  }

  getBdayControl(): FormControl {
    return this.bdayControl;
  }

  getZipControl(): FormControl {
    return this.zipControl;
  }

  getPswdControl(): FormControl {
    return this.pswdControl;
  }

  getPswdCControl(): FormControl {
    return this.pswdCControl;
  }

  checkBday(fControl) {
    const today = new Date();
    const bday = new Date(fControl._value.bdayControl);
    let age = today.getFullYear() - bday.getFullYear();
    let month = today.getMonth() - bday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < bday.getDate())) {
      age--;
    }
    return (age >= 18);
  }
}
