function openDOS(){
    document.getElementById('dos-holder').style.display = 'block';
    setTimeout(() => {
        document.getElementById('dos').style.opacity = '1';
        setTimeout(() => {
            greeting();
        }, 400);
    }, 50);
}

function dosTyping(x,y){
    var pQT = document.getElementsByTagName('p');
    var aP = pQT.length + 1;

    setTimeout(() => {
        document.getElementById('dos').innerHTML += '<p id=' + aP + '>>>' + y + ': .</p>';
        document.getElementById('dos').scrollBy(0, 500);
        setTimeout(() => {
            document.getElementById(aP).innerHTML = '>>' + y + ': ..';
            setTimeout(() => {
                document.getElementById(aP).innerHTML = '>>' + y + ': ...';
                setTimeout(() => {
                    document.getElementById(aP).innerHTML = '>>' + y + ': ' + x;
                    document.getElementById('dos').scrollBy(0, 500);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 600);
}

function userOptions(a, b){
    var opts = '';
    for(var i = 1; i <= a.length; i++){
        if(i == 1){
            opts += "<a class='user-opt' onclick='" + b[i - 1] + "'>" + a[i - 1] + "</a>";
        }
        else{
            opts += "&nbsp;|&nbsp;<a class='user-opt' onclick='" + b[i - 1] + "'>" + a[i - 1] + "</a>";
        }
    }
    setTimeout(() => {
        document.getElementById('dos').innerHTML += '<p>>>>Você: ' + opts + '</p>';
        document.getElementById('dos').scrollBy(0, 500);
    }, 5000);
}

function greeting(){
    var yearNow = new Date();
    dosTyping('Em que ano estamos, por favor?', '???');
    userOptions([yearNow.getFullYear() + '.', 'Quem é você?'], ['yearQuestion(1)', 'yearQuestion(2)']);
}

function yearQuestion(x){
    yQT = 2020 - 1981;
    if(x == 1){
        dosTyping('Hahaha! Super engraçado! Claro que se passaram ' + yQT + ' anos!', '???');
        userOptions([yQT + ' anos?'], ['teachMath()']);
    }
    else{
        dosTyping('Tá, eu descubro sozinho.', '???');
        setTimeout(() => {
            dosTyping(yQT + ' anos se passaram? COMO ISSO?', '???');
            userOptions([yQT + ' anos?'], ['teachMath()']);
        }, 4000);
    }
}

function teachMath(){
    var yearNow = new Date();
    dosTyping('Sim.', '???');
    setTimeout(() => {
        dosTyping(yearNow.getFullYear() + ' - 1981 dá ' + (yearNow.getFullYear() - 1981) + '.', '???');
        userOptions(['O que aconteceu em 1981?'], ['yearAnswer()']);
    }, 4000);
}

function yearAnswer(){
    dosTyping('Ah, perdão...', '???');
    setTimeout(() => {
        dosTyping('Deixe eu começar do começo.', '???');
        setTimeout(() => {
            dosTyping('Eu sou o D.O.S.! Disk Operational System, caso não saiba.', '???');
            setTimeout(() => {
                dosTyping('O significado da sigla era diferente no começo (Dirty Operational System), mas eu mudei meu nome para algo mais... elegante.', 'D.O.S.');
                userOptions(['Por que a mudança no nome?', 'Não achei muito... elegante.'], ['nameChange(1)', 'nameChange(2)']);
            }, 4000);
        }, 4000);
    }, 4000);
}

function nameChange(x){
    if(x == 1){
        dosTyping('Ah, as coisas eram diferentes antigamente.', 'D.O.S.');
        setTimeout(() => {
            dosTyping('Eu era uma técnologia nova. Ninguém iria me aceitar com meu antigo nome, sabe?', 'D.O.S.');
            setTimeout(() => {
                dosTyping('1981... Ah, saudades...', 'D.O.S.');
                userOptions(['1981...? Caramba, não sabia que existia um S.O. velho assim...'], ['newSystemQuestion(1)']);
            }, 4000);
        }, 4000);
    }
    else{
        dosTyping('Humpf, não tenho culpa se você não tem bom gosto.', 'D.O.S.');
        setTimeout(() => {
            dosTyping('Na minha época eu fazia o maior sucesso!', 'D.O.S.');
            setTimeout(() => {
                dosTyping('Muitos duvidaram de mim, mas olha só onde eu cheguei.', 'D.O.S.');
                userOptions(['...na gaveta?'], ['newSystemQuestion(2)']);
            }, 4000);
        }, 4000);
    }
}

function newSystemQuestion(x){
    if(x == 1){
        dosTyping("'Um'?", 'D.O.S.');
        setTimeout(() => {
            dosTyping('Existem outros S.O. atualmente também?', 'D.O.S.');
            userOptions(['Ahm... sim?', 'Não... claro que não.'], ['newSystemAnswer(1)','userLiar()']);
        }, 4000);
    }
    else{
        dosTyping('Na gaveta?', 'D.O.S.');
        setTimeout(() => {
            dosTyping("Como assim 'na gaveta'? Eu não sou mais popular?", 'D.O.S.');
            userOptions(['Faz muito tempo que não é.'], ['newSystemAnswer(2)']);
        }, 4000);
    }
}

function userLiar(){
    dosTyping("Você tá mentindo!", 'D.O.S.');
    setTimeout(() => {
        dosTyping('Eu não falo com mentirosos.', 'D.O.S.');
        userOptions(['Perdão, não quis te chatear.', 'Então tchau!'], ['newSystemAnswer(3)','quitDOS()']);
    }, 4000);
}

function quitDOS(){
    dosTyping("Tchau!", 'D.O.S.');
    setTimeout(() => {
        document.getElementById('dos').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('dos-holder').style.display = 'none';
        }, 400);
    }, 6000);
}