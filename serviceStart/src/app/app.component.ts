import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [LoggingService,AccountService]
})
export class AppComponent implements OnInit{
  accounts:{name:string,status:string}[] = [];

  constructor(private accountService:AccountService){}

  ngOnInit(){
    this.accounts=this.accountService.accounts;
  }
}
