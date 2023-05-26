// 1 codigo, este é responsável por formar e atualizar os cards na pagina, index.html.
fetch('https://valorant-api.com/v1/agents')
    .then(resposta => resposta.json())
    .then(conteudocard => {
        console.log(conteudocard);
        let conteudo = document.querySelector('#cards').innerHTML; 
        document.querySelector('#cards').innerHTML = conteudo +
        `<div class="card m-1" id="card1">
          <img class="card-img-top" id='imagem1'>
          <div class="card-body">
            <h2 class="card-title" id='name1' ></h2>
            <p class="card-text" id='text1'></p>
          </div>
        </div>
        <br>

        <div class="card m-1" id="card2">
          <img class="card-img-top" id='imagem2'>
          <div class="card-body">
            <h2 class="card-title" id='name2' ></h2>
            <p class="card-text" id='text2'></p>
          </div>
        </div>

        <div class="card m-1" id="card3">
          <img class="card-img-top" id='imagem3'>
          <div class="card-body">
            <h2 class="card-title" id='name3' ></h2>
            <p class="card-text" id='text3'></p>
          </div>
        </div>
        `;
        //criando um vetor para armazenar os numeros do array ja selecionados
        var numeros = [];

        //loop que ira gerar os numeros aleatorios para os cards
            for (let x = 0; x < 3; x++) {
                let numero = Math.floor(Math.random() * conteudocard.data.length);

                //condição para não repetir o número do agente, há um pequeno problama na conteudocard.data[numero].fullPortraitV2 se for na posisão 8 do array, a imagem é nula, por isso a verificação
                while (numeros.includes(numero) || numero === 8 || conteudocard.data[numero].fullPortraitV2 === null ) {
                    numero = Math.floor(Math.random() * conteudocard.data.length);
                    
                }
                // inseri o numero no vetor e nas linhas seguintes atribui aos cardes o valor do array com base no numero sorteado
                numeros.push(numero);
                document.querySelector(`#imagem${x + 1}`).src = conteudocard.data[numero].fullPortraitV2;
                document.querySelector(`#text${x + 1}`).innerHTML = conteudocard.data[numero].description;
                document.querySelector(`#name${x + 1}`). innerHTML = conteudocard.data[numero].displayName;
            }

    });

// 2 codigo, resposnsável por buscar as informações do aegente requerido
function buscar() {
    var nome = document.querySelector('#nomes').value;
    fetch('https://valorant-api.com/v1/agents')
        .then(res => res.json())
        .then(respostas => {
            console.log(respostas)
            let encontrado = false;

            for (let i = 0; i < respostas.data.length; i++) {
                // da mesma forma, como ha um erro no array 8, fiz uma filtragem para o nome do agente que esta duplicado
                if(nome ===  'Sova'){
                    let infoagentes = `
                    <div class="row" id='agent'> 
                    <br>
                    <img id="iconagent">
                        <p>Classe: <label id="funcao"></label></p>
                        <p>Habilidades</p>
                        <p>Habilidade 1: <label id="primeira"> </label>
                        <img id='hb1' ></p>
                        <p>Habilidade 2: <label id="segunda"></label>
                        <img id='hb2' >
                        </p>
                        <p>Habilidade 3: <label id="terceira"></label>
                        <img id='hb3' ></p>
                        <p>Ultimate: <label id="ult"></label>
                        <img id='imgult' ></p>
                        </div>
                    `;

                    document.getElementById('infoagentes').innerHTML = infoagentes;
                    document.querySelector('#funcao').innerHTML = respostas.data[9].role.displayName;
                    document.querySelector('#iconagent').src = respostas.data[9].displayIcon;
                    document.querySelector('#primeira').innerHTML = respostas.data[9].abilities[0].displayName;
                    document.querySelector('#hb1').src = respostas.data[9].abilities[0].displayIcon;
                    document.querySelector('#segunda').innerHTML = respostas.data[9].abilities[1].displayName;
                    document.querySelector('#hb2').src = respostas.data[9].abilities[1].displayIcon;
                    document.querySelector('#terceira').innerHTML = respostas.data[9].abilities[2].displayName;
                    document.querySelector('#hb3').src = respostas.data[9].abilities[2].displayIcon;
                    document.querySelector('#ult').innerHTML = respostas.data[9].abilities[3].displayName;
                    document.querySelector('#imgult').src = respostas.data[9].abilities[3].displayIcon;
                    
                    encontrado = true;
                    break;

                }
                //aqui o codigo ocorre corretamente se o nome pesquisado for diferente de 'Sova'
                if (respostas.data[i].displayName === nome) {
                    let infoagentes = `
                    <div class="row" id='agent'>
                        <br>
                        <img id="iconagent">
                        <p>Classe: <label id="funcao"></label></p>
                        <p>Habilidades</p>
                        <p>Habilidade 1: <label id="primeira"> </label>
                        <img id='hb1' ></p>
                        <p>Habilidade 2: <label id="segunda"></label>
                        <img id='hb2' >
                        </p>
                        <p>Habilidade 3: <label id="terceira"></label>
                        <img id='hb3' ></p>
                        <p>Ultimate: <label id="ult"></label>
                        <img id='imgult' ></p>
                    </div>
                    `;

                    document.getElementById('infoagentes').innerHTML = infoagentes;
                    document.querySelector('#funcao').innerHTML = respostas.data[i].role.displayName;
                    document.querySelector('#iconagent').src = respostas.data[i].displayIcon;
                    document.querySelector('#primeira').innerHTML = respostas.data[i].abilities[0].displayName;
                    document.querySelector('#hb1').src = respostas.data[i].abilities[0].displayIcon;
                    document.querySelector('#segunda').innerHTML = respostas.data[i].abilities[1].displayName;
                    document.querySelector('#hb2').src = respostas.data[i].abilities[1].displayIcon;
                    document.querySelector('#terceira').innerHTML = respostas.data[i].abilities[2].displayName;
                    document.querySelector('#hb3').src = respostas.data[i].abilities[2].displayIcon;
                    document.querySelector('#ult').innerHTML = respostas.data[i].abilities[3].displayName;
                    document.querySelector('#imgult').src = respostas.data[i].abilities[3].displayIcon;
                    
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) {
                document.getElementById('infoagentes').innerHTML = 'Agente não encontrado.';
            }
        });
}

//3 codigo, para gerar os mosdos de jogo
function modosdejogos() {
    document.getElementById("modos").innerHTML ='';
    
    fetch('https://valorant-api.com/v1/gamemodes').then(modosjogo => modosjogo.json())
        .then(todososmodos => {
            console.log(todososmodos)
            for (let i = 0; i < todososmodos.data.length; i++) {
                let modos = document.getElementById('modos').innerHTML;
                document.getElementById("modos").innerHTML = modos += `
                <br>
                <div id='gamesmodos' class='col-12'> 
                    <label id='modo${i}'></label> 
                    <img id='imgmodo${i}' width="40"><br>
                    Duração média:
                    <label id='duracao${i}'> </label>
                </div>` ;
            }
            for (let i = 0; i < todososmodos.data.length; i++) {
                document.querySelector(`#modo${i}`).innerHTML = todososmodos.data[i].displayName
                if(todososmodos.data[i].displayIcon === ''){
                    document.querySelector(`#imgmodo${i}`).src = ''        
                }
                else {
                    document.querySelector(`#imgmodo${i}`).src = todososmodos.data[i].displayIcon
                }
                document.querySelector(`#duracao${i}`).innerHTML = todososmodos.data[i].duration
            }
        });
}

//4 codigo, gerar os mapas do jogo 
function mapas() {
    document.getElementById("mapas").innerHTML =  '';
    fetch('https://valorant-api.com/v1/maps')
        .then(todosmapas => todosmapas.json())
        .then(allmaps => {
            console.log(allmaps);
            for (let i = 0; i < allmaps.data.length; i++) {
                let mapas = document.getElementById('mapas').innerHTML;
                document.getElementById("mapas").innerHTML = mapas + `
                <div id='divmaps' class='col'>   
                <label id='mapa${i}' ></label><br>
                <img id='iconmapa${i}'>
                <img id = 'link${i}' width='100%'>

                </div><br>`;
            }
            for (let i = 0; i < allmaps.data.length; i++) {
                document.querySelector(`#mapa${i}`).innerHTML = allmaps.data[i].displayName;
                document.querySelector(`#link${i}`).src = allmaps.data[i].displayIcon;
                document.querySelector(`#iconmapa${i}`).src = allmaps.data[i].listViewIcon;
            }
        });
}

//5 codigo, faz a lista de armas no jogo
function listar(){
    document.querySelector('#weapons').innerHTML = '';

    fetch('https://valorant-api.com/v1/weapons')
    .then(weapons => weapons.json())
    .then(weaponsdata => {
        console.log(weaponsdata);
        for (let i = 0; i < weaponsdata.data.length; i++) {
            document.querySelector('#weapons').innerHTML += `
                <div id='weaponsdiv' class='col-sm'> 
                    <label id='nome${i}'></label><br>
                    <img id='iconewpns${i}' width='300'>
                </div><br>
            `;
            document.querySelector(`#nome${i}`).innerHTML = weaponsdata.data[i].displayName;
            document.querySelector(`#iconewpns${i}`).src = weaponsdata.data[i].displayIcon;
        }
    });
    }

//6 filtro de pesquisa, que mostra as skins da arma espesifica
function skinsweapons() {  
    document.querySelector('#weaponskin').innerHTML = '';

    var skinswpnsValue = document.querySelector('#nomeskin').value;
    fetch('https://valorant-api.com/v1/weapons')
        .then(response => response.json())
        .then(wpskins => {
            console.log(wpskins);
            let weaponFound = false;
            for (let i = 0; i < wpskins.data.length; i++) {
                if (wpskins.data[i].displayName === skinswpnsValue) {
                    for (let x = 0; x < wpskins.data[i].skins.length; x++){
                    document.querySelector('#weaponskin').innerHTML += `
                        <div id='divskins' class='col-2'> 
                            <label id='nome${x}'></label><br>
                            <img id='skinswpns${x}' width='80%'>
                        </div><br>
                    `;
                    document.querySelector(`#nome${x}`).innerHTML = wpskins.data[i].skins[x].displayName;
                    document.querySelector(`#skinswpns${x}`).src = wpskins.data[i].skins[x].displayIcon;
                    weaponFound = true;
                }
            }
            }
            if (!weaponFound) {
                document.querySelector('#weaponskin').innerHTML = 'Arma não encontrada';
            }
        });
}

// 7 codigo, há 2 funcões para limpar, pois existens funções que não são geradas na mesma pagina, se fosse uma função para as duas páginas daria conflito.
function limpar(){
    document.getElementById('infoagentes').innerHTML ='';
    document.getElementById("modos").innerHTML ='';
    document.getElementById("mapas").innerHTML =  '';
    document.getElementById('weapons').innerHTML = '';
    document.getElementById('weaponskin').innerHTML = '';
}
function limpar2(){

    document.getElementById('weapons').innerHTML = '';
    document.getElementById('weaponskin').innerHTML = '';
}