import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AddItemFormService {
  constructor(private formBuilder: FormBuilder) {}

  protected _form: FormGroup;

  get form(): FormGroup {
    return this._form ? this._form : this.createForm();
  }

  public createForm(): FormGroup {
    this._form = this.formBuilder.group(
      {
        title: ['', [Validators.required]],
        description: ['', [Validators.required]],
        fileName: ['', [Validators.required]],
        tags: ['', [Validators.required]],
        price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        createdAt: [new Date(), [Validators.required]],
        file: ['', [Validators.required]],
      },
      { updateOn: 'change' }
    );

    return this._form;
  }
}
