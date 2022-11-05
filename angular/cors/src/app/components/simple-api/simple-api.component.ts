import {Component, OnInit} from '@angular/core';
import {SimpleApiService} from "../../services/simple-api.service";

@Component({
  selector: 'app-simple-api',
  templateUrl: './simple-api.component.html',
  styleUrls: ['./simple-api.component.css']
})
export class SimpleApiComponent implements OnInit {

  constructor(private service: SimpleApiService) {
  }

  method: any;

  ngOnInit(): void {

  }


  get(): void {
    this.service.get().subscribe(
      response => {
        this.method = response.name;
      }
    )
  }

  post(): void {
    this.service.post().subscribe(
      response => {
        this.method = response.name;
      }
    )
  }


  put(): void {
    this.service.pull().subscribe(
      response => {
        this.method = response.name;
      }
    )
  }


  delete(): void {
    this.service.delete().subscribe(
      response => {
        this.method = response.name;
      }
    )
  }

}
