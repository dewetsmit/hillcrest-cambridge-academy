import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  

  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private loader: NgxUiLoaderService) { }
  createNew = false;
  files = [];
  album;
  albums = [];
  ref;
  galleryRef = this.db.collection('Gallery');

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

  createAlbum(name){
// Add a new document with a generated id.
this.galleryRef.add({
  name: name
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
  };

  toggleCreate(){
    this.createNew = !this.createNew;
  }
}

