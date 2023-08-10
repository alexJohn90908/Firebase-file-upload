import { Component } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/compat/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebasefileupload';
  constructor (private fireStorage:AngularFireStorage){}
  async onFileChange(event:any){
   const file = event.target.files[0];
   if(file){
    const path = `yt/${file.name}`;
    const uploadImage = await this.fireStorage.upload(path,file)
    const url = await uploadImage.ref.getDownloadURL()
    console.log(url);
   }
  }
}
