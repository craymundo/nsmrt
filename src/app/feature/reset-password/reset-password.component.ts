import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  enableStepTwo = false;

  constructor() { }

  ngOnInit(): void {
  }

  validateQuestion(): void {
    this.enableStepTwo = true;
  }
}
