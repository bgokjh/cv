var btn = document.querySelector("#btn");
var text = document.querySelector(".text");
var list = document.querySelector("ul");
var lis = document.getElementsByTagName("li");

btn.addEventListener("click", function () {
    var li = document.createElement("li");
    var liText = document.createTextNode(text.value);
    li.appendChild(liText);
    console.log(li);
    list.appendChild(li);
    console.log(list);
    li.onclick = function () {
        li.style.display = "none";
    };
    
});