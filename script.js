// MEME
function crearMeme(){
top.innerText = arribaTxt.value;
bottom.innerText = abajoTxt.value;
}

// GUARDAR MEME
function guardarMeme(){
let meme = {
top: arribaTxt.value,
bottom: abajoTxt.value
};

localStorage.setItem("meme", JSON.stringify(meme));
alert("Guardado");
}

// LOGIN
function login(){
let user = document.getElementById("user").value;
localStorage.setItem("user", user);
alert("Bienvenido " + user);
}

// IA TIPO CHATGPT
async function IA(){
let input = document.getElementById("inputIA").value;
let chat = document.getElementById("chat");

chat.innerHTML += "<p><b>Tú:</b>"+input+"</p>";

try{
let res = await fetch("https://es.wikipedia.org/api/rest_v1/page/summary/"+input);
let data = await res.json();

let respuesta = data.extract || "No encontré info.";

chat.innerHTML += "<p><b>IA:</b>"+respuesta+"</p>";

}catch{
chat.innerHTML += "<p>Error</p>";
}
}
