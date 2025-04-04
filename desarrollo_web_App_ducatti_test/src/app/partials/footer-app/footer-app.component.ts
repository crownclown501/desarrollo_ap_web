import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-app',
  standalone: false,
  templateUrl: './footer-app.component.html',
  styleUrl: './footer-app.component.scss'
})
export class FooterAppComponent implements OnInit {
  constructor(
    private router: Router
  ){}

  ngOnInit(): void {

  }

  public terminosCondiciones(){

  }

  public avisoPrivacidad(){
    this.router.navigate(["politica-privacidad"]);
  }
}
