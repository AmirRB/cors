import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HostService} from "./host.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SimpleApiService {

  constructor(private http: HttpClient, private host: HostService) {
  }


  get(): Observable<any> {
    return this.http.get(this.host.hostIp);
  }
}
