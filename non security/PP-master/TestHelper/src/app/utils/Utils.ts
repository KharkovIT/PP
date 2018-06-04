export class Utils {

  public decode(encodeImage: string) {
    return atob(encodeImage);
  }

  dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string

    const byteString = new Utils().decode(dataURI);
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type: 'image/jpg'});
  }
}
