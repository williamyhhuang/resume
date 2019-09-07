/*
var title_list = ['Let me introduce myself',
                  'Why do I want to be a backend engineer?',
                  'How do I learn by myself?',
                  'what is my favorite subject in school?',
                  'What\'s the most chanllening thing in my life?',
                  'Here\'s my introduction video'
    
];
*/

var title = document.querySelector('.title');
var introduce = document.querySelector('.introduce');
var why = document.querySelector('.why');
var how = document.querySelector('.how');
var favorite = document.querySelector('.favorite');
var challenge = document.querySelector('.challenge');
var career = document.querySelector('.career');
var video = document.querySelector('.video');

document.getElementById('introduce').addEventListener('click', loadTxt_introduce);
function loadTxt_introduce() {
    title.textContent = "Let me introduce myself";
    fetch('info/introduce.txt')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('result').innerHTML = data;
    })
    .catch(function(error){
        console.log(error);
    })
}

document.getElementById('why').addEventListener('click', loadTxt_why);
function loadTxt_why() {
    title.textContent = 'Why do I want to be a backend engineer?';
    fetch('info/why.txt')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('result').innerHTML = data;
    })
    .catch(function(error){
        console.log(error);
    })
}

document.getElementById('how').addEventListener('click', loadTxt_how);
function loadTxt_how() {
    title.textContent = 'How do I learn by myself?';
    fetch('info/how.txt')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('result').innerHTML = data;
    })
    .catch(function(error){
        console.log(error);
    })
}

document.getElementById('favorite').addEventListener('click', loadTxt_favorite);
function loadTxt_favorite() {
    title.textContent = 'What\'s my favorite subject in school?';
    fetch('info/favorite.txt')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('result').innerHTML = data;
    })
    .catch(function(error){
        console.log(error);
    })
}

document.getElementById('challenge').addEventListener('click', loadTxt_challenge);
function loadTxt_challenge() {
    title.textContent = 'What\'s the most chanllening thing in my life?';
    fetch('info/challenge.txt')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('result').innerHTML = data;
    })
    .catch(function(error){
        console.log(error);
    })
}

document.getElementById('career').addEventListener('click', loadTxt_career);
function loadTxt_career() {
    title.textContent = 'Here is my career plan';
    fetch('info/career.txt')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('result').innerHTML = data;
    })
    .catch(function(error){
        console.log(error);
    })
}

