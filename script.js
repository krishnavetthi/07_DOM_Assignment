const collection = document.querySelectorAll('div a');

let arraycollection = Array.from(collection);
console.log(arraycollection.length)

for(let i=1;i<arraycollection.length;i=i+2){
  collection[i].style.display = "none";
}

let input = document.querySelector(".main__form-input");
input.disabled = false;

let button = document.querySelector(".main__form-btn");
button.disabled = false;

console.log(localStorage.getItem('key'));


button.addEventListener("click",(event)=>{
  let input_box = document.querySelector(".main__form-input");
  localStorage.setItem('key', input_box.value);
})

if(localStorage.getItem('key')){
  localStorage.clear();
  for(let i=1;i<arraycollection.length;i=i+2){
    collection[i].style.display = "inline";
  }
}


