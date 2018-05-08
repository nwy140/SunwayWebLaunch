  // getElementById
  function getElementByIdEg() {
    var elementText = document.getElementById("getElementByIdExample");
    alert(elementText.innerHTML);
    alert(elementText.innerText);
  }

  // getElementById
  function getElementsByClassNameEg() {
    var classText = document.getElementsByClassName("getElementsByClassNameExample");
    // alert(classText[0].innerHTML);
    alert(classText[0].innerText);
  }

  //getElementByTagName
function getElementByTagNameEg() {
    var tagname = document.getElementsByTagName("h3");
    alert(tagname[0].innerHTML);
  }

  //createElement
function createElementEg() {
    var inputText = prompt("Enter your name: ");
    var newElement = document.createElement("li");
    var createNew = document.createTextNode(inputText);
    newElement.appendChild(createNew);
    document.getElementById("list").appendChild(newElement);
  }

  //getElementStyle

  function getElementStyle() {
    var element = document.getElementById("colorEg");
    alert("The color of the text is " + element.style.color);
  }


  //changeElementStyle
  function changeElementStyle() {
    var element = document.getElementById("colorChanger");
    element.style.color = "green";
  }  

  

  //element.style.property
  function changeColorHover(input) {
    var element = document.getElementById("colorHover");
    element.style.color = input;

  }

  //appendChild
function addItem(){
  if (document.getElementById("todolist").childNodes.length > 3){
    alert("you already have 3 items");
  }else{
    var liText = prompt("Enter your name: ");

    var newLi = document.createElement("li");
   
    var createNew = document.createTextNode(newLi);


    newLi.appendChild(createNew);
    document.getElementById("todolist").appendChild(newLi);
  }

}

  //removeChild
function removeItem(){
  var list = document.getElementById("todolist");
    while(list.firstchild){
    }
 }


  // This is a JavaScript object // json
  var fruits = { 
    0:{
      "name": "Apple",
      "price": 50,
      "weight": 125
    },
    1:{
      "name": "Orange",
      "price": 60,
      "weight": 230
    },
    2:{
      "name": "Pear",
      "price": 35,
      "weight": 200
    },
    3:{
      "name": "Durian",
      "price": 120,
      "weight": 500
    }
  }


/*  //print loop
function looper(input){
  var i =0;
  while ( i < object.keys(fruits).length){
    var newLi = document.createElement("li");
    var fruitPrint = document.createTextNode(fruits[i][input]);
    newLi.setAttribute("id", "fruitItem");
    newLi.appendChild(fruitPrint);
    document.getElementById("loopTest").appendChild(newLi);
  
}*/

  //clearing list