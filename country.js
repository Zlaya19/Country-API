const btn = document.getElementById('btn');
let input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('keydown', getTheText);

let apiValue = '';

function getTheText(e) {
    if(e.key === 'Enter'){
        let xhr = new XMLHttpRequest();
    xhr.open('GET',`https://restcountries.com/v2/name/${input.value}?fullText=true)`,true);

    xhr.onload = function(){
        if(this.status == 200){
            apiValue = JSON.parse(this.responseText);
            output.classList.add('classWord');
            output.innerHTML = `<span1>${apiValue[0].name}</span1>`;
            output.innerHTML += `<img src="${apiValue[0].flag} "width="270px">` + "<br>";
            output.innerHTML += `<span>capital</span>` + apiValue[0].capital +"<br>";
            output.innerHTML += `<span>population</span>` + apiValue[0].population +"<br>";
            output.innerHTML += `<span>borders</span>` + apiValue[0].borders +"<br>";
            output.innerHTML += `<span>currencies</span>` + apiValue[0].currencies[0].name +"<br>";
            output.innerHTML += `<span>native name</span>` + apiValue[0].languages[0].nativeName;
        }
    }
    xhr.send();
    }
    
}