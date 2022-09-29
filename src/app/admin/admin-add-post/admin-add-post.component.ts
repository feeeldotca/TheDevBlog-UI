import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { AddPostRequest } from 'src/app/models/add-post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.css']
})
export class AdminAddPostComponent implements OnInit {

  constructor(private postService: PostService) { }
  post: AddPostRequest = {
      title: '',
      content: '',
      summary:'',
      featuredImageUrl:'',
      publishDate: (new Date()).toDateString(),
      updateDate: (new Date()).toDateString(),
      visible: true,
      urlHandle: ''
    };
  ngOnInit(): void {

  }

  onSubmit(): void {
    this.postService.addPost(this.post)
    .subscribe(response =>{
      alert("Add Post Success!");
      console.log(response);
    })
  }

}
