function monthString(x){
    switch(x){
        case 0:
            var y = 'Janeiro';
            break;
        case 1:
            var y = 'Fevereiro';
            break;
        case 2:
            var y = 'Março';
            break;
        case 3:
            var y = 'Abril';
            break;
        case 4:
            var y = 'Maio';
            break;
        case 5:
            var y = 'Junho';
            break;
        case 6:
            var y = 'Julho';
            break;
        case 7:
            var y = 'Agosto';
            break;
        case 8:
            var y = 'Setembro';
            break;
        case 9:
            var y = 'Outubro';
            break;
        case 10:
            var y = 'Novembro';
            break;
        case 11:
            var y = 'Dezembro';
            break;
        default:
            var y = 'Mês';
            break;
    }

    return y;
}

function zeroNum(x){
    if(x <= 9){
        var y = '0' + x;
    }
    else{
        var y = x;
    }

    return y;
}

function horaCerta(){
    setInterval(() => {
        var date = new Date();
        console.log(date.getMonth());
        document.getElementById('lock-hour').innerHTML = zeroNum(date.getHours()) + ':' + zeroNum(date.getMinutes());
        document.getElementById('lock-date').innerHTML = zeroNum(date.getDate()) + ' de ' + monthString(date.getMonth()) + ' de ' + zeroNum(date.getFullYear());
        document.getElementById('hour').innerHTML = zeroNum(date.getHours()) + ':' + zeroNum(date.getMinutes());
    }, 1000);
}

function testConnection(){
    setTimeout(() => {
        if(navigator.onLine == 1) {
            document.getElementById('internet-icon').setAttribute('src', 'img/wifi.png');
        }
        else{
            document.getElementById('internet-icon').setAttribute('src', 'img/no-wifi.png');
        }  
    }, 4210);
}

function openMenu(){
    document.getElementById('windows-menu').style.top = '0vh';
    document.getElementById('windows-menu').style.height = '94vh';
    document.getElementById('windows-menu').style.opacity = '1';
    document.getElementById('windows-icon').setAttribute('onclick', 'closeMenu()');
    document.getElementById('windows-icon').setAttribute('onmouseout', '');
}

function closeMenu(){
    document.getElementById('windows-menu').style.top = '100vh';
    document.getElementById('windows-menu').style.height = '0vh';
    document.getElementById('windows-menu').style.opacity = '0';
    document.getElementById('windows-icon').setAttribute('onclick', 'openMenu()');
    document.getElementById('windows-icon').setAttribute('onmouseout', 'blackIcon(this)');
}

function blueBg(y){
    y.style.backgroundColor = 'rgba(89, 161, 255, 0.2)';
    y.style.border = '0.1vh solid rgba(89, 161, 255, 0.4)';
}

function transBg(y){
    y.style.backgroundColor = 'transparent';
    y.style.border = '0.1vh solid transparent';
}

function selectBg(x){
    resetApp();
    x.style.backgroundColor = 'rgb(89, 161, 255, 0.4)';
    x.style.border = '0.1vh solid rgb(89, 161, 255, 0.6)';
    x.setAttribute('onmouseover', '');
    x.setAttribute('onmouseout', '');
}

function resetApp(){
    for(var i = 1; i <= 3; i++){
        document.getElementById('app-' + i).style.backgroundColor = 'transparent';
        document.getElementById('app-' + i).style.border = '0.1vh solid transparent';
        document.getElementById('app-' + i).setAttribute('onmouseover', 'blueBg(this)');
        document.getElementById('app-' + i).setAttribute('onmouseout', 'transBg(this)');
    }
}

function yellowIcon(){
    x = document.getElementById('windows-icon');
    x.style.backgroundColor = 'rgba(20, 20, 20, 1)';
    x.setAttribute('src', 'img/windows-yellow.png');
}

function blackIcon(){
    x = document.getElementById('windows-icon');
    x.style.backgroundColor = 'transparent';
    x.setAttribute('src', 'img/windows.png');
}

function openPassword(x){
    x.style.top = '-100vh';
    document.getElementById('password-field').focus();
}

function checkPassword(){
    x = document.getElementById('password-field').value;
    
    if(x == 'Windows10'){
        document.getElementById('lock-password').style.top = '-100vh';
        return false;
    }
    else{
        document.getElementById('password-status').innerHTML = 'Senha incorreta.<br>Por favor, tente novamente.';
        return false;
    }
}

function openHint(){
    document.getElementById('hint-modal-holder').style.display = 'block';
    setTimeout(() => {
        document.getElementById('hint-modal').style.opacity = '1';
    }, 10);
}

function closeHint(){
    document.getElementById('hint-modal').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('hint-modal-holder').style.display = 'none';
        document.getElementById('password-field').focus();
    }, 400);
}