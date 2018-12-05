import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersCollection: AngularFirestoreCollection<any>;
  userDocument:   AngularFirestoreDocument<any>;

  users: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection('users');
   }

  ngOnInit() {
    this.users = this.getData();
  }

  getData(): Observable<any[]> {
    // ['added', 'modified', 'removed']
    return this.usersCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }

}
