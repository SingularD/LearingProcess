let $ = function (element) {
  return document.getElementById(element);
};

function changeWidth() {
  let a = $('content').offsetWidth;
  if (a < 300){
    $('content').style.width =  a + 100 + 'px';
  }else {
    alert("太宽啦！！！")
  }
}

function changeHeight() {
  let a = $('content').offsetHeight;
  if (a < 300) {
    $('content').style.height = a + 100 + 'px';
  }else{
    alert('太长啦！！！')
  }
}

function changeColor() {
  let colors = ['pink', 'red', 'blue', 'black'];
  let a = parseInt(Math.random()*4);
  $('content').style.backgroundColor = colors[a];
}

function hiden() {
  $('content').style.display = 'none'
}

function reset() {
  $('content').style.cssText =
    "width: 100px;\n" +
    "    height: 100px;\n" +
    "    background-color: black;\n" +
    "    margin-left: 45%;\n" +
    "    margin-top: 100px;";
}