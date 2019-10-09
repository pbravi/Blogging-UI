import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts:Post[]=[];
  constructor(private httpClient:HttpClient) { 
  }

  getPosts(textSearch:string){
    if(textSearch)
      return this.httpClient.get(`${environment.apiUrl}/find/${textSearch}`);
    else
      return this.httpClient.get(environment.apiUrl);
  }

  getPost(id:number){
    return this.httpClient.get(`${environment.apiUrl}/${id}`);
  }
}

export interface Post{
  id: number,
  creationDate: string,
  autor: string,
  title: string,
  body: string
}
