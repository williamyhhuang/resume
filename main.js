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