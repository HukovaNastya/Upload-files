const dropSpace = document.querySelector('.drog-space');
const div = document.querySelector('.info-title');
const imgNAme = div.querySelector('p');
const divInfoAboutSize = document.querySelector('.info-text');
const imgSize = divInfoAboutSize.querySelector('p');
// console.log(imgNAme);
const availableFileTypes = {
  'image/png': true,
  'image/jpg': true,
  'image/jpeg': true,
}

function toggleDropSpaceClass(){
  dropSpace.classList.toggle('active');
};

dropSpace.addEventListener('dragover' ,(e) => {
  e.preventDefault();
});

dropSpace.addEventListener('dragenter' ,(e) => {
  toggleDropSpaceClass();
});
dropSpace.addEventListener('dragleave', (e) => {
  toggleDropSpaceClass();
})

dropSpace.addEventListener('drop', (e) => {
  e.preventDefault();
  if( e.dataTransfer.files.length > 1){
    alert(' You can drop only one file');
    toggleDropSpaceClass();
    return;
  }
  const [file] = e.dataTransfer.files;
  const {type,name,size} = file;
  if (availableFileTypes[type]){
    imgNAme.classList.add('info-title');
    imgNAme.textContent = name;
    imgSize.classList.add('info-text');
    imgSize.textContent = Math.floor(size/1000) + 'kb';

  }
  else{
    alert(' You can drop only file with type: png,jpg,jpeg!');
  }
  toggleDropSpaceClass();
});
