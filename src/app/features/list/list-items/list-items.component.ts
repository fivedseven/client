import { Component, OnInit } from '@angular/core';
import { ImageDataModel } from '../../../models/models';
import { saveAs } from 'file-saver';
import { AppDataAccessService } from '../../../data-access/app-data-access.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { NgxMasonryOptions } from 'ngx-masonry';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
})
export class ListItemsComponent implements OnInit {
  public imgList: ImageDataModel[];
  public searchInput = new FormControl('');
  public loading = false;

  public masonryOptions: NgxMasonryOptions = {
    gutter: 10,
    resize: true,
    initLayout: true,
    fitWidth: true,
  };

  constructor(private appDataAccessService: AppDataAccessService) {}

  async ngOnInit() {
    await this.setImgList();

    this.searchInput?.valueChanges
      .pipe(untilDestroyed(this), debounceTime(500))
      .subscribe(() => {
        const inputValue = this.searchInput?.value as string;
        if (inputValue?.length > 2 || !inputValue?.length) this.setImgList();
      });
  }

  public async onDeleteImage(image: ImageDataModel) {
    await this.appDataAccessService.deleteImage(image.id);
    await this.setImgList();
  }

  public onDownloadImage(image: ImageDataModel) {
    fetch(image.url)
      .then(res => res.blob())
      .then(blob => {
        saveAs(blob, image.fileName);
      });
  }

  private async setImgList() {
    this.loading = true;
    this.imgList = await this.appDataAccessService
      .getImagesList(this.searchInput.value as string)
      .finally(() => (this.loading = false));
  }
}
