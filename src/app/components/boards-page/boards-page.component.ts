import { Component, OnInit } from '@angular/core';

interface IItemObject {
  id: number;
  name: string;
}

@Component({
  selector: 'app-boards-page',
  templateUrl: './boards-page.component.html',
  styleUrls: ['./boards-page.component.css']
})
export class BoardsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  itemObjectsLeft: IItemObject[] = [
    { id: 1, name: 'Windstorm' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Magneta' }
  ];

  itemObjectsRight: IItemObject[] = [
    { id: 4, name: 'Tornado' },
    { id: 5, name: 'Mr. O' },
    { id: 6, name: 'Tomato' }
  ];

  openModal($event: any){
    let event : string = $event.target;
    console.log(event);

  }

}
