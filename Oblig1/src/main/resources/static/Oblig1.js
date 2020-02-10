let biletter = [];

function kjop() {
    let bilett = {
        film : document.getElementById("filmer").value,
        antall : document.getElementById("antall").value,
        fornavn: document.getElementById("fornavn").value,
        etternavn: document.getElementById("etternavn").value,
        telefonnr: document.getElementById("telefon").value,
        epost : document.getElementById("epost").value
    };

    const tallAntall = Number(bilett.antall);

    if (bilett.film === "") {
        {
            alert("Ingen film valgt!")
        }
    }

    if(isNaN(tallAntall)){
        alert("Kun heltall kan skrives inn i antall");
    } else if(bilett.antall === ""){
        document.getElementById("tomAntall").innerHTML = "Må skrive noe i antall";
    } else {
        document.getElementById("tomAntall").innerHTML = "";
    }

    if(bilett.fornavn === ""){
        document.getElementById("tomFor").innerHTML = "Må skrive noe i fornavn";
    } else {
        document.getElementById("tomFor").innerHTML = "";
    }

    if(bilett.etternavn === ""){
        document.getElementById("tomEtter").innerHTML = "Må skrive noe i etternavn";
    } else {
        document.getElementById("tomEtter").innerHTML = "";
    }

    if(bilett.telefonnr === ""){
        document.getElementById("tomTlf").innerHTML = "Må skrive noe i telefonnr";
    } else {
        document.getElementById("tomTlf").innerHTML = "";
    }

    if(bilett.epost === ""){
        document.getElementById("tomEpost").innerHTML = "Må skrive noe i epost";
    } else {
        document.getElementById("tomEpost").innerHTML = "";
    }

    if(bilett.film != "" && bilett.antall != "" && bilett.fornavn != "" &&
        bilett.etternavn != "" && bilett.telefonnr != "" && bilett.epost != ""){
        biletter.push(bilett);
        let ut = "";
        for(let b of biletter){
            ut +=
                "<tr>" +
                "<td>" + b.film + "</td>\n" +
                "<td>" + b.antall + "</td>\n" +
                "<td>" + b.fornavn + "</td>\n" +
                "<td>" + b.etternavn + " </td>\n" +
                "<td>" + b.telefonnr + "</td>\n" +
                "<td>" + b.epost + "</td>" +
                "</tr>\n";
        }
        document.getElementById("biletter").innerHTML =" <table>\n" +
            "<tr>\n" +
            "<th>Film</th>\n" +
            "<th>Antal</th>\n" +
            "<th>Fornavn</th>\n" +
            "<th>Etternavn</th>\n" +
            "<th>Telefonnr</th>\n" +
            "<th>Epost</th>\n" +
            "</tr>\n"
            + ut +
            "</table>";
    }
}

function slett() {
    biletter = [];
    document.getElementById("biletter").innerHTML = "";
}