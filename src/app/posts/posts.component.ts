import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts: Post[] = [];

  // post: Post|undefined;

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
      response => {
        this.posts = response;
        // this.post = response[0];
      }
    )
  }

}
