import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface IItemObject {
  id: number;
  name: string;
  board: string;
}
interface KanbanDemand {
  title : string;
  description : string;
}

interface KanbanBoard {
  id: string;
  title: string;
  demands : KanbanDemand[];
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
    { id: 1, name: 'Windstorm', board: 'Iniciadas' },
    { id: 2, name: 'Bombasto' , board: 'Iniciadas' },
    { id: 3, name: 'Magneta'  , board: 'Iniciadas' },
  ];

  itemObjectsRight: IItemObject[] = [
    { id: 4, name: 'Tornado', board: 'Finalizadas' },
    { id: 5, name: 'Mr. O', board: 'Finalizadas' },
    { id: 6, name: 'Tomato', board: 'Finalizadas' },
  ];

  boards: KanbanBoard[] = [
    {
      id: '1',
      title: 'Iniciadas',
      demands: [
        {
          title: 'Titulo da demanda',
          description: 'Descrição da demanda'
        },
        {
          title: 'Titulo da demanda',
          description: 'Descrição da demanda'
        }
      ]
    },
    {
      id: '2',
      title: 'Iniciadas',
      demands: [
        {
          title: 'Titulo da demanda',
          description: 'Descrição da demanda'
        },
        {
          title: 'Titulo da demanda',
          description: 'Descrição da demanda'
        }
      ]
    },
    {
      id: '3',
      title: 'Iniciadas',
      demands: [
        {
          title: 'Titulo da demanda',
          description: 'Descrição da demanda'
        },
        {
          title: 'Titulo da demanda',
          description: 'Descrição da demanda'
        }
      ]
    }
  ];

  toModalObject: IItemObject = {
    id: 0,
    name: '',
    board: ''
  };

  openModal($event: any){
    let event = $event.path[0].__ngContext__[30].initData;
    this.toModalObject = event;
  }
  id: string = '';
  name: string = '';

  formSubmit(f : NgForm){
    let newItem = {
      id: f.value.id,
      name: f.value.name,
      board: ''
    }

    if(this.toModalObject.board){

    }


  }

}
