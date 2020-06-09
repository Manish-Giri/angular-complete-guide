import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

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

  // for viewchild reference
  @ViewChild('servercontentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  /* Using ngModel
  onAddServer() {
    this.serverCreated.emit({name: this.newServerName, content: this.newServerContent});
  }
  */

  /*
  // using local reference from template
  onAddServer(serverName: HTMLInputElement) {
    console.log(serverName);
    this.serverCreated.emit({name: serverName.value, content: this.newServerContent});
  }
  */

  // Using ViewChild Reference for servercontent field
  onAddServer(serverName: HTMLInputElement) {
    //console.log(this.serverContentInput);
    this.serverCreated.emit({name: serverName.value, content: this.serverContentInput.nativeElement.value});
  }

  // Using ViewChild reference
  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({name: serverName.value, content: this.serverContentInput.nativeElement.value});
  }

}
