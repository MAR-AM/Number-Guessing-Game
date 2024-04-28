var x = Math.floor(Math.random() * 10) + 1;
    var nbrTries = 0; 

    do {
        var y = parseInt(prompt("Devinez le nombre (entre 1 et 10) : "));
        nbrTries++; 
        if (y < x) {
            alert("Le nombre à trouver est plus grand.");
        } else if (y > x) {
            alert("Le nombre à trouver est plus petit.");
        }
    } while (y != x); 

    alert("Bravo ! Vous avez trouvé le nombre '"+ x + "' en " + nbrTries + " essais.");
