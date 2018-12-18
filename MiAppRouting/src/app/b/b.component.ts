import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../models/Pedidos';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  pedidos: Pedidos[] = null;

  constructor() { }

  ngOnInit() {
    this.pedidos = [
      new Pedidos(1, 'cosa wena', 23),
      new Pedidos(2, 'andele guate', 33),
      new Pedidos(3, 'vamoh-que noh vamoh', 43),
      new Pedidos(4, 'arriba la gasolina', 53),
    ];
  }

}
