import { Component, OnInit } from '@angular/core';
import {IAccordion} from "../../../interfaces/acordion";
import {data} from "../../../constants/data";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})


export class AccordionComponent implements OnInit {
  accordionArr: IAccordion[] = data;
  visibleAccordionId: number | null = null;

  constructor() { }

  ngOnInit(): void {

  }

  handleClick(id: number): void {
    this.visibleAccordionId = (this.visibleAccordionId === id) ? null : id;
  }

  isAccordionVisible(id: number): boolean {
    return this.visibleAccordionId === id;
  }
}
