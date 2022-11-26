//zmienna postaci kredka
var character = document.getElementById("character");
//zmienna przeszkody
var block = document.getElementById("block");
//zmienna licznika
var counter = 0;
// funkcja pozwalająca na skakanie postaci 
function jump() {
    if (character.classList == "animate") { return }
    character.classList.add("animate");
    setTimeout(function () {
        //usuwanie animacji skakania 
        character.classList.remove("animate");
    }, 300);
}
//funkcja wykrywająca uderzenie w przeszkode
var checkDead = setInterval(function () {
    //zmienna przechowujaca górną granice przeszkody
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    //zmienna przechowujaca lewą granice przeszkody
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    //warunek detekcji przeszkody
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        //zatrzymanie animacji 
        block.style.animation = "none";
        //wyświetlenie informacji o przegranej 
        alert("Game Over. score: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    } else {
        //dodanie punktu 
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);