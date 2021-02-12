import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  

  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private loader: NgxUiLoaderService, private fb: FormBuilder) { }
  createNew = false;
  files = [];
  album;
  albums = [];
  ref;
  galleryRef = this.db.collection('Gallery');


  newAlbumForm = this.fb.group({
    albumName: ['', Validators.required],
    description: ['', Validators.required]
  })

  newAlbumName='';
  ngOnInit(): void {
    this.getAlbumList();
  }

  onChange(){
    this.getAlbum(this.album.name)
  }

  getAlbumList(){
    this.galleryRef.get().subscribe(res => {
      res.docs.forEach(album=>{
        this.albums.push(album.data());
      });
      this.album = this.albums[0];

      console.log(' album:', this.album);
      this.getAlbum(this.album.name);
    });
  }

  getAlbum(albumName){
    this.loader.start();
    this.files = [];
    this.ref = this.storage.ref(`${albumName}/`);
    this.ref.listAll().subscribe(res => {
      res.items.forEach(element => {
        element.getDownloadURL().then(item => {
            this.files.push(item)
        });
      });
    this.loader.stop();
    });
  }

  onSubmit(){
    console.log(this.newAlbumForm.value); 
    this.createAlbum(this.newAlbumForm.value)
  }

  createAlbum(album){
    let that = this;
    if(album){
      this.galleryRef.add({
        name: album.albumName,
        description: album.description
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        that.newAlbumForm.reset();
        that.toggleCreate();
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    }else{

      console.log(' :', album);
    }

  };

  toggleCreate(){
    this.createNew = !this.createNew;
  }
}

