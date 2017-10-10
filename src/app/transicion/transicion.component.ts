import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-transicion',
  templateUrl: './transicion.component.html',
  styleUrls: ['./transicion.component.css']
})
export class TransicionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
    this.router.navigate(['resultado']);
 
  }

}
