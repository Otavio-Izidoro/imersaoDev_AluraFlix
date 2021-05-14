// Array com os filmes a serem exibidos.
let filmes = [
    {
        "nome": "Attack on Titan",
        "cover": "https://i.imgur.com/NqLkiRr.png",
        "autor": "Hajime Isayama",
        "publicacao": "2013",
        "funcLINK": "atackL"
    },
    {
        "nome": "Jujutsu Kaisen",
        "cover": "https://i.imgur.com/DEePWfz.png",
        "autor": "Gege Akutami",
        "publicacao": "2020",
        "funcLINK": "jujutsuL"
    },
    {
        "nome": "Steins;Gate",
        "cover": "https://i.imgur.com/DAr61MB.png",
        "autor": "Hayashi Naotaka",
        "publicacao": "2011",
        "funcLINK": "steinsL"
    },
    {
        "nome": "My Hero Academia",
        "cover": "https://i.imgur.com/4OfUyxO.png",
        "autor": "Kōhei Horikoshi",
        "publicacao": "2016",
        "funcLINK": "bokuL"
    },
    {
        "nome": "Your Name",
        "cover": "https://i.imgur.com/JsS9KzU.png",
        "autor": "Makoto Shinkai",
        "publicacao": "2016",
        "funcLINK": "yourL"
    },
    {
        "nome": "Your Lie in April",
        "cover": "https://i.imgur.com/7kRxDtq.png",
        "autor": "Naoshi Arakawa",
        "publicacao": "2015",
        "funcLINK": "kimiL"
    },
    {
        "nome": "Naruto Shippuden",
        "cover": "https://i.imgur.com/q3MtVEA.png",
        "autor": "Masashi Kishimoto",
        "publicacao": "2007",
        "funcLINK": "narutoL"
    },
    {
        "nome": "Erased",
        "cover": "https://i.imgur.com/U8Lnqdp.png",
        "autor": "Kei Sanbe",
        "publicacao": "2016",
        "funcLINK": "erasedL"
    },
    {
        "nome": "I want to eat your pancreas",
        "cover": "https://i.imgur.com/ckc2h2k.png",
        "autor": "Yoru Sumino",
        "publicacao": "2018",
        "funcLINK": "pancreasL"
    },
    {
        "nome": "Dr. Stone",
        "cover": "https://i.imgur.com/xbJsU6N.png",
        "autor": "Riichiro Inagaki",
        "publicacao": "2016",
        "funcLINK": "stoneL"
    },
    {
        "nome": "Shingeki 4",
        "cover": "https://upload.wikimedia.org/wikipedia/pt/c/c9/Shingeki_no_Kyojin_4%C2%AA_temporada.jpg",
        "autor": "Riichiro Inagaki",
        "publicacao": "2016",
        "funcLINK": "atack4L"
    }
]

// Mostrar os animes na tela
setTimeout(function() {
    // Definir a div de destino dos filmes
    let div = document.querySelector('.movies')

    // Adicionar os filmes no Array definido anteriormente
    for (var i = 0 ; i < filmes.length ; i++) {
        div.innerHTML += `<div class="movie"><button class="anime" onclick="${filmes[i].funcLINK}()">
        <img src="${filmes[i].cover}" title="${filmes[i].nome}"><h3>${filmes[i].nome}</h3></button><br><br><br>
        <input type="number" class="ep" name="epp${i}" id="ep${i}" placeholder="Digite o EP que parou"><br><br></div> `
    }
}, 1);


function atackL(){
    let ep = document.getElementById("ep0").value;
    var site = "https://animesaria.com/anime/16498/shingeki_no_kyojin/episodio/"
    if(!ep) ep = 1
    var url = pegaLink(ep, site);
   
    window.open(url)
}
function jujutsuL(){
    let ep = document.getElementById("ep1").value;
    var site = "https://animesaria.com/anime/40748/jujutsu_kaisen_tv/episodio/"
    if(!ep) ep = 1
    var url = pegaLink(ep, site);
   
    window.open(url)
}
function steinsL(){
    let ep = document.getElementById("ep2").value;
    var site = "https://animesaria.com/anime/9253/steins_gate/episodio/"
    if(!ep) ep = 1
    var url = pegaLink(ep, site);
   
    window.open(url)
}
function bokuL(){
    let ep = document.getElementById("ep3").value;
    var site = "https://animesaria.com/anime/31964/boku_no_hero_academia/episodio/"
    if(!ep) ep = 1
    var url = pegaLink(ep, site);
   
    window.open(url)
}
function yourL(){   
    var url = "https://animesaria.com/anime/32281/kimi_no_na_wa/episodio/1/legendado"
    
    window.open(url)
}
function kimiL(){
    let ep = document.getElementById("ep5").value;
    var site = "https://animesaria.com/anime/23273/shigatsu_wa_kimi_no_uso/episodio/"
    if(!ep) ep = 1
    var url = pegaLink(ep, site);
   
    window.open(url)
}
function narutoL(){
    let ep = document.getElementById("ep6").value;
    var site = "https://animesaria.com/anime/1735/naruto_shippuuden/episodio/"
    if(!ep) ep = 1
    var url = pegaLink(ep, site);
   
    window.open(url)
}
function erasedL(){
    let ep = document.getElementById("ep7").value;
    var site = "https://animesaria.com/anime/31043/boku_dake_ga_inai_machi/episodio/"
    if(!ep) ep = 1
    var url = pegaLink(ep, site);
   
    window.open(url)
}
function pancreasL(){
   
    var url = "https://animesvision.biz/animes/kimi-no-suizou-wo-tabetai/filme-legendado/legendado"
    
   
    window.open(url)
}
function stoneL(){
    let ep = document.getElementById("ep9").value;
    var site = "https://animesaria.com/anime/38691/dr_stone/episodio/"
    if(!ep) ep = 1
    var url = pegaLink(ep, site);
   
    window.open(url)
}
function atack4L(){
    let ep = document.getElementById("ep10").value;
    var site = "https://animesaria.com/anime/40028/shingeki_no_kyojin_the_final_season/episodio/"
    if(!ep) ep = 1
    var url = pegaLink(ep, site);
   
    window.open(url)
}


function pegaLink(numeroEp, endereco){
    var url = endereco;
    url += numeroEp+"/legendado"
    return url  
}