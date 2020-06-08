import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  /* Using ngModel
  onAddServer() {
    this.serverCreated.emit({name: this.newServerName, content: this.newServerContent});
  }
  */

  // using local reference from template
  onAddServer(serverName: HTMLInputElement) {
    console.log(serverName);
    this.serverCreated.emit({name: serverName.value, content: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({name: this.newServerName, content: this.newServerContent});
  }

}
