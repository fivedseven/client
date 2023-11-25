export interface ImageDataModel {
  id: string;
  title: string;
  description: string;
  fileName: string;
  tags: string[];
  price: number;
  createdAt: string;
  url: string;
}

export interface ImageRequestParams {
  title: string;
  description: string;
  fileName: string;
  tags: string[];
  price: number;
  createdAt: string;
  file: File;
}
