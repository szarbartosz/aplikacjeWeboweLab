import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverStatus = 'no server was created';
  serverName = 'testserver';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }


  ngOnInit() {
  }

  addServer() {
    this.serverStatus = 'server added';
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }


}
