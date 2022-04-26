
function Create() {
  if (document.getElementById('text').value == "") {
    document.getElementById('D').innerHTML = "Please fill the input below"
    document.getElementById('D').style.color = "red";
  } else {
    let size = "240x240"
    let text = document.getElementById('text').value;
    let baseurl = "https://api.qrserver.com/v1/create-qr-code/"
    let url = baseurl + "?data=" + text + "&size=" + size;
    let QR = document.getElementById('QR');
    QR.src = url;
    document.getElementById('D').style.color = "black";
    document.getElementById('D').innerHTML = "Click QR to copy link"
    QR.setAttribute("data-bs-toggle", "modal")
    document.getElementById('link').value = url;
  
    document.getElementById('downl').setAttribute("download", url)

  }

}

function co() {
  let size = "240x240"
  let text = document.getElementById('text').value;
  let baseurl = "https://api.qrserver.com/v1/create-qr-code/"
  let url = baseurl + "?data=" + text + "&size=" + size;
  copy(url);
}


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {

  myInput.focus()
})
console.clear();
function check(){
  let m = document.getElementById('text').value;
  let k = JSON.stringify(m).length - 2;
  if(k>25){
    document.getElementById('char').style.color = "red";
    document.getElementById('char').innerHTML = k+"/50"
  }else{
    document.getElementById('char').style.color = "green";
    document.getElementById('char').innerHTML = k+"/50"

  }

}
function copy(){
  let inputElement = document.getElementById('link')
inputElement.select()
document.execCommand("Copy")
}
function Create1() {
  if (document.getElementById('e').value == "") {
    document.getElementById('D').innerHTML = "Please fill the input below"
    document.getElementById('D').style.color = "red";
  } else {
    let size = "240x240"
    let text = document.getElementById('e').value;
    let baseurl = "https://api.qrserver.com/v1/create-qr-code/"
    let url = baseurl + "?data=" + text + "&size=" + size;
    let QR = document.getElementById('QR');
    QR.src = url;
    document.getElementById('D').style.color = "black";
    document.getElementById('D').innerHTML = "Click QR to copy link"
    QR.setAttribute("data-bs-toggle", "modal")
    document.getElementById('link').value = url;
  
    document.getElementById('downl').setAttribute("download", url)

  }

}
function check1(){
  let m = document.getElementById('e').value;
  let k = JSON.stringify(m).length - 2;
  if(k>25){
    document.getElementById('char').style.color = "red";
    document.getElementById('char').innerHTML = k+"/50"
  }else{
    document.getElementById('char').style.color = "green";
    document.getElementById('char').innerHTML = k+"/50"

  }}
