import { Component, OnInit } from '@angular/core';
import {GraphqlService} from '../../graphql/graphql.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private grapqlservice: GraphqlService) { }

  ngOnInit(): void {
  }
Logout(){
return  this.grapqlservice.logout();
}
}
