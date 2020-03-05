import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-apply-online',
  templateUrl: './apply-online.component.html',
  styleUrls: ['./apply-online.component.css']
})
export class ApplyOnlineComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    const emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.formGroup = this.formBuilder.group({

      'post' : [null, [Validators.required]],
      'name': [null, [Validators.required, Validators.pattern(emailregex)]],
      'email': [null, Validators.required],
      'mobile': [null, [Validators.required]],
      'address': [null, [Validators.required]]
    });
  }

}
