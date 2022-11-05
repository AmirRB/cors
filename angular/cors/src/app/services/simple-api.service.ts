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

  post(): Observable<any> {
    return this.http.post(this.host.hostIp, null);
  }

  pull(): Observable<any> {
    return this.http.put(this.host.hostIp, null);
  }

  delete(): Observable<any> {
    return this.http.delete(this.host.hostIp);
  }
}
