import imageMime from "./lib/main";

document.getElementById('file').onchange = function(){
  const fileReader = new FileReader();
  fileReader.readAsArrayBuffer(this.files[0])
  fileReader.onloadend = function() {
    const bytes = new Uint8Array(this.result);
    console.log("Possible filetypes: ",  imageMime(bytes))
  }   
  
}