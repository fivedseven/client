import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ImageDataModel, ImageRequestParams } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class RemoteApiService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000';

  public deleteImageById(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/api/images/${id}`);
  }

  public getImages(): Observable<ImageDataModel[]> {
    return this.http.get<ImageDataModel[]>(`${this.baseUrl}/api/images`);
  }

  public uploadImageToServer(params: ImageRequestParams): Observable<any> {
    const formData = new FormData();

    formData.append('image', params.file);
    formData.append('title', params.title);
    formData.append('description', params.description);
    formData.append('fileName', params.fileName);
    formData.append('tags', params.tags.join(','));
    formData.append('price', params.price.toString());
    formData.append('createdAt', params.createdAt);

    return this.http.post(`${this.baseUrl}/api/image`, formData);
  }
}
