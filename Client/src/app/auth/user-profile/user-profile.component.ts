import { Component, OnInit } from '@angular/core';
import { throwServerError } from '@apollo/client/core';
import {GraphqlService} from '../../graphql/graphql.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private service: GraphqlService) { }

  name;

  ngOnInit() {
this.profile();
  }
  profile() {
    const names = this.service.getToken();
    this.name =names;
    return this.name;
  }
}

