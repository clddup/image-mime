# Installation
Run `npm install image-mime`

# Use

```html
<input type="file" id="file" />

 <script src="image-mime.umd.cjs"></script>
<script>
    document.getElementById("file").addEventListener('change', (event, x) => {
      const fileReader = new FileReader();
      fileReader.onloadend = (f) => {
        const bytes = new Uint8Array(f.target.result);
        console.log("Possible filetypes: ", imageMime(bytes))
      }
      fileReader.readAsArrayBuffer(event.target.files[0])
    })
</script>
```