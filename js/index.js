function horaCerta(){
    setInterval(() => {
        var date = new Date();
        document.getElementById('hour').innerHTML = date.getHours() + ':' + date.getMinutes();
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
    document.getElementById('windows-menu').style.height = '94.5vh';
    document.getElementById('windows-menu').style.opacity = '1';
    document.getElementById('windows-icon').setAttribute('onclick', 'closeMenu()');
    document.getElementById('windows-icon').setAttribute('onmouseout', '');
}

function closeMenu(){
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