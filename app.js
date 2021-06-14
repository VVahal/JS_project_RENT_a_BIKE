function cenaPujceni() { 
    const typ_kola = document.querySelectorAll("input[type=checkbox]");
    const pocet_pro_druh = document.querySelectorAll("input[type=number]");
    const radia = document.querySelectorAll('input[type=radio]');
    var cenaKoloPocet = 0;
    var celkCena = 0;
    var navic = 0;
    var uplneCelkCena = 0; // :]
    for(i = 0; i<typ_kola.length ;i++){
        if(typ_kola[i].checked){
            let pocet = pocet_pro_druh[i].value;
            let cena = typ_kola[i].getAttribute("value");
            cenaKoloPocet +=  pocet * cena;
        }
    }
    pocet_dnu = parseInt(document.roletka.pocet_dnu.value);
    celkCena = cenaKoloPocet * pocet_dnu;
    
    for(let radio of radia){
        if(radio.checked){
            navic += parseFloat(radio.value);
        }
    }
    uplneCelkCena = celkCena + (celkCena * navic)

    document.getElementById('cena_celkem_span').innerHTML = 'Cena: '+uplneCelkCena + ' Kč';
    var navrh = parseInt(document.getElementById('navr_ceny').value);
    if(navrh >= uplneCelkCena){
        document.getElementById('navrhVSvypocet').value = 'Váš návrh prošel';
        document.getElementById("navrhVSvypocet").classList.remove("red");
        document.getElementById("navrhVSvypocet").classList.add("green");
    }else{
        document.getElementById('navrhVSvypocet').value = 'Váš návrh neprošel';
        document.getElementById("navrhVSvypocet").classList.remove("green");
        document.getElementById("navrhVSvypocet").classList.add("red");
    }
    
 }
 function proverTo() {
    promenna = document.getElementById("emailik").value.includes('@');
    if (promenna) {
        document.getElementById("vyzva").innerHTML = "<span style=color:green>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; V pořádku odesláno.";
    } else {
        document.getElementById("vyzva").innerHTML = "<span style=color:red>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Zadej validní email !<span>";
    }
}


 document.getElementById('vysledekbtn').addEventListener('click', function () { 
    cenaPujceni();
  });
  document.getElementById('odeslat').addEventListener('click', function () { 
    proverTo();
  });
