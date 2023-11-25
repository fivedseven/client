import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent implements OnInit {
  public fileDataURL: string;
  @Input() file: File;

  ngOnInit() {
    // Use FileReader to read the file as a data URL
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.fileDataURL = e.target.result;
    };
    reader.readAsDataURL(this.file);
  }
}
