const dropSpace = document.querySelector('.drog-space');
let file;
dropSpace.addEventListener('dragover' ,(e) => {
  e.preventDefault();
  dropSpace.classList.add('active');

});
dropSpace.addEventListener('dragleave', (e) => {
  dropSpace.classList.remove('active');
})
dropSpace.addEventListener('drop', (e) => {
  e.preventDefault();
  file = e.dataTransfer.files[0];
  let fileType = file.type;
  let fileName = file.name;
  if ( fileType === 'image/png' || fileType === 'image/jpg'  || fileType === 'image/jpeg' ){
    console.log(fileName);
  }else{
    alert(' You can drop only file with type: png,jpg,jpeg!');
  }
  dropSpace.classList.remove('active');
})
