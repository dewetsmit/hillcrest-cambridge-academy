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
    this.albums = [];
    this.album = null;
    this.files = [];
    this.galleryRef.get().subscribe(res => {
      if(res.docs.length > 0){
        res.docs.forEach(album=>{
          this.albums.push(album.data());
        });
        this.album = this.albums[0];
        this.getAlbum(this.album.name);
      }
    });
  }

  getAlbum(albumName){
    this.files = [];
    this.loader.start();
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

  deleteAlbum(albumName){
    this.loader.start();
    this.files = [];
    this.galleryRef.doc(albumName).delete();
    this.ref = this.storage.ref(`${albumName}/`);

    this.ref.listAll().subscribe(res => {
      if(res.items){
        res.items.forEach(element => {
          try{
            element.delete()
          }catch(err){
            console.log(err);
          }
          });
      }
    });
    this.loader.stop();
    this.getAlbumList();
  }

  onSubmit(){
    console.log(this.newAlbumForm.value); 
    this.createAlbum(this.newAlbumForm.value)
  }

  createAlbum(album){
    let that = this;
    if(album){
      this.galleryRef.doc(album.albumName).set({
        name: album.albumName,
        description: album.description
      })
      .then(docRef => {
        console.log("Document written with NAme: ", docRef);
        that.newAlbumForm.reset();
        that.toggleCreate();
        that.getAlbumList();
      })
      .catch(error => {
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

