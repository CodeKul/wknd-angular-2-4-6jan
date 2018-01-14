import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-little',
  template: `
  <h4 class="text-muted">
    Pagination is good at the load
  </h4>  
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
  `,
  styles: [
    `
      nav {
       
      }
    `
  ]
})
export class LittleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
