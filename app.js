// LETS EAT

function letsEat() {
    let letsEatBtn = document.querySelector('#letsEat');
    let newFood = document.createElement('ita');

    newFood.innerHTML = "";
    document.getElementById('ita').appendChild(newFood);
    itaYesBtn.style.opacity = 1;
    itaNoBtn.style.opacity = 1;
    itaTitle.style.opacity = 1;
    document.getElementById('box').style.height = '250px';
};

// ITALIAN FOOD

function yesItaFood() {
    let itaFoodYesBtn = document.querySelector('#itaYes');
    let yesIta = document.createElement('itaYesBox');

    yesIta.innerHTML = ''
    document.getElementById('itaYesBox').appendChild(yesIta);
    itaYesBox.style.opacity = 1;
    document.getElementById('box').style.height = '360px';
};

function noItaFood() {
    let itaFoodNoBtn = document.querySelector('#itaNo');
    let noIta = document.createElement('itaNoBox');

    noIta.innerHTML = ''
    document.getElementById('itaNoBox').appendChild(noIta);
    itaNoBox.style.opacity = 1;
    engYesBtn.style.opacity = 1;
    engNoBtn.style.opacity = 1;
    engTitle.style.opacity = 1;
    document.getElementById('box').style.height = '460px';
};

// ENGLISH FOOD

function yesEngFood() {
    let engFoodYesBtn = document.querySelector('#engYes');
    let yesEng = document.createElement('engYesBox');

    yesEng.innerHTML = ''
    document.getElementById('engYesBox').appendChild(yesEng);
    engYesBox.style.opacity = 1;
    document.getElementById('box').style.height = '580px';
};

function noEngFood() {
    let engFoodNoBtn = document.querySelector('#engNo');
    let noEng = document.createElement('engNoBox');

    noEng.innerHTML = ''
    document.getElementById('engNoBox').appendChild(noEng);
    engNoBox.style.opacity = 1;
    mexYesBtn.style.opacity = 1;
    mexNoBtn.style.opacity = 1;
    mexTitle.style.opacity = 1;
    document.getElementById('box').style.height = '680px';
};

//  MEXICAN FOOD

function yesMexFood() {
    let mexFoodYesBtn = document.querySelector('#mexYes');
    let yesMex = document.createElement('mexYesBox');

    yesMex.innerHTML = ''
    document.getElementById('mexYesBox').appendChild(yesMex);
    mexYesBox.style.opacity = 1;
    document.getElementById('box').style.height = '780px';
};

function noMexFood() {
    let mexFoodNoBtn = document.querySelector('#mexNo');
    let noMex = document.createElement('mexNoBox');

    noMex.innerHTML = ''
    document.getElementById('mexNoBox').appendChild(noMex);
    mexNoBox.style.opacity = 1;
    document.getElementById('box').style.height = '740px';
};
