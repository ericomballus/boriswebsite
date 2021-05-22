import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root',
})
export class ImageLoaderService {
  coverAll: Boolean = true;
  constructor() {}

  setData() {
    this.coverAll = false;
  }

  getData() {
    if (isNullOrUndefined(this.coverAll)) {
      return 0;
    } else {
      return this.coverAll;
    }
  }
}
