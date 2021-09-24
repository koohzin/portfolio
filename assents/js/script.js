function vinicio(){
    document.getElementById('apresentacao1').style.display = 'flex';
    document.getElementById('sobre1').style.display = 'none';
    document.getElementById('contato1').style.display = 'none';
    document.getElementById('habilidades1').style.display = 'none';
}
function vsobre(){
    document.getElementById('apresentacao1').style.display = 'none';
    document.getElementById('sobre1').style.display = 'flex';
    document.getElementById('contato1').style.display = 'none';
    document.getElementById('habilidades1').style.display = 'none';
}
function vcontato(){
    document.getElementById('apresentacao1').style.display = 'none';
    document.getElementById('sobre1').style.display = 'none';
    document.getElementById('contato1').style.display = 'flex';
    document.getElementById('habilidades1').style.display = 'none';
}
function vhabilidade(){
    document.getElementById('apresentacao1').style.display = 'none';
    document.getElementById('sobre1').style.display = 'none';
    document.getElementById('contato1').style.display = 'none';
    document.getElementById('habilidades1').style.display = 'flex';
}