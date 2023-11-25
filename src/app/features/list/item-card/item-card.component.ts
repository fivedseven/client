import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageDataModel } from '../../../models/models';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  @Input() image: ImageDataModel;
  @Output() deleteImage = new EventEmitter<ImageDataModel>();
  @Output() downloadImage = new EventEmitter<ImageDataModel>();
}
