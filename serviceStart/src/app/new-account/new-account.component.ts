import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  //@Output() accountAdded = new EventEmitter<{name:string,status:string}>();
  constructor(private service:LoggingService,private accountService:AccountService){
    this.accountService.statusUpdated.subscribe((status:string) => alert('New Status:'+status));
  };

  ngOnInit() {
  }

  onCreateAccount(accountName:string,accountStatus:string){
    // this.accountAdded.emit({
    //  name: accountName,
    //  status: accountStatus
    // });
    this.accountService.addAccount(accountName,accountStatus);
    //this.service.logStatusChange(status);
  }
}
