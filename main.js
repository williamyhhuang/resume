document.getElementById('introduce').addEventListener('click', loadTxt);
function loadTxt() {
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

var why_result = document.querySelector('.why_result');
var why = document.querySelector('.why');
why.onclick = function why() {
      why_result.textContent = 'why myself'
}
