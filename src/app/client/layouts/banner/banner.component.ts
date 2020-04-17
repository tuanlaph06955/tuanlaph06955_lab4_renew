import { Component, OnInit } from '@angular/core';
import {Banner} from "../models/banner";
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  banner:Banner = {
    image_1:"https://onelikestudio.com/assets/2017/02/du-an-nhiep-anh-900x350.jpg",
    image_2: "http://placehold.it/900x350",
  }

}
