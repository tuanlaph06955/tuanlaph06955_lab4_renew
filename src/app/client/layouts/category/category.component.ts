import { Component, OnInit } from '@angular/core';
import {Category} from "../models/category";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  category:Category = {
    cate_1: "Jacket",
    cate_2: "Shoes",
    cate_3: "Hat",
  }

}
