import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from "../shared/services/categorie/categorie.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  categories = this.categorie.listCategorie;
  playerName = '';
  search = '';

  constructor(
    private categorie: CategorieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.playerName = params.get('playerName') || '';
    });
    this.categorie.getCategories();
    console.log(this.categories);
  }

  navigateToQuiz(categoryId: number) {
    this.router.navigate(['/quiz', categoryId, this.playerName]);
  }

  filterCategories() {
    return this.categories.filter((categorie) => categorie.name.toLowerCase().includes(this.search.toLowerCase()));
  }

  resetSearch() {
    this.search = '';
  }
}
