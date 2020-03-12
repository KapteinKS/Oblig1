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
    }

    if(bilett.fornavn === ""){
        $("#fornavn").attr('placeholder', "Skriv inn fornavn");
    } else {
        $("#fornavn").attr('placeholder', "");
    }

    if(bilett.etternavn === ""){
        $("#etternavn").attr('placeholder', "Skriv inn etternavn");
    } else {
        $("#etternavn").attr('placeholder', "");
    }

    if(bilett.telefonnr === ""){
        $("#telefon").attr('placeholder', "Skriv inn telefonnr");
    } else {
        $("#telefon").attr('placeholder', "");
    }

    if(bilett.epost === ""){
        $("#epost").attr('placeholder', "Skriv inn e-postadresse");
    } else {
        $("#epost").attr('placeholder', "");
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
        formater(billetter);
    });
}

function formater(billetter) {
    let ut = " <table class='table'>" +
        "<thead class='thead-dark'> " +
        "<tr>" +
        "<th scope='col'>Film</th>" +
        "<th scope='col'>Antal</th>" +
        "<th scope='col'>Fornavn</th>" +
        "<th scope='col'>Etternavn</th>" +
        "<th scope='col'>Telefonnr</th>" +
        "<th scope='col'>Epost</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>";
    for(let b of billetter){
        ut +=
            "<tr><td>" + b.film + "</td><td>" + b.antall + "</td><td>" + b.fornavn + "</td>\n" +
            "<td>" + b.etternavn + " </td><td>" + b.telefonnr + "</td><td>" + b.epost + "</td>" +
            "</tr>\n";
    }
    ut += "</tbody>" +
    "</table>";
    $("#biletter").html(ut);
}
function slett() {
    $.post("/slett", function () {

    });

    $("#biletter").html("");
}