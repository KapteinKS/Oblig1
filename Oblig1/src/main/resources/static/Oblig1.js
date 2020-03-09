function kjop() {
    let bilett = {
        film : $("#filmer").val(),
        antall : $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnr: $("#telefon").val(),
        epost : $("#epost").val()
    };

    let tallAntall = parseInt(bilett.antall, 10);

    if (bilett.film === "") {
        {
            alert("Ingen film valgt!")
        }
    }

    if(isNaN(tallAntall)){
        alert("Kun heltall kan skrives inn i antall");
    } else if(bilett.antall === ""){
        $("#tomAntall").html("Må skrive noe i antall");
    } else {
        $("#tomAntall").html("");
    }

    if(bilett.fornavn === ""){
        $("#tomFor").html("Må skrive noe i fornavn");
    } else {
        $("#tomFor").html("");
    }

    if(bilett.etternavn === ""){
        $("#tomEtter").html("Må skrive noe i etternavn");
    } else {
        $("#tomEtter").html("");
    }

    if(bilett.telefonnr === ""){
        $("#tomTlf").html("Må skrive noe i telefonnr");
    } else {
        $("#tomTlf").html("");
    }

    if(bilett.epost === ""){
        $("#tomEpost").html("Må skrive noe i epost");
    } else {
        $("#tomEpost").html("");
    }

    if(bilett.film !== "" && bilett.antall !== "" && bilett.fornavn !== "" &&
        bilett.etternavn !== "" && bilett.telefonnr !== "" && bilett.epost !== "" && !isNaN(tallAntall)){

        $.post("/lagre", bilett, function () {
            hentAlle();
        });
        $("#filmer").prop('selectedIndex', 0);
        $("#antall").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#telefon").val("");
        $("#epost").val("");

    }
}

function hentAlle() {
    $.get("/hent", function (billetter) {
        formater(billetter)
    });
}

function formater(billetter) {
    let ut = "";
    for(let b of billetter){
        ut +=
            "<tr><td>" + b.film + "</td><td>" + b.antall + "</td><td>" + b.fornavn + "</td>\n" +
            "<td>" + b.etternavn + " </td><td>" + b.telefonnr + "</td><td>" + b.epost + "</td>" +
            "</tr>\n";
    }
    document.getElementById("biletter").innerHTML =" <table>\n" +
        "<tr><th>Film</th><th>Antal</th><th>Fornavn</th><th>Etternavn</th>\n" +
        "<th>Telefonnr</th><th>Epost</th></tr>\n"
        + ut +
        "</table>";
}
function slett() {
    $.post("/slett", function () {

    });

    $("#biletter").html("");
}