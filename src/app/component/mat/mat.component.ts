import { Component, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from "@angular/forms";
import { OnInit } from '@angular/core';

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-mat',
  templateUrl: './mat.component.html',
  styleUrls: ['./mat.component.scss']
})
export class MatComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  myForm: FormGroup;
  @ViewChild('chipList', { static: true }) chipList: any;
  gradeArray: any = ['8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
  subjectsArray: Subject[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  errors: any = [];

  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      gender: ['Male'],
      dob: ['', [Validators.required]],
      grade: [''],
      subjects: [this.subjectsArray]
    })
  }

  ngOnInit(): void {
    this.reactiveForm()
  }

  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      gender: ['Male'],
      dob: ['', [Validators.required]],
      grade: ['10th Grade'],
      subjects: [this.subjectsArray]
    })
  }

  /* Date */
  date(e: any) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.myForm.get('dob')?.setValue(convertDate, { onlyself: true });

  }

  /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.subjectsArray.length < 5) {
      this.subjectsArray.push({ name: value.trim() })
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /* Remove dynamic languages */
  remove(subject: Subject): void {
    const index = this.subjectsArray.indexOf(subject);
    if (index >= 0) {
      this.subjectsArray.splice(index, 1);
    }
  }

  /* Handle form errors */
  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

  submitForm() {
    this.errors = [];

    Object.keys(this.myForm.controls).forEach(key => {

      const controlErrors = this.myForm.get(key)?.errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          const showMessage = key + " is " + keyError
          this.errors.push(showMessage)
        });
      }
    });

    console.log('form submit ----------------------')
    console.log('errors:' + this.errors)
    console.log(this.myForm.value)

  }

}