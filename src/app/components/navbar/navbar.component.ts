import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  public atualRoute: string = "";

  ngOnInit(): void {
    setInterval(() => {
      this.atualRouter();
    } , 500);

  }

  atualRouter(){

    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    )
      .subscribe(event => {
          this.atualRoute = event.url.toString();
          this.atualRoute = this.atualRoute.replace("/","");
          if(this.atualRoute == ''){
            this.atualRoute = "inicio";
          }

      });

  }

}
