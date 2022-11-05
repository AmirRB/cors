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

  ngOnInit(): void {
    this.service.get().subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log("error")
        console.log(error)
      }
    )
  }

}
