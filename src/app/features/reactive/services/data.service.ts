import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import "firebase/firestore";
import { tap } from "rxjs/operators";

export interface Item {
  text: string;
  color: string;
  size: string;
}
@Injectable()
export class DataService {
  constructor(private db: AngularFirestore) {}
  getData() {
    return;
  }
  getDataRealTime() {
    return this.db.collection("rxjs").valueChanges();
  }
  getDynamicQuery(size, color) {
    return this.db
      .collection<Item>("rxjs", (ref) => {
        let query:
          | firebase.firestore.CollectionReference
          | firebase.firestore.Query = ref;
        if (size) {
          query = query.where("size", "==", size);
        }
        if (color) {
          query = query.where("color", "==", color);
        }
        return query;
      })
      .valueChanges({ idField: "id" })
      .pipe(tap(console.table));
  }
}
