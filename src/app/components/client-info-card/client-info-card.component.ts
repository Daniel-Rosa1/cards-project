import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-info-card',
  templateUrl: './client-info-card.component.html',
  styleUrl: './client-info-card.component.scss'
})
export class ClientInfoCardComponent implements OnInit {
  herdarColor: string = 'red';
large: any;

  ngOnInit(){
    setTimeout(() =>{ this.herdarColor = 'blue'}, 3000);
  }

}
