import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  constructor(activatedRoute:ActivatedRoute,private router:Router) {
    activatedRoute.params.subscribe((params) => {
      console.log('SearchTerm parameter:', params.searchTerm);
      if(params.searchTerm) this.searchTerm = params.searchTerm;
    });
   }

  ngOnInit(): void {
  }

  search(searchTerm:string):void{
    console.log('Fonction de recherche appelée avec searchTerm:', searchTerm);
    if (searchTerm){
      this.router.navigateByUrl('/search/'+ searchTerm);
    } else {
      this.router.navigateByUrl('/')
    }
  }
}