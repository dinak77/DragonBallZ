import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public Home: string = "Home";
  public Characters: string = "Personnages";
  public Families: string = "Familles";
  public Places: string = "Lieux";
  public Movies: string = "Films";
  public Gallery: string = "Galerie";
  public Contact: string = "Contact";

  constructor() { }

  ngOnInit() {
  }

}
