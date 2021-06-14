function cenaPujceni() { 
    const typ_kola = $("input[type=checkbox]");
    const pocet_pro_druh = $("input[type=number]");
    const radia = $('input[type=radio]');
    // console.log(pocet_pro_druh);
    // console.log(radia);
    var cenaKoloPocet = 0;
    var celkCena = 0;
    var navic = 0;
    var uplneCelkCena = 0; // :]
    for(i = 0; i<typ_kola.length ;i++){
        if(typ_kola[i].checked){
            let pocet = pocet_pro_druh.eq(i).val();
            let cena = typ_kola.eq(i).attr("value");
            cenaKoloPocet +=  pocet * cena;
        }
    }
    // console.log(cenaKoloPocet);
    pocet_dnu = parseInt($('#pocet_dnu').val());
    // console.log(pocet_dnu);
    celkCena = cenaKoloPocet * pocet_dnu;
    // console.log(celkCena);
    
    // console.log(radio);

    for(i = 0; i<radia.length ;i++){
        if($('input[type=radio]').eq(i).is(':checked')){
            ble = $('input[type=radio]').eq(i).val();
            navic += parseFloat(ble);
        }
    }
    // console.log(navic);
    uplneCelkCena = celkCena + (celkCena * navic);
    // console.log(uplneCelkCena);

    $('#cena_celkem_span').text(' Celkova cena: '+uplneCelkCena + ' Kc');
    var navrh = parseInt($('#navr_ceny').val());
    // console.log(navrh);
    if(navrh >= uplneCelkCena){
        $('#navrhVSvypocet').val('Váš návrh prošel');
    }else{
        $('#navrhVSvypocet').val('Váš návrh neprošel');
    }
    

 }
 function proverTo() {
    promenna = $("#emailik").val();
    // console.log(promenna.indexOf('@'))
    if (promenna.indexOf('@') != -1) {
        $("#vyzva").text(" V pořádku odesláno");
    } else {
        $("#vyzva").text(" Znova zadej validní Email");
    }
}


 $('#vysledekbtn').click(function () { 
    cenaPujceni();
  });
  $('#odeslat').click( function () { 
    proverTo();
  });
