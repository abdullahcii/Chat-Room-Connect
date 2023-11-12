document.addEventListener("DOMContentLoaded", function () {
    const raumBeitretenBtn = document.getElementById("raumBeitretenBtn");
    const raumErstellenBtn = document.getElementById("raumErstellenBtn");
    const raumListe = document.getElementById("raumListe");

    const erstellteRaeume = [];

    raumBeitretenBtn.addEventListener("click", function () {
        zeigeAlleRaeume();
    });

    raumErstellenBtn.addEventListener("click", function () {
        const raumName = prompt("Geben Sie den Raumnamen ein:");
        if (raumName) {
            erstellteRaeume.push(raumName);
            alert("Raum erstellt: " + raumName);
            zeigeAlleRaeume();
        }
    });

    function zeigeAlleRaeume() {
        // Leere die Raumliste
        raumListe.innerHTML = "";

        // Zeige erstellte Räume
        erstellteRaeume.forEach(function (raumName) {
            const raumBeitretenButton = erstelleRaumBeitretenButton(raumName);
            const raumContainer = erstelleRaumContainer(raumName, raumBeitretenButton);
            raumListe.appendChild(raumContainer);
        });

        // Zeige fixe Räume
        const fixeRaeume = ["Raum 1", "Raum 2", "Raum 3"];
        fixeRaeume.forEach(function (raumName) {
            const raumBeitretenButton = erstelleRaumBeitretenButton(raumName);
            const raumContainer = erstelleRaumContainer(raumName, raumBeitretenButton);
            raumListe.appendChild(raumContainer);
        });
    }

    function erstelleRaumBeitretenButton(raumName) {
        const raumBeitretenButton = document.createElement("button");
        raumBeitretenButton.textContent = "Raum beitreten";
        raumBeitretenButton.addEventListener("click", function () {
            raumBeitreten(raumName);
        });
        return raumBeitretenButton;
    }

    function erstelleRaumContainer(raumName, raumBeitretenButton) {
        const raumContainer = document.createElement("div");
        raumContainer.classList.add("raum-container");
        raumContainer.innerHTML = `<p>${raumName}</p>`;
        raumContainer.appendChild(raumBeitretenButton);
        return raumContainer;
    }

    function raumBeitreten(raumName) {
        alert("Sie sind dem Raum beigetreten: " + raumName);

        window.location.href = "../raumseite.html/raumseite.html";
    }
});