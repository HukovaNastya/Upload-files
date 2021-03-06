const dropSpace = document.querySelector('.drog-space');
const div = document.querySelector('.info-title');
const imgNAme = div.querySelector('p');
const divInfoAboutSize = document.querySelector('.info-text');
const imgSize = divInfoAboutSize.querySelector('p');
const divWithButton = document.querySelector('.progress__inner__btn');
const btnSave = divWithButton.querySelector('button');
const btnBrowse =  document.querySelector('.drog-space-text');
console.log(btnBrowse);
const input = divWithButton.querySelector('input');
console.log(input);
let file;
const availableFileTypes = {
  'image/png': true,
  'image/jpg': true,
  'image/jpeg': true,
}

btnBrowse.onclick = ()=>{
  input.click() ;
}

input.addEventListener('change', function() {
    file = this.files[0];
    toggleDropSpaceClass();
    showFile();
});

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
  [file] = e.dataTransfer.files;
  showFile();
  // toggleDropSpaceClass();
});

function sentServer(body, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', ' http://localhost:2121/upload');
  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

  xhr.addEventListener('error', () => {
    console.log('error');
  });

  xhr.send(JSON.stringify(body)); 
}

btnSave.addEventListener('click', e => {
  const newPost = {
    body: 'name',
  };
  sentServer(newPost, response => {
   console.log(response);
  });
});
function showFile(){
  let fileType = file.type;
  let fileName = file.name;
  let fileSize = file.size;
  if (availableFileTypes[fileType ]){
    imgNAme.classList.add('info-title');
    imgNAme.textContent =  fileName;
    imgSize.classList.add('info-text');
    imgSize.textContent = Math.floor(fileSize /1000) + 'kb';
  }
  else{
    alert(' You can drop only file with type: png,jpg,jpeg!');
  }
  toggleDropSpaceClass();
};

