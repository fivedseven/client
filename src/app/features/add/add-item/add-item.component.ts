import { Component, OnInit } from '@angular/core';
import { AddItemFormService } from '../../../data-access/add-item-form.service';
import { Router } from '@angular/router';
import { AppDataAccessService } from '../../../data-access/app-data-access.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  public disabled = true;

  constructor(
    public addItemFormService: AddItemFormService,
    private appDataAccessService: AppDataAccessService,
    private router: Router
  ) {}

  ngOnInit() {
    this.addItemFormService.createForm();
    this.addItemFormService.form.valueChanges.subscribe(() => {
      this.disabled = this.addItemFormService.form.invalid;
    });
  }

  public handleUploadedFile(event: any) {
    this.addItemFormService.form.get('file')?.setValue(event.files[0]);
    this.addItemFormService.form.get('fileName')?.setValue(event.files[0].name);
  }

  public onRemoveFile() {
    this.addItemFormService.form.get('file')?.reset();
    this.addItemFormService.form.get('fileName')?.reset();
  }

  public async save() {
    if (this.addItemFormService.form.valid) {
      await this.appDataAccessService.addImage(
        this.addItemFormService.form.value
      );
      this.addItemFormService.form.reset();
      await this.router.navigate(['../list']);
    }
  }
}
