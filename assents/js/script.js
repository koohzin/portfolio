function iniciar(){
    document.getElementById('apresentacao1').style.display = 'flex';
    document.getElementById('sobre1').style.display = 'none';
    document.getElementById('contato1').style.display = 'none';
    document.getElementById('habilidades1').style.display = 'none';
}
function vinicio(){
    document.getElementById('apresentacao1').style.display = 'flex';
    document.getElementById('sobre1').style.display = 'none';
    document.getElementById('contato1').style.display = 'none';
    document.getElementById('habilidades1').style.display = 'none';
        if(document.getElementById('apresentacao1').style.display == 'flex'){
            if(document.querySelector('#darkmode').checked == true){
        colorapresentacao.style.color = '#9EE3C3'
        colorsobre.style.color = 'black'
        colorhab.style.color = 'black'
        colorcontato.style.color = 'black'
}else{
        colorapresentacao.style.color = '#F4827A'
        colorsobre.style.color = 'black'
        colorhab.style.color = 'black'
        colorcontato.style.color = 'black'
}
}
}
function vsobre(){
    document.getElementById('apresentacao1').style.display = 'none';
    document.getElementById('sobre1').style.display = 'flex';
    document.getElementById('contato1').style.display = 'none';
    document.getElementById('habilidades1').style.display = 'none';

        if(document.getElementById('sobre1').style.display == 'flex'){
            if(document.querySelector('#darkmode').checked == true){

        colorapresentacao.style.color = 'black'
        colorsobre.style.color = '#9EE3C3'
        colorhab.style.color = 'black'
        colorcontato.style.color = 'black'
}else{
    colorapresentacao.style.color = 'black'
        colorsobre.style.color = '#F4827A'
        colorhab.style.color = 'black'
        colorcontato.style.color = 'black'
}
}
}
function vcontato(){
    document.getElementById('apresentacao1').style.display = 'none';
    document.getElementById('sobre1').style.display = 'none';
    document.getElementById('contato1').style.display = 'flex';
    document.getElementById('habilidades1').style.display = 'none';

        if(document.getElementById('contato1').style.display == 'flex'){
            if(document.querySelector('#darkmode').checked == true){

        colorapresentacao.style.color = 'black'
        colorsobre.style.color = 'black'
        colorhab.style.color = 'black'
        colorcontato.style.color = '#9EE3C3'
}else{
    colorapresentacao.style.color = 'black'
        colorsobre.style.color = 'black'
        colorhab.style.color = 'black'
        colorcontato.style.color = '#F4827A'

}
}
}
function vhabilidade(){
    document.getElementById('apresentacao1').style.display = 'none';
    document.getElementById('sobre1').style.display = 'none';
    document.getElementById('contato1').style.display = 'none';
    document.getElementById('habilidades1').style.display = 'flex';

        if(document.getElementById('habilidades1').style.display == 'flex'){
            if(document.querySelector('#darkmode').checked == true){

        colorapresentacao.style.color = 'black'
        colorsobre.style.color = 'black'
        colorhab.style.color = '#9EE3C3'
        colorcontato.style.color = 'black'   
}else{
        colorapresentacao.style.color = 'black'
        colorsobre.style.color = 'black'
        colorhab.style.color = '#F4827A'
        colorcontato.style.color = 'black'   
}
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

const html = document.querySelector('html');
const checkbox = document.querySelector('#darkmode');

var label = document.querySelector('.labeldark');
var body = document.querySelector('body');

checkbox.addEventListener('change', function(){
    html.classList.toggle('dark')
    if(document.querySelector('#darkmode').checked == true){
        label.innerHTML = "Dark Mode On"
    }else{
        label.innerHTML = "Dark Mode Off"
    }
});


function clickdark(){
    if(colorapresentacao.style.color = '#9EE3C3'){
        if(document.querySelector('#darkmode').checked == true){
            colorapresentacao.style.color = '#F4827A'
        }
        if(document.getElementById('apresentacao1').style.display == 'none'){
            colorapresentacao.style.color = 'black'
        }
    }
    if(colorsobre.style.color = '#9EE3C3'){
        if(document.querySelector('#darkmode').checked == true){
            colorsobre.style.color = '#F4827A'
        }
        if(document.getElementById('sobre1').style.display == 'none'){
            colorsobre.style.color = 'black'
        }
    }
    if(colorcontato.style.color = '#9EE3C3'){
        if(document.querySelector('#darkmode').checked == true){
            colorcontato.style.color = '#F4827A'
        }
        if(document.getElementById('contato1').style.display == 'none'){
            colorcontato.style.color = 'black'
        }
    }
    if(colorhab.style.color = '#9EE3C3'){
        if(document.querySelector('#darkmode').checked == true){
            colorhab.style.color = '#F4827A'
        }
        if(document.getElementById('habilidades1').style.display == 'none'){
            colorhab.style.color = 'black'
        }
    }
}