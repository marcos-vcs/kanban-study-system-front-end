import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface KanbanDemand {
  id: string;
  title : string;
  description : string;
}

interface KanbanColumn {
  id: string;
  title: string;
  demands : KanbanDemand[];
}

interface KanbanBoard {
  id: string;
  title: string;
  columns: KanbanColumn[];
}

@Component({
  selector: 'app-boards-page',
  templateUrl: './boards-page.component.html',
  styleUrls: ['./boards-page.component.css']
})
export class BoardsPageComponent implements OnInit {

  constructor() { }

  public board : KanbanBoard = {
    id: '1',
    title: 'Kanban Board',
    columns: [
      {
        id: '1',
        title: 'To Do',
        demands: [
          {
            id: '1',
            title: 'Create a demo for Kanban Board',
            description: 'Create a demo for Kanban Board'
          },
          {
            id: '2',
            title: 'Create a demo for Kanban Board',
            description: 'Create a demo for Kanban Board'
          },
          {
            id: '3',
            title: 'Create a demo for Kanban Board',
            description: 'Create a demo for Kanban Board'
          }
        ],
      },
      {
        id: '2',
        title: 'In Progress',
        demands: [
          {
            id: '4',
            title: 'Create a demo for Kanban Board',
            description: 'Create a demo for Kanban Board'
          },
          {
            id: '5',
            title: 'Create a demo for Kanban Board',
            description: 'Create a demo for Kanban Board'
          },
          {
            id: '6',
            title: 'Create a demo for Kanban Board',
            description: 'Create a demo for Kanban Board'
          }
        ],
      },
      {
        id: '3',
        title: 'Done',
        demands: [
          {
            id: '7',
            title: 'Create a demo for Kanban Board',
            description: 'Create a demo for Kanban Board'
          },
          {
            id: '8',
            title: 'Create a demo for Kanban Board',
            description: 'Create a demo for Kanban Board'
          },
          {
            id: '9',
            title: 'Create a demo for Kanban Board',
            description: 'Create a demo for Kanban Board'
          }
        ],
      }
    ]
  }
  idsFromColumns : string[]  = [];
  editTaskName = '';

  ngOnInit(): void {
    this.idsFromColumns = this.getIds(this.board);
  }



  public dropGrid(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);
  }

  public drop(event: CdkDragDrop<KanbanDemand[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  private getIds(board: KanbanBoard): string[] {
    return board.columns.map(column => column.id);
  }

  updateTask(columnId: string, demandId: string){
    if(this.editTaskName !== ''){
      this.board.columns[parseInt(columnId) - 1].demands.find(demand => demand.id === demandId)!.title = this.editTaskName;
      this.editTaskName = '';
    }
  }
 /*  openModal($event: any){
    let event = $event.path[0].__ngContext__[30].initData;
  }

  formSubmit(f : NgForm){

  } */

}
