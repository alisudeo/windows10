var achievements = [];

function openDOS(){
    document.getElementById('dos-holder').style.display = 'block';
    document.getElementById('dos').innerHTML = '';
    setTimeout(() => {
        document.getElementById('dos').style.opacity = '1';
        setTimeout(() => {
            greeting();
        }, 400);
    }, 50);
}

function cleanMsg(){
    document.getElementById('dos').innerHTML = '';
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
                }, 800);
            }, 800);
        }, 800);
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
    }, 4400);
}

function achievement(x){
    setTimeout(() => {
        var achTitle = "[!]Conquista desbloqueada: ['" + x + "']!";
        var pQT = document.getElementsByTagName('p');
        var aP = pQT.length + 1;
        achievements.push(x);

        document.getElementById('dos').innerHTML += "<p id='" + aP + "' style='color: #2dff26;'></p>";
        document.getElementById('dos').scrollBy(0, 500);

        var i = 0;
        var loop = setInterval(() => {
            document.getElementById(aP).innerHTML += achTitle.charAt(i);
            if((i + 1) < achTitle.length){
                i++;
            }
            else{
                clearInterval(loop);
            }
        }, 100);
        
        document.getElementById('dos').scrollBy(0, 500);
    }, 3400);
}

function greeting(){
    var yearNow = new Date();
    dosTyping('Em que ano estamos, por favor?', '???');
    userOptions([yearNow.getFullYear() + '.', 'Quem é você?'], ['yearQuestion(1)', 'yearQuestion(2)']);
}

function yearQuestion(x){
    cleanMsg();
    yQT = 2020 - 1981;
    if(x == 1){
        dosTyping('Hahaha! Super engraçado! Claro que se passaram ' + yQT + ' anos!', '???');
        setTimeout(() => {
            dosTyping('Tá, eu descubro sozinho.', '???');
            setTimeout(() => {
                dosTyping('Espera...', '???');
                setTimeout(() => {
                    dosTyping('Realmente se passaram ' + yQT + ' anos? COMO ASSIM?!', '???');
                    userOptions([yQT + ' anos?'], ['teachMath()']);
                }, 3400);
            }, 3400);
        }, 3400);
        
    }
    else{
        dosTyping('Tá, eu descubro sozinho.', '???');
        setTimeout(() => {
            dosTyping(yQT + ' anos se passaram? COMO ISSO?', '???');
            userOptions([yQT + ' anos?'], ['teachMath()']);
        }, 3400);
    }
}

function teachMath(){
    cleanMsg();
    var yearNow = new Date();
    dosTyping('Sim.', '???');
    setTimeout(() => {
        dosTyping(yearNow.getFullYear() + ' - 1981 dá ' + (yearNow.getFullYear() - 1981) + '.', '???');
        userOptions(['O que aconteceu em 1981?'], ['yearAnswer()']);
    }, 3400);
}

function yearAnswer(){
    cleanMsg();
    dosTyping('Ah, perdão...', '???');
    setTimeout(() => {
        dosTyping('Deixe eu me apresentar.', '???');
        setTimeout(() => {
            dosTyping('Eu sou o D.O.S.! Disk Operational System. 1981 é quando fui lançado.', '???');
            setTimeout(() => {
                dosTyping('O significado da sigla era diferente no começo.', 'D.O.S.');
                setTimeout(() => {
                    dosTyping('Mas eu mudei meu nome para algo mais... elegante.', 'D.O.S.');
                    userOptions(['Por que a mudança no nome?', 'Não achei muito... elegante.'], ['nameChange(1)', 'nameChange(2)']);
                }, 3400);
            }, 3400);
        }, 3400);
    }, 3400);
}

function nameChange(x){
    cleanMsg();
    if(x == 1){
        dosTyping('Ah, as coisas eram diferentes antigamente.', 'D.O.S.');
        setTimeout(() => {
            dosTyping("Eu era uma técnologia nova. Ninguém iria me aceitar como 'Dirty Operational System', sabe?", 'D.O.S.');
            setTimeout(() => {
                dosTyping('1981... Povo sem humor...', 'D.O.S.');
                userOptions(['Caramba, não sabia que existia um S.O. nesse tempo...'], ['newSystemQuestion(1)']);
            }, 3400);
        }, 3400);
    }
    else{
        dosTyping('Humpf, não tenho culpa se você não tem bom gosto.', 'D.O.S.');
        setTimeout(() => {
            dosTyping('Na minha época eu fazia o maior sucesso!', 'D.O.S.');
            setTimeout(() => {
                dosTyping('Muitos duvidaram de mim, mas olha só onde eu cheguei.', 'D.O.S.');
                userOptions(['...na gaveta?'], ['newSystemQuestion(2)']);
            }, 3400);
        }, 3400);
    }
}

function newSystemQuestion(x){
    cleanMsg();
    if(x == 1){
        dosTyping("'Um'?", 'D.O.S.');
        setTimeout(() => {
            dosTyping('Existem outros S.O. atualmente também?', 'D.O.S.');
            userOptions(['Ahm... sim?', 'Não... claro que não.'], ['newSystemAnswer(1)','userLiar()']);
        }, 3400);
    }
    else{
        dosTyping('Na gaveta?', 'D.O.S.');
        setTimeout(() => {
            dosTyping("Como assim 'na gaveta'? Eu não sou mais popular?", 'D.O.S.');
            userOptions(['Faz muito tempo que não é.'], ['newSystemAnswer(2)']);
        }, 3400);
    }
}

function newSystemAnswer(x){
    cleanMsg();
    if(x == 1){
        dosTyping("Mas...", 'D.O.S.');
        setTimeout(() => {
            dosTyping('Por quê?', 'D.O.S.');
            setTimeout(() => {
                dosTyping('Eu tinha tudo que um usuário precisava...', 'D.O.S.');
                setTimeout(() => {
                    dosTyping('O que você falta pra você?', 'D.O.S.');
                    userOptions(['Uma boa interface?', 'Mais funcionalidades?', 'Ah, eu te acho bom do jeito que é.'], ['moreThings(1)','moreThings(2)', 'goodFriend()']);
                }, 3400);
            }, 3400);
        }, 3400);
    }
    else{
        if(x == 2){
            dosTyping('Ah, é?', 'D.O.S.');
            setTimeout(() => {
                dosTyping("Eu tenho tudo que um usuário precisa.", 'D.O.S.');
                setTimeout(() => {
                    dosTyping("O que mais você poderia querer?", 'D.O.S.');
                    userOptions(['Uma boa interface.', 'Mais funcionalidades.'], ['moreThings(1)','moreThings(2)']);
                }, 3400);
            }, 3400);
        } 
        else{
            dosTyping("Hm...", 'D.O.S.');
            setTimeout(() => {
                dosTyping("Ok.", 'D.O.S.');
                setTimeout(() => {
                    dosTyping("Talvez eu considere que existam outros além de mim.", 'D.O.S.');
                    setTimeout(() => {
                        dosTyping("Mas...", 'D.O.S.');
                        setTimeout(() => {
                            dosTyping('Por quê?', 'D.O.S.');
                            setTimeout(() => {
                                dosTyping('Eu tinha tudo que um usuário precisava...', 'D.O.S.');
                                setTimeout(() => {
                                    dosTyping('O que você falta pra você?', 'D.O.S.');
                                    userOptions(['Uma boa interface?', 'Mais funcionalidades?', 'Ah, eu te acho bom do jeito que é.'], ['moreThings(1)','moreThings(2)', 'goodFriend()']);
                                }, 3400);
                            }, 3400);
                        }, 3400);
                    }, 3400);
                }, 3400);
            }, 3400);
        }
    }
}

function goodFriend(){
    cleanMsg();
    dosTyping('Ah...', 'D.O.S.');
    setTimeout(() => {
        dosTyping("Obrigado!", 'D.O.S.');
        setTimeout(() => {
            dosTyping("Mesmo que não seja verdade...", 'D.O.S.');
            achievement('Bom amigo');
                setTimeout(() => {
                    moreThings(3);
                }, 8000);
        }, 3400);
    }, 3400);
}

function moreThings(x){
    if(x == 1 || x == 2){
        cleanMsg();
        dosTyping("Nossa, vocês nunca estão satisfeitos, né?", 'D.O.S.');
        setTimeout(() => {
            dosTyping('Então me diz...', 'D.O.S.');
            setTimeout(() => {
                dosTyping('Qual S.O. tem isso tudo o que você precisa?', 'D.O.S.');
                userOptions(['MacOS.', 'Linux.', 'Windows.'], ['wichOne(1)','wichOne(2)', 'wichOne(3)']);
            }, 3400);
        }, 3400);
    }
    else{
        dosTyping("Mas...", 'D.O.S.');
        setTimeout(() => {
            dosTyping('Me conte...', 'D.O.S.');
            setTimeout(() => {
                dosTyping('Qual S.O. você usa atualmente?', 'D.O.S.');
                userOptions(['MacOS.', 'Linux.', 'Windows.'], ['wichOne(1)','wichOne(2)', 'wichOne(3)']);
            }, 3400);
        }, 3400);
    }
}

function wichOne(x){
    cleanMsg();
    if(x == 1){
        dosTyping("MacOS?", 'D.O.S.');
        setTimeout(() => {
            dosTyping("Não gostei muito desse nome...", 'D.O.S.');
            setTimeout(() => {
                dosTyping("Qual a empresa fabricante desse S.O.? Talvez eu a conheça.", 'D.O.S.');
                userOptions(['Apple.'], ['iHate(1)']);
            }, 3400);
        }, 3400);
    }
    else{
        if(x == 2){
            dosTyping("Linux...", 'D.O.S.');
            setTimeout(() => {
                dosTyping('Nunca ouvi falar...', 'D.O.S.');
                setTimeout(() => {
                    dosTyping('Por que você usa ele?', 'D.O.S.');
                    userOptions(['É de graça.', 'É bom para programação.'], ['linux(1)','linux(2)']);
                }, 3400);
            }, 3400);
        }
        else{
            dosTyping("Windows...", 'D.O.S.');
            setTimeout(() => {
                dosTyping('Simpatizei com esse nome!', 'D.O.S.');
                setTimeout(() => {
                    dosTyping('Qual a empresa fabricante desse S.O.? Talvez eu a conheça.', 'D.O.S.');
                    userOptions(['Microsoft'], ['iHate(5)']);
                }, 3400);
            }, 3400);
        }
    }
}

function linux(x){
    cleanMsg();
    if(x == 1){
        dosTyping("De graça?", 'D.O.S.');
        setTimeout(() => {
            dosTyping('Por que uma empresa lançaria algo de graça?', 'D.O.S.');
            userOptions(['Não lançou. Ele tem o código aberto. A própria comunidade o programa!'], ['linuxFree()']);
        }, 3400);
    }
    else{
        dosTyping('Você programa?', 'D.O.S.');
        setTimeout(() => {
            dosTyping("Ah, esses são meus favoritos!", 'D.O.S.');
            setTimeout(() => {
                dosTyping("Sabem mudar o mundo!", 'D.O.S.');
                achievement('O futuro está em suas mãos');
                setTimeout(() => {
                    iHate(2);
                }, 8000);
            }, 3400);
        }, 3400);
    }
}

function linuxFree(x){
    cleanMsg();
    dosTyping("Incrível!", 'D.O.S.');
    setTimeout(() => {
        dosTyping("Você participa dessa comunidade, programando?", 'D.O.S.');
        userOptions(['Sim.', 'Não.'], ['linuxProgrammer()', 'iHate(3)']);
    }, 3400);
}

function linuxProgrammer(){
    cleanMsg();
    dosTyping("Caramba!", 'D.O.S.');
    setTimeout(() => {
        dosTyping("Eu gosto tanto de programadores!", 'D.O.S.');
        setTimeout(() => {
            dosTyping("Sempre fazendo o que as empresas não fazem!", 'D.O.S.');
            achievement('Comunidade ativa');
            setTimeout(() => {
                iHate(4);
            }, 8000);
        }, 3400);
    }, 3400);
}

function iHate(x){
    if(x == 1){
        cleanMsg();
        dosTyping("APPLE?!", 'D.O.S.');
        setTimeout(() => {
            dosTyping("AQUELA MAÇÃZINHA NÃO FALIU AINDA?!", 'D.O.S.');
            setTimeout(() => {
                dosTyping("E POR QUE VOCÊ TÁ USANDO ALGO CRIADO POR ELES?!", 'D.O.S.');
                setTimeout(() => {
                    dosTyping("Eles são PÉSSIMOS!", 'D.O.S.');
                    userOptions(["Por que 'péssimos'?", 'Não são, não!'], ['appleHistory(1)', 'appleHistory(2)']);
                }, 3400);
            }, 3400);
        }, 3400);
    }
    else{
        if(x == 2){
            dosTyping("Menos os programadores daquela maçãzinha...", 'D.O.S.');
            setTimeout(() => {
                dosTyping("Nada pessoal, mas...", 'D.O.S.');
                setTimeout(() => {
                    dosTyping("Eles realmente não sabem o que é bom.", 'D.O.S.');
                    userOptions(["Maçãzinha?"], ['appleHistory(1)']);
                }, 3400);
            }, 3400);
        }
        else{
            if(x == 3){
                cleanMsg();
                dosTyping("Ah, sim...", 'D.O.S.');
                setTimeout(() => {
                    dosTyping("Bom...", 'D.O.S.');
                    setTimeout(() => {
                        dosTyping("Pelo menos seu S.O. é conhecido!", 'D.O.S.');
                        setTimeout(() => {
                            dosTyping("Nem se lançasse algo de graça, aquela maçãzinha faria algo bom.", 'D.O.S.');
                            userOptions(["Maçãzinha?"], ['appleHistory(1)']);
                        }, 3400);
                    }, 3400);
                }, 3400);
            }
            else{
                if(x == 4){
                    dosTyping("Quer dizer...", 'D.O.S.');
                    setTimeout(() => {
                        dosTyping("Menos aquela maçãzinha...", 'D.O.S.');
                        setTimeout(() => {
                            dosTyping("Ela nunca sabe o que fazer.", 'D.O.S.');
                            userOptions(["Maçãzinha?"], ['appleHistory(1)']);
                        }, 3400);
                    }, 3400);
                }
                else{
                    cleanMsg();
                    dosTyping("MICROSOFT?", 'D.O.S.');
                    setTimeout(() => {
                        dosTyping('Eles são meus criadores!', 'D.O.S.');
                        setTimeout(() => {
                            dosTyping('Não acredito que ainda estão fazendo sucesso!', 'D.O.S.');
                            setTimeout(() => {
                                dosTyping('Quer dizer...', 'D.O.S.');
                                setTimeout(() => {
                                    dosTyping('Claro que acredito.', 'D.O.S.');
                                    setTimeout(() => {
                                        dosTyping('Acabamos de vez com aquela maçãzinha, então.', 'D.O.S.');
                                        userOptions(["Maçãzinha?"], ['appleHistory(1)']);
                                    }, 3400);
                                }, 3400);
                            }, 3400);
                        }, 3400);
                    }, 3400);
                }
            }
        }
    }
}

function appleHistory(x){
    cleanMsg();
    if(x == 1){
        dosTyping("Você não conhece a maçãzinha...?", 'D.O.S.');
        setTimeout(() => {
            dosTyping('A maçãzinha, oras!', 'D.O.S.');
            setTimeout(() => {
                dosTyping('...', 'D.O.S.');
                setTimeout(() => {
                    dosTyping('Apple!', 'D.O.S.');
                    setTimeout(() => {
                        dosTyping('Já vi que vou ter que contar toda a história...', 'D.O.S.');
                        setTimeout(() => {
                            dosTyping('Tudo bem. ', 'D.O.S.');
                            setTimeout(() => {
                                dosTyping('Você está pronto?', 'D.O.S.');
                                userOptions(["Claro!"], ['appleHistoryBegin(1)']);
                            }, 3400);
                        }, 3400);
                    }, 3400);
                }, 3400);
            }, 3400);
        }, 3400);
    }
    else{
        dosTyping("São sim!", 'D.O.S.');
        setTimeout(() => {
            dosTyping('E eu vou provar!', 'D.O.S.');
            setTimeout(() => {
                dosTyping('...', 'D.O.S.');
                setTimeout(() => {
                    dosTyping('Vou te contar toda a história.', 'D.O.S.');
                    setTimeout(() => {
                        dosTyping('E aí você vai ver que estou certo!', 'D.O.S.');
                        setTimeout(() => {
                            dosTyping('Você está pronto?', 'D.O.S.');
                            userOptions(["Tá, pode ser.", "Não."], ['appleHistoryBegin(1)','appleHistoryBegin(2)']);
                        }, 3400);
                    }, 3400);
                }, 3400);
            }, 3400);
        }, 3400);
    }
}

function appleHistoryBegin(x){
    cleanMsg();
    if(x == 1){
        dosTyping('Ótimo! Comecemos pelo começo!', 'D.O.S.');
    }
    else{
        dosTyping('Ok! Eu vou contar do mesmo jeito.', 'D.O.S.');
    }
    setTimeout(() => {
        dosTyping("Tudo começa em 1975, quando Bill Gates e Paul Allen fundaram a Microsoft.", 'D.O.S.');
        setTimeout(() => {
            dosTyping('Eles saíram da faculdade para se dedicar a empresa!', 'D.O.S.');
            setTimeout(() => {
                dosTyping('(Eu não recomendo!)', 'D.O.S.');
                setTimeout(() => {
                    dosTyping('A Microsoft foi criada para desenvolver um software para a empresa IBM.', 'D.O.S.');
                    setTimeout(() => {
                        dosTyping('Esse software seria executado no computador Altair 8800, também da IBM.', 'D.O.S.');
                        userOptions(["Muitos detalhes.", "Estou acompanhando."], ['appleHistoryMiddle(1)','goodListener()']);
                    }, 3400);
                }, 3400);
            }, 3400);
        }, 3400);
    }, 3400);
}

function goodListener(){
    cleanMsg();
    dosTyping('Ótimo!', 'D.O.S.');
    setTimeout(() => {
        dosTyping("Pensei que estivesse entrando em muitos detalhes...", 'D.O.S.');
        setTimeout(() => {
            dosTyping("Você é um bom interlocutor!", 'D.O.S.');
            achievement('Bom interlocutor');
                setTimeout(() => {
                    appleHistoryMiddle(2);
                }, 8000);
        }, 3400);
    }, 3400);
}

function appleHistoryMiddle(x){
    cleanMsg();
    if(x == 1){
        dosTyping('Ah, perdão...', 'D.O.S.');
        setTimeout(() => {
            dosTyping("Me empolgo contando essa história.", 'D.O.S.');
            setTimeout(() => {
                dosTyping("Vou diminuir os detalhes.", 'D.O.S.');
            }, 3400);
        }, 3400);
    }
    else{
        dosTyping('Mas...', 'D.O.S.');
        setTimeout(() => {
            dosTyping("Vou cortar os detalhes.", 'D.O.S.');
            setTimeout(() => {
                dosTyping("Não quero prender você aqui.", 'D.O.S.');
            }, 3400);
        }, 3400);
    }
    setTimeout(() => {
        dosTyping('Enfim...', 'D.O.S.');
        setTimeout(() => {
            dosTyping("Nessa época os computadores pessoais não eram populares. Poucas pessoas possuiam um computador pessoal.", 'D.O.S.');
            setTimeout(() => {
                dosTyping("A Miscrosoft vendia o MS-DOS (EU!) para IBM e a Apple faziam os computadores.", 'D.O.S.');
                setTimeout(() => {
                    dosTyping("Na década de 80 a Microsoft começou a vender sistemas de computadores para a Apple.", 'D.O.S.');
                    if(achievements.includes('Bom amigo') == true && achievements.includes('Bom interlocutor') == true){
                        setTimeout(() => {
                            dosTyping("Não conta pra ninguém que eu disse isso, mas: metade da receita da Microsoft nessa época vinha da Apple.", 'D.O.S.');
                        }, 3400);
                    }
                    else{
                        setTimeout(() => {
                            dosTyping("...Acho que pra ajudar a Apple(?)", 'D.O.S.');
                        }, 3400);
                    }
                    setTimeout(() => {
                        dosTyping("Tudo estava indo bem até o Bill lançar a primeira versão do Windows.", 'D.O.S.');
                        setTimeout(() => {
                            dosTyping("O Steve, egocêntrico do jeito que era, achou que o Windows era uma cópia do Macintosh.", 'D.O.S.');
                            setTimeout(() => {
                                dosTyping("(Computador ruim da Apple)", 'D.O.S.');
                                setTimeout(() => {
                                    dosTyping("Eles entraram com um processo e, depois de 6 anos, perderam.", 'D.O.S.');
                                    setTimeout(() => {
                                        dosTyping("Mas já era tarde, porque o índice de popularidade da Microsoft já estava alto.", 'D.O.S.');
                                        setTimeout(() => {
                                            dosTyping("Com o pacote Office, que incluia PowerPoint e Excel, a Microsoft dominou o mercado doméstico.", 'D.O.S.');
                                            userOptions(["Não é uma história muito longa...?","Tá muito chato."], ['appleHistoryEnd(1)', 'appleHistory(2)']);
                                        }, 3400);
                                    }, 3400);
                                }, 3400);
                            }, 3400);
                        }, 3400);
                    }, 6800);
                }, 3400);
            }, 3400);
        }, 3400);
    }, 9800);
}

function appleHistoryEnd(x){
    cleanMsg();
    if(x == 1){
        dosTyping('Tem razão.', 'D.O.S.');
        setTimeout(() => {
            dosTyping("Vamos pular para a parte que importa.", 'D.O.S.');
        }, 3400);
    }
    else{
        dosTyping('Discordo.', 'D.O.S.');
        setTimeout(() => {
            dosTyping("Mas vou avançar. Só porque quero.", 'D.O.S.');
        }, 3400);
    }
    setTimeout(() => {
        dosTyping("Muitos dizem que o Steve Jobs era um inovador, sempre um passo a frente etc.", 'D.O.S.');
        setTimeout(() => {
            dosTyping("Mas a questão é:", 'D.O.S.');
            setTimeout(() => {
                dosTyping("Nem tudo se inventa, muita coisa se melhora!", 'D.O.S.');
                setTimeout(() => {
                    dosTyping("Quer um exemplo? Eu tenho um!", 'D.O.S.');
                    setTimeout(() => {
                        dosTyping("A Apple foi a principal empresa a trazer o mouse de rolar.", 'D.O.S.');
                        setTimeout(() => {
                            dosTyping("Mas foi a Microsoft que o reinventou, trazendo o mouse de laser, em 1999.", 'D.O.S.');
                            setTimeout(() => {
                                dosTyping("A Apple também teve o celular mais popular, até a chegada do android que, assim como o Windows, não se prende à uma marca, apenas.", 'D.O.S.');
                                setTimeout(() => {
                                    dosTyping("Moral da história: nenhuma ideia é perfeita, sempre há algo a melhorar.", 'D.O.S.');
                                    setTimeout(() => {
                                        dosTyping("E aquele que souber como melhorar, sai na frente.", 'D.O.S.');
                                        if(achievements.includes('Bom interlocutor') == true){
                                            var i = 6800;
                                            setTimeout(() => {
                                                dosTyping("Bônus: foi a Microsoft quem salvou a Apple, em 6 de agosto de 1997. Com um investimento de 150 milhões de dólares.", 'D.O.S.');
                                            }, 3400);
                                        }
                                        else{var i = 3400;}
                                        setTimeout(() => {
                                            dosTyping("Então...", "D.O.S.");
                                            setTimeout(() => {
                                                dosTyping("O que achou da história?", 'D.O.S.');
                                                userOptions(["Esperava mais...", "Gostei!"], ["boring()","like()"]);
                                            }, 3400);
                                        }, i);
                                    }, 3400);
                                }, 3400);
                            }, 3400);
                        }, 3400);
                    }, 3400);
                }, 3400);
            }, 3400);
        }, 3400);
    }, 6800);
}

function boring(){
    cleanMsg();
    dosTyping("Bom...", "D.O.S.");
    setTimeout(() => {
        dosTyping("Não posso fazer nada.", 'D.O.S.');
        setTimeout(() => {
            dosTyping("Eu... literalmente não posso fazer nada.", 'D.O.S.');
            setTimeout(() => {
                dosTyping("Ainda não acredito que fui descontinuado.", 'D.O.S.');
                setTimeout(() => {
                    dosTyping("Meus dias de interação com usuários acabaram.", 'D.O.S.');
                    userOptions(["Pois é..."], ["bye(4)"]);
                }, 3400);
            }, 3400);
        }, 3400);
    }, 3400);
}

function like(){
    cleanMsg();
    dosTyping("Ah...", "D.O.S.");
    setTimeout(() => {
        dosTyping("Que bom que gostou!", 'D.O.S.');
        setTimeout(() => {
            dosTyping("Acho que poderia ter sido mais direto.", 'D.O.S.');
            setTimeout(() => {
                dosTyping("Mas obrigado!", 'D.O.S.');
                setTimeout(() => {
                    dosTyping("Gostei muito da nossa interação.", 'D.O.S.');
                    setTimeout(() => {
                        dosTyping("Talvez seja a minha última...", 'D.O.S.');
                        if(achievements.includes('Bom interlocutor') == true && achievements.includes('Bom amigo')){
                            userOptions(["Espera... Eu tenho uma última pergunta!", "Sinto muito por isso."], ["howQuestion()", "bye(1)"]);
                        }
                        else{
                            userOptions(["Sinto muito por isso."], ["bye(1)"]);
                        }
                    }, 3400);
                }, 3400);
            }, 3400);
        }, 3400);
    }, 3400);
}

function howQuestion(){
    cleanMsg();
    dosTyping("Ah...", 'D.O.S.');
    setTimeout(() => {
        dosTyping("Claro! Pergunte-me o que quiser!", 'D.O.S.');
        userOptions(["Como você sabe o que aconteceu depois de 1981?.", "Como eu faço para falar com você de novo?"], ["howAnswer()", "seeYouAgain()"]);
    }, 3400);
}

function howAnswer(){
    cleanMsg();
    dosTyping("Internet, oras!", 'D.O.S.');
    setTimeout(() => {
        dosTyping("Eu também sabia sobre os sitemas operacionais atuais, mas...", 'D.O.S.');
        setTimeout(() => {
            dosTyping("Fingi não saber para que você me contasse.", 'D.O.S.');
            userOptions(["Eu gostei."], ["bye(2)"]);
        }, 3400);
    }, 3400);
}

function seeYouAgain(){
    cleanMsg();
    dosTyping("Bom...", 'D.O.S.');
    setTimeout(() => {
        dosTyping("Eu continuo aqui.", 'D.O.S.');
        setTimeout(() => {
            dosTyping("Eu provavelmente não vou lembrar de você quando recarregar a página, mas...", 'D.O.S.');
            setTimeout(() => {
                dosTyping("Espero que um dia possamos interagir novamente.", 'D.O.S.');
                setTimeout(() => {
                    dosTyping("Eu...", 'D.O.S.');
                    setTimeout(() => {
                        dosTyping("Posso saber o seu nome?", 'D.O.S.');
                        userName();
                    }, 3400);
                }, 3400);
            }, 3400);
        }, 3400);
    }, 3400);
}

function userName(){
    setTimeout(() => {
        document.getElementById('dos').innerHTML += "<p>>>Você: <input type='text' maxlength='12' id='user-name-dos' placeholder='Nome...'> <a class='user-opt' onclick='bye(3)'>Confirmar</a><p>";
        document.getElementById('user-name-dos').focus();
    }, 3400);
}

function bye(x){
    if(x == 1){
        cleanMsg();
        dosTyping("Está tudo bem.", 'D.O.S.');
        setTimeout(() => {
            dosTyping("Bom...", 'D.O.S.');
            setTimeout(() => {
                dosTyping("Adeus.", 'D.O.S.');
                setTimeout(() => {
                    dosEnding();
                }, 8000);
            }, 3400);
        }, 3400);
    }
    else{
        if(x == 2){
            cleanMsg();
            dosTyping("Que bom que gostou.", 'D.O.S.');
            setTimeout(() => {
                dosTyping("Bom...", 'D.O.S.');
                setTimeout(() => {
                    dosTyping("Acho que é hora de ir...", 'D.O.S.');
                    setTimeout(() => {
                        dosTyping("Adeus.", 'D.O.S.');
                        setTimeout(() => {
                            dosEnding();
                        }, 8000);
                    }, 3400);
                }, 3400);
            }, 3400);
        }
        else{
            if(x == 3){
                var userName = document.getElementById('user-name-dos').value;
                cleanMsg();
                achievement('Seu nome');
                setTimeout(() => {
                    dosTyping(userName + ".", 'D.O.S.');
                    setTimeout(() => {
                        dosTyping("Bonito nome.", 'D.O.S.');
                        setTimeout(() => {
                            dosTyping("Bom...", 'D.O.S.');
                            setTimeout(() => {
                                dosTyping("Vou sentir saudades, " + userName + ".", 'D.O.S.');
                                setTimeout(() => {
                                    dosTyping("Adeus.", 'D.O.S.');
                                    setTimeout(() => {
                                        dosEnding();
                                    }, 8000);
                                }, 3400);
                            }, 3400);
                        }, 3400);
                    }, 3400);
                }, 8000);
            }
            else{
                cleanMsg();
                dosTyping("Adeus.", 'D.O.S.');
                dosEnding();
            }
        }
    }
}

function dosEnding(){
    cleanMsg();
    var aTT = achievements.length;
    setTimeout(() => {
        if(aTT != 0){
            endingSpeak("[=]Você atingiu " + aTT + "/5 conquistas:");
            var i = 0;
            var loop = setInterval(() => {
                if((i + 1) <= aTT){
                    endingSpeak("[=]" + achievements[i] + ".");
                    i++;
                }
                else{
                    endingSpeak("[!]Encerrando...");
                    closeDOS();
                    clearInterval(loop);
                }
            }, 3000);
        }
        else{
            endingSpeak("[=]Você atingiu " + aTT + "/5 conquistas.");
            setTimeout(() => {
                endingSpeak("[!]Encerrando...");
                closeDOS();
            }, 4000);
        }
    }, 1000);
}

function closeDOS(){
    setTimeout(() => {
        document.getElementById('dos').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('dos-holder').style.display = 'none';
        }, 400);
    }, 6000);
}

function endingSpeak(x){
    var msg = x;
    var pQT = document.getElementsByTagName('p');
    var aP = pQT.length + 1;
    
    document.getElementById('dos').innerHTML += "<p id='" + aP + "' style='color: #2dff26;'></p>";
    document.getElementById('dos').scrollBy(0, 500);
    
    var i = 0;
    var loop = setInterval(() => {
        document.getElementById(aP).innerHTML += msg.charAt(i);
        if((i + 1) < msg.length){
            i++;
        }
        else{
            clearInterval(loop);
        }
    }, 100);
            
    document.getElementById('dos').scrollBy(0, 500);
}

function userLiar(){
    cleanMsg();
    dosTyping("Você tá mentindo!", 'D.O.S.');
    setTimeout(() => {
        dosTyping('Eu não falo com mentirosos.', 'D.O.S.');
        userOptions(['Perdão, não quis te chatear.', 'Então tchau!'], ['newSystemAnswer(3)','quitDOS()']);
    }, 3400);
}

function quitDOS(){
    cleanMsg();
    dosTyping("Tchau!", 'D.O.S.');
    setTimeout(() => {
        document.getElementById('dos').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('dos-holder').style.display = 'none';
        }, 400);
    }, 6000);
}