# Installation
Run `npm install image-mime`

# Use

```html
<input type="file" id="file" />

 <script src="node_modules/magic-bytes.js/dist/browser.js" type="application/javascript"></script>
<script>
    document.getElementById("file").addEventListener('change', (event, x) => {
      const fileReader = new FileReader();
      fileReader.onloadend = (f) => {
        const bytes = new Uint8Array(f.target.result);
        console.log("Possible filetypes: " + filetypeinfo(bytes))
      }
      fileReader.readAsArrayBuffer(event.target.files[0])
    })
</script>
```