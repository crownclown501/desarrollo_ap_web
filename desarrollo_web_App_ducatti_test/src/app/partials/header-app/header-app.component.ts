import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-app',
  standalone: false,
  templateUrl: './header-app.component.html',
  styleUrl: './header-app.component.scss'
})
export class HeaderAppComponent implements OnInit {
  @Output() drawer = new EventEmitter();
  constructor(){}
  ngOnInit():void {}
  drawerOpen(){
    this.drawer.emit();
  }
}
