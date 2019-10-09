import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute} from '@angular/router';
import{ PostService, Post} from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:any={};

  constructor(private activatedRoute:ActivatedRoute, private postService:PostService) { 
    this.activatedRoute.params.subscribe(params=>{
      this.postService.getPost(params['id']).subscribe((data:Post)=>{
        this.post=data;
      });
    });
  }

  ngOnInit() {
  }

}
