import { Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { RemoteApiService } from './remote-api.service';
import { ImageRequestParams } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class AppDataAccessService {
  constructor(private remoteApiService: RemoteApiService) {}

  public async getImagesList(searchText = '') {
    return await firstValueFrom(
      this.remoteApiService
        .getImages()
        .pipe(
          map(data =>
            data.filter(image =>
              image.tags.some(tag =>
                tag.toLowerCase().includes(searchText.toLowerCase())
              )
            )
          )
        )
    );
  }

  public async addImage(params: ImageRequestParams) {
    await firstValueFrom(this.remoteApiService.uploadImageToServer(params));
  }

  public async deleteImage(id: string) {
    await firstValueFrom(this.remoteApiService.deleteImageById(id));
  }
}
