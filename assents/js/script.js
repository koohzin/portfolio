function vinicio(){
    document.getElementById('apresentacao1').style.display = 'flex';
    document.getElementById('sobre1').style.display = 'none';
    document.getElementById('contato1').style.display = 'none';
    document.getElementById('habilidades1').style.display = 'none';
        if(document.getElementById('apresentacao1').style.display == 'flex'){
        colorapresentacao.style.color = '#F4827A'
        colorsobre.style.color = 'black'
        colorhab.style.color = 'black'
        colorcontato.style.color = 'black'
}
}
function vsobre(){
    document.getElementById('apresentacao1').style.display = 'none';
    document.getElementById('sobre1').style.display = 'flex';
    document.getElementById('contato1').style.display = 'none';
    document.getElementById('habilidades1').style.display = 'none';

        if(document.getElementById('sobre1').style.display == 'flex'){

        colorapresentacao.style.color = 'black'
        colorsobre.style.color = '#F4827A'
        colorhab.style.color = 'black'
        colorcontato.style.color = 'black'
}
}
function vcontato(){
    document.getElementById('apresentacao1').style.display = 'none';
    document.getElementById('sobre1').style.display = 'none';
    document.getElementById('contato1').style.display = 'flex';
    document.getElementById('habilidades1').style.display = 'none';

        if(document.getElementById('contato1').style.display == 'flex'){

        colorapresentacao.style.color = 'black'
        colorsobre.style.color = 'black'
        colorhab.style.color = 'black'
        colorcontato.style.color = '#F4827A'
}
}
function vhabilidade(){
    document.getElementById('apresentacao1').style.display = 'none';
    document.getElementById('sobre1').style.display = 'none';
    document.getElementById('contato1').style.display = 'none';
    document.getElementById('habilidades1').style.display = 'flex';

        if(document.getElementById('habilidades1').style.display == 'flex'){

        colorapresentacao.style.color = 'black'
        colorsobre.style.color = 'black'
        colorhab.style.color = '#F4827A'
        colorcontato.style.color = 'black'   
        }
}

var iconinicio = document.getElementById('apresentacao1');
var iconsobre = document.getElementById('sobre1');
var iconhab = document.getElementById('habilidades1');
var iconcontato = document.getElementById('contato1');

var colorapresentacao = document.getElementById('iconinicio');
var colorsobre = document.getElementById('iconsobre');
var colorhab = document.getElementById('iconhabilidade');
var colorcontato = document.getElementById('iconcontato');

