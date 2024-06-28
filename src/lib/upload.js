import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

const upload = (file) => {
  const date = new Date();
  const storageRef = ref(storage, `images/${date.getTime()}_${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, 
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            reject(new Error('User does not have permission to access the object'));
            break;
          case 'storage/canceled':
            reject(new Error('User canceled the upload'));
            break;
          case 'storage/unknown':
            reject(new Error('Unknown error occurred'));
            break;
          default:
            reject(new Error('Unknown error occurred'));
        }
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          resolve(downloadURL);
        }).catch(reject);
      }
    );
  });
};

export default upload;
