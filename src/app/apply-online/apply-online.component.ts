import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-apply-online',
  templateUrl: './apply-online.component.html',
  styleUrls: ['./apply-online.component.css']
})
export class ApplyOnlineComponent implements OnInit {

  formGroup: FormGroup;
  cd = '';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    // tslint:disable-next-line:max-line-length
    const emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.formGroup = this.formBuilder.group({
      post : [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(emailregex)]],
      full_name: [null, Validators.required],
      mobile: [null, [Validators.required]],
      address: [null, [Validators.required]],
      gender: [null, [Validators.required]],
    });
  }

  onSubmit(formData) {
    console.log(formData);

  }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
        });
        // need to run CD since file load runs outside of zone
        //this.cd.markForCheck();
      };
    }
  }

}
