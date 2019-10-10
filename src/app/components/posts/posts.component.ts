import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  posts:Post[] = [];
  constructor(private postService:PostService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.postService.getPosts(params['textSearch']).subscribe((data:Post[])=>{
        this.posts=data;
      });
    });
  }

  showPost(id:number){
    this.router.navigate(['/post', id]);
  }

}
