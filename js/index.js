function openBoot(){
    document.getElementById('boot').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('boot').style.display = 'none';
    }, 400);
}

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

function openPassword(){
    document.getElementById('lock-holder').style.top = '-100vh';
    document.getElementById('password-field').focus();
}

function checkPassword(){
    x = document.getElementById('password-field').value;
    
    if(x.toUpperCase() == 'WINDOWS10'){
        document.getElementById('lock-password').style.top = '-100vh';
        return false;
    }
    else{
        document.getElementById('password-status').innerHTML = 'Senha incorreta.<br>Por favor, tente novamente.';
        return false;
    }
}

function openHint(x){
    switch(x){
        case 1:
            var y = "<p>Dados do usuário&nbsp;<img src='img/regedit.png'></p><p>Os dados do usuário, como nome, e-mail e senha são armazenados em um lugar chamado de 'Registro do Windows', seu banco de dados. Lá estão presentes, também, dados sobre os programas instalados no computador, sendo eles nativos desse sistema operacional ou não.</p><p>Os dados lá guardados são utilizados de diferentes formas, como para verificação e atualização da versão dos programas instalados ou para o login do usuário no computador. A propósito, use 'Windows10' como senha.</p>";
        break;
        case 2:
            var y = "<p>Internet&nbsp;<img src='img/internet-globe.png'></p><p>A internet nada mais é do que um monte de cabos ligando máquinas à servidores que, por sua vez, se ligam a outras máquinas, compartilhando informações entre si.</p><p>O google, serviço de pesquisa mundialmente conhecido, se parece mais com uma biblioteca, na verdade. Ele indexa os arquivos, como fotos e páginas, presentes nos servidores e exibe os que se relacionam com a pesquisa feita pelo usuário.</p><p>As páginas lidas pelo navegador se parecem com blocos de textos cheios de comandos, que dizem ao navegador onde, como e o que exibir. Existem vários navegadores e cada um deles tem sua própria maneira de customizar o que é exibido para melhor entendimento e agrado do usuário, sendo o mais famoso o Google Chrome.</p><p>Assim como os humanos, máquinas também possuem suas linguas e cada uma delas possui o mesmo proósito: dizer ao computador o que fazer. As linguagens, como são chamadas,usadas para se comunicar com os navegadores são, principalmente, HTML, CSS e JavaScript. Cada uma delas tem sua própria função, sendo elas: O HTML diz o que vai ser exibido; O CSS diz como e onde vai ser exibido; E o JavaScript muda o que está presente no CSS conforme a navegação do usuário pela página, dando-a vida.</p>";
        break;
        case 3:
            var y = "<p>Drivers&nbsp;<img src='img/mouse.png'></p><p>Uma das muitas funções de um sistema operacional é organizar os drivers do usuário/computador, garantindo a comunicação entre o usuário, por meio do próprio SO, e os programas nele presentes.</p><p>São os drivers, por exemplo, os responsáveis por requisitarem que a impressora imprima o que foi pedido pelo usuário, ou por fazer com que as teclas digitas no teclado sejam interpretadas corretamente pelo Sistema Operacional.</p><p>Imprevistos acontecem e periféricos quebram. Quando um equipamento externo, utilizado pelo usuário, deixa de funcionar corretamente, são dadas opções alternativas ao utilizador, pelo Sistema Operacional, para que a interação ainda seja possível. O teclado virtual é uma função de acessibilidade presente no Windows, desde a versão XP e foi introduzido com o propósito de substituir o teclado físico, caso deixe de funcionar.</p>";
        case 4:
            var y = "<p>Instruções&nbsp;<img src='img/hint.png'></p><p>Este é um projeto criado com o intuito de ensinar, parcialmente, o propósito de um Sistema Operacional e como este funciona para um usuário leigo, ou com pouco conhecimento acerca de tecnologia. Há botões de ajuda espalhados pela página, um ponto de interrogação. Estes botões contém informações sobre os programas e sobre as funções do site.</p><p>Não hesite em pedir informação!</p>";
        break;
        case 5:
            var y = "<p>Sistemas de arquivos&nbsp;<img src='img/folder.png'></p><p>Tanto o armazenamento quanto a organização dos arquivos pessoais do usuário se dão, também, pelo Sistema Operacional que, por conta do Sistema de Arquivo, consegue gravar os arquivos em um HD(Hard Drive) e locálizá-los, posteriormente.</p><p>Cada sistema operacional lida com um sistema de arquivos diferente e cada sistema de arquivos possui as suas peculiaridades, como limitações, qualidade, velocidade, gerenciamento de espaço, entre outras características. É o sistema de arquivos que define como os bytes que compõem um arquivo serão armazenados no disco e de que forma o sistema operacional terá acesso aos dados.</p><p>No Windows, é usado o sistema NTFS por diversos motivos, sendo um deles a sua capacidade de recuperação: em caso de falhas, como o desligamento repentino do computador, o NTFS é capaz de reverter os dados à condição anterior ao incidente. Isso é possível, em parte, porque, durante o processo de boot, o sistema operacional consulta um arquivo de log que registra todas as operações efetuadas e entra em ação ao identificar nele os pontos problemáticos.</p>";
        break;
    }

    document.getElementById('hint-modal-content').innerHTML = y + "<input type='button' value='Entendi' onclick='closeHint()'><div style='height: 4vh;'></div>";

    document.getElementById('hint-modal-holder').style.display = 'block';
    setTimeout(() => {
        document.getElementById('hint-modal').style.opacity = '1';
    }, 10);
}

function closeHint(){
    document.getElementById('hint-modal').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('hint-modal-holder').style.display = 'none';
        document.getElementById('hint-modal-content').innerHTML = '';
    }, 400);
}

function openProgram(x){
    switch(x){
        case 1:
            var v = 'Google Chrome';
            var w = 'img/chrome.png';
            var y = "<img src='img/google.png' id='google-logo'><input type='text' id='google-search' value='Guaxinins lindos' onclick='this.blur()' onfocus='this.blur()'><div class='result-holder'><img src='https://i.pinimg.com/originals/86/f6/8e/86f68eea9858f4e6eed3a7fa8c7a4854.jpg' class='google-result'></div><div class='result-holder'><img src='https://previews.123rf.com/images/a41cats/a41cats1211/a41cats121100055/16385155-cute-raccoon-on-green-grass-nice-close-up-a.jpg' class='google-result'></div><div class='result-holder'><img src='https://i.ytimg.com/vi/IRdivT8pcl4/maxresdefault.jpg' class='google-result'></div>";
            var z = "openHint(2)";
        break;
        case 2:
            var v = 'Explorador de arquivos';
            var w = 'img/explorer.png';
            var y = "<div id='explorer-address'><p>>>Exibindo todos os arquivos</p></div><div class='file-holder'><div class='explorer-file' onclick='openFolder(1)'><img src='img/folder.png'><p>Documentos</p></div></div><div class='file-holder'><div class='explorer-file' onclick='openFolder(2)'><img src='img/folder.png'><p>Download</p></div></div><div class='file-holder'><div class='explorer-file' onclick='openFolder(3)'><img src='img/folder.png'><p>Fotos</p></div></div><div class='file-holder'><div class='explorer-file' onclick='openFolder(4)'><img src='img/folder.png'><p>Músicas</p></div></div><div class='file-holder'><div class='explorer-file' onclick='openFolder(5)'><img src='img/folder.png'><p>Vídeos</p></div></div>";
            var z = "openHint(5)";
        break;
    }

    document.getElementById('open-program').style.opacity = '1';
    document.getElementById('open-program-img').setAttribute('src', w);
    document.getElementById('program-content').innerHTML = y;
    document.getElementById('program-hint').setAttribute('onclick', z);
    document.getElementById('program-name').innerHTML = "<img id='program-icon' src='" + w + "' class='program-icon'>&nbsp;" + v;
    document.getElementById('program-holder').style.display = 'block';
    setTimeout(() => {
        document.getElementById('program').style.opacity = '1';
    }, 10);
}

function closeProgram(){
    document.getElementById('program').style.opacity = '0';
    document.getElementById('open-program').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('program-holder').style.display = 'none';
        document.getElementById('open-program-img').setAttribute('src', '');
    }, 400);
    document.getElementById('program-content').innerHTML = '';
}

function openKeyboard(){
    document.getElementById('keyboard-modal-holder').style.display = 'block';
    setTimeout(() => {
        document.getElementById('keyboard-modal').style.opacity = '1';
    }, 10);
}

function closeKeyboard(){
    document.getElementById('keyboard-modal').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('keyboard-modal-holder').style.display = 'none';
    }, 400);
}

function addKey(x){
    aKey = x.innerHTML;
    var bKey = '';
    for(var i = 1; i <= aKey.length; i++){
        if(aKey.charAt(i) != ' '){
            bKey += aKey.charAt(i);
        }
    }
    document.getElementById('keyboard-password').value += bKey;
    document.getElementById('password-field').value += bKey;
}

function removeKey(){
    x = document.getElementById('keyboard-password').value;
    y = '';
    
    if(x.length != 0){
        for(var i = 0; i < x.length - 1; i++){
            y += x.charAt(i);
        }

        document.getElementById('keyboard-password').value = y;
        document.getElementById('password-field').value = y;
    }
}

function lockScreen(){
    closeMenu();
    document.getElementById('password-status').innerHTML = '';
    document.getElementById('password-field').value = '';
    document.getElementById('lock-password').style.top = '0vh';
}

function notificationOff(x){
    x.setAttribute('src', 'img/bell.png');
}

function openFolder(x){
    switch(x){
        case 1:
            var y = "<div id='explorer-address'><img src='img/arrow-go.png' id='explorer-back' onclick='openProgram(2)'><p>>>Exibindo todos os documentos</p></div><div class='file-holder'><a href='https://alisudeo.github.io/portfolio' target='_blank'><div class='explorer-file'><img src='img/pdf.png'><p>Curriculum Vitae.pdf</p></div></a></div><div class='file-holder'><a href='https://github.com/alisudeo/windows10' target='_blank'><div class='explorer-file'><img src='img/github.png'><p>Sobre o projeto</p></div></a></div>";
        break;
        case 2:
            var y = "<div id='explorer-address'><img src='img/arrow-go.png' id='explorer-back' onclick='openProgram(2)'><p>>>Exibindo todos os downloads</p></div><div class='file-holder'><div class='explorer-file'><img src='img/bat.png'><p>Hack moedas CSGO.bat</p></div></div><div class='file-holder'><a href='https://minecraft.net' target='_blank'><div class='explorer-file'><img src='img/minecraft.png'><p>Minecraft.exe</p></div></a></div>";
        break;
        case 3:
            var y = "<div id='explorer-address'><img src='img/arrow-go.png' id='explorer-back' onclick='openProgram(2)'><p>>>Exibindo todos as imagens</p></div><div class='file-holder'><div class='explorer-file'><img src='img/user.jpg'><p>Eu.jpg</p></div></div><div class='file-holder'><div class='explorer-file'><img src='img/link.jpg'><p>Desenho.png</p></div></div>";
        break;
        case 4:
            var y = "<div id='explorer-address'><img src='img/arrow-go.png' id='explorer-back' onclick='openProgram(2)'><p>>>Exibindo todos as músicas</p></div><div class='file-holder'><a href='https://youtu.be/QYh6mYIJG2Y' target='_blank'><div class='explorer-file'><img src='img/thankunext.jpg'><p>Ariana Grande - 7 rings.mp3</p></div></a></div><div class='file-holder'><a href='https://youtu.be/pkNbttZgi90' target='_blank'><div class='explorer-file'><img src='img/trip.png'><p>Mercyur - Trip.mp3</p></div></a></div>";
        break;
        case 5:
            var y = "<div id='explorer-address'><img src='img/arrow-go.png' id='explorer-back' onclick='openProgram(2)'><p>>>Exibindo todos os vídeos</p></div><div class='file-holder'><a href='https://youtu.be/JRYLIZE7kas' target='_blank'><div class='explorer-file'><img src='img/video.png'><p>Direitos Humanos.mp4</p></div></a></div>";
        break;
    }
    document.getElementById('program-content').innerHTML = y;
}

window.onload = function(){
    horaCerta(); 
    setTimeout(() => {
        openBoot(); 
        setTimeout(() => {
            document.getElementById('lock-hour').style.width = '38vh';
            document.getElementById('lock-date').style.width = '38vh';
            document.getElementById('notification-holder').style.opacity = '1';
        }, 500);
    }, 8000);
};