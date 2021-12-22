function hello(id) {
    document.getElementById("ciao").innerHTML= "Hello World!";
    console.log("Hello World!");
}

function mario() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "/src/main/resources/mario.png");
    document.body.appendChild(x);
  }

  function jump() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "/src/main/resources/jump.gif");
    document.body.appendChild(x);
  }