import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent {
  public maxFileSize = 10000000;
  @Output() fileUploaded = new EventEmitter();
}
