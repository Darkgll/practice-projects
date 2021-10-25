
var button_array = document.querySelectorAll(".piano-key");
console.log(button_array);


function makeSound(soundName) {
    switch (soundName) {
        case "q":
            var sound = new Audio("sounds/A.wav");
            sound.play();
            break;
        case "w":
            var sound = new Audio("sounds/B.wav");
            sound.play();
            break;
        case "e":
            var sound = new Audio("sounds/C.wav");
            sound.play();
            break;
        case "r":
            var sound = new Audio("sounds/D.wav");
            sound.play();
            break;
        case "t":
            var sound = new Audio("sounds/E.wav");
            sound.play();
            break;
        case "y":
            var sound = new Audio("sounds/F.wav");
            sound.play();
            break;
        case "u":
            var sound = new Audio("sounds/G.wav");
            sound.play();
            break;
        case "i":
            var sound = new Audio("sounds/Bb.wav");
            sound.play();
            break;
        case "o":
            var sound = new Audio("sounds/C_s.wav");
            sound.play();
            break;
        case "p":
            var sound = new Audio("sounds/C1.wav");
            sound.play();
            break;
        case "1":
            var sound = new Audio("sounds/A_Drum.wav");
            sound.play();
            break;
        case "2":
            var sound = new Audio("sounds/B_Drum.wav");
            sound.play();
            break;
        case "3":
            var sound = new Audio("sounds/C_Drum.wav");
            sound.play();
            break;
        case "4":
            var sound = new Audio("sounds/D_Drum.wav");
            sound.play();
            break;
        case "5":
            var sound = new Audio("sounds/E_Drum.wav");
            sound.play();
            break;
        case "6":
            var sound = new Audio("sounds/F_Drum.wav");
            sound.play();
            break;
        case "7":
            var sound = new Audio("sounds/G_Drum.wav");
            sound.play();
            break;
        case "8":
            var sound = new Audio("sounds/Bb_Drum.wav");
            sound.play();
            break;
        case "9":
            var sound = new Audio("sounds/C_s1.wav");
            sound.play();
            break;
        case "0":
            var sound = new Audio("sounds/C1_Drum.wav");
            sound.play();
            break;
        case "a":
            var sound = new Audio("sounds/Cq_Drum.wav");
            sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/D1.wav");
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/D_s.wav");
            sound.play();
            break;
        case "f":
            var sound = new Audio("sounds/Dq_Drum.wav");
            sound.play();
            break;
        case "g":
            var sound = new Audio("sounds/E1.wav");
            sound.play();
            break;
        case "h":
            var sound = new Audio("sounds/F_s.wav");
            sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/F1.wav");
            sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/G_s.wav");
            sound.play();
            break;
        case "z":
            var sound = new Audio("sounds/Cq1_Drum.wav");
            sound.play();
            break;
        case "x":
            var sound = new Audio("sounds/D1_Drum.wav");
            sound.play();
            break;
        case "c":
            var sound = new Audio("sounds/Cq_Drum.wav");
            sound.play();
            break;
        case "v":
            var sound = new Audio("sounds/Dq1_Drum.wav");
            sound.play();
            break;
        case "b":
            var sound = new Audio("sounds/E1_Drum.wav");
            sound.play();
            break;
        case "n":
            var sound = new Audio("sounds/F1_Drum.wav");
            sound.play();
            break;
        case "m":
            var sound = new Audio("sounds/Fq_Drum.wav");
            sound.play();
            break;
        case ",":
            var sound = new Audio("sounds/Gq_Drum.wav");
            sound.play();
            break;
        default:
            console.log("Wrong key");
    }
    
}


function pressed(key) {
    var key = document.querySelector("." + key);
    key.classList.toggle("pressed")
    setTimeout( function () {
        key.classList.toggle("pressed");        
    }, 100);
    console.log("working")

}


document.addEventListener("keydown", function (event) {
    var sound_key = event.key;
    console.log($("label:contains(sound_key)"));
    makeSound(sound_key);
    pressed(sound_key);
})


for (var i=0; i<button_array.length; i++) {
    button_array[i].addEventListener("click", function () {
        
        var sound_key = this.innerHTML.split("<br>")[1][0];
        console.log(sound_key);
        console.log(typeof(sound_key));
        makeSound(sound_key);
        pressed(sound_key);

    });
}

