import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  listCategorie: any[] = [];

  constructor(private http: HttpClient) { }

  getCategories() {
    this.http.get('http://localhost:3000/categories').subscribe((categories: any) => {
      for (const categorie of categories) {
        this.listCategorie.push({
          id: categorie.id,
          name: categorie.name
        });
      }
    });
    console.log(this.listCategorie);
  }
}
