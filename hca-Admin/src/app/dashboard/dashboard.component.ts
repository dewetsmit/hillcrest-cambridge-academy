import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  path = `test/`;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }
  
  ref = this.storage.ref(this.path);
  files = [];
  album: string = '';
  
  ngOnInit(): void {

    // this.ref.listAll().subscribe(res=>console.log(res));
    this.ref.listAll().subscribe(res => {
      res.items.forEach(element => {

        console.log(' element:', element);
        element.getDownloadURL().then(item => {
            this.files.push(item)
        });
      });
    });




  }

}
