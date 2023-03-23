import { Component, OnInit } from '@angular/core';
import {IUserDetails} from "../../interfsces/IUserDetails";
import {UserDetailsService} from "../../services/user-details.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  userDetails: IUserDetails

  constructor(private userDetailsService: UserDetailsService,
              private activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    // this.userDetailsService.getUser().subscribe(value => )
    this.activatedRout.params.subscribe(({id})=>{
      this.userDetailsService.getUser(id).subscribe(value => this.userDetails = value)
    })
  }

}
