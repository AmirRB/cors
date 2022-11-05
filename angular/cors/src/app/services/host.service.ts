import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  private _hostIp = "http://localhost:8080/"

  constructor() {
  }


  get hostIp(): string {
    return this._hostIp;
  }

  set hostIp(value: string) {
    this._hostIp = value;
  }
}
