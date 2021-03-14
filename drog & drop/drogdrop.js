const dropSpace = document.querySelector('.drog-space');
let file;
let canDrop = true;
dropSpace.addEventListener('dragover' ,(e) => {
  e.preventDefault();
  dropSpace.classList.add('active');

});
dropSpace.addEventListener('dragleave', (e) => {
  dropSpace.classList.remove('active');
  canDrop = true;
})
dropSpace.addEventListener('drop', (e) => {
  e.preventDefault();
  file = e.dataTransfer.files[0];
  let fileType = file.type;
  let fileName = file.name;
  canDrop = false;
 
  if ( fileType === 'image/png' || fileType === 'image/jpg'  || fileType === 'image/jpeg' ){
    console.log(fileName);
  }else{
    alert(' You can drop only file with type: png,jpg,jpeg!');
  }
  dropSpace.classList.remove('active');
  if(canDrop === false ){
   dropSpace.removeEventListener();
 }
})
