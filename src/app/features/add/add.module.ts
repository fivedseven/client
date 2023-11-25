import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './add-item/add-item.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './add-item/form/form.component';
import { ImageViewerComponent } from './add-item/image-viewer/image-viewer.component';
import { ImageUploaderComponent } from './add-item/image-uploader/image-uploader.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';

const routes: Routes = [{ path: '', component: AddItemComponent }];

@NgModule({
  declarations: [
    AddItemComponent,
    FormComponent,
    ImageViewerComponent,
    ImageUploaderComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    FileUploadModule,
    ImageModule,
    CalendarModule,
    ChipsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AddModule {}
