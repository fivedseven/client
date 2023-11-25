import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './list-items/list-items.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ItemCardComponent } from './item-card/item-card.component';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMasonryModule } from 'ngx-masonry';

const routes: Routes = [{ path: '', component: ListItemsComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ButtonModule,
    ImageModule,
    CardModule,
    TagModule,
    InputTextModule,
    ReactiveFormsModule,
    NgxMasonryModule,
  ],
  declarations: [ListItemsComponent, ItemCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListModule {}
