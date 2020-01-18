var numQuiz = '11';
document.getElementsByClassName('end-game')[0].classList.add('dis-none');
document.getElementsByClassName('main__gift')[0].classList.add('dis-none');
document.getElementsByClassName('main__message')[0].classList.add('dis-flex');
document.getElementsByClassName('main__message')[0].innerHTML = '<p>Benvenuto in ♫ Quiz Mania Dance ♪</p><p>Se riuscirai a rispondere correttamente a tutti gli ' + numQuiz + ' quiz, riceverai un premio <i class="fas fa-gifts"></i></p>';
document.getElementsByClassName('main__buttons__refresh')[0].classList.add('dis-none');
document.getElementsByClassName('main__buttons__play')[0].addEventListener('click', function play() {
  document.getElementsByClassName('end-game')[0].classList.remove('dis-none');
  document.getElementsByClassName('main__buttons__play')[0].classList.add('dis-none');
  document.getElementsByClassName('main__buttons__refresh')[0].classList.remove('dis-none');
  document.getElementsByClassName('main__message')[0].className = 'main__message dis-none';
  var quiz1 = ['html', 'HTML è considerato un linguaggio:', 'Macchina', 'Non è un linguaggio', 'Di markup', 'Anglofono','Di markup'];
  var quiz2 = ['html', 'Qual è l\'alternativa corretta?','<image src=" " alt=" "></image>','<img src=" " alt=" ">','<image src=" " alt=" ">', '<img src=" " alt=" "></img>','<img src=" " alt=" ">'];
  var quiz3 = ['html', 'In HTML, per cosa è usato l\'attributo alt = " " ?', 'Bloccare un\'animazione prima della fine della sua durata', 'Bloccare un elemento della pagina se avviene un determinato evento', 'Serve ad indicare al browser una interpretazione alternativa di una immagine in caso questa non venisse caricata correttamente','Serve ad interrompere l\'interpretazione della pagina da parte del browser, se trova un div colorato di rosso', 'Serve ad indicare al browser una interpretazione alternativa di una immagine in caso questa non venisse caricata correttamente'];
  var quiz4 = ['css', 'Quale tra i seguenti NON è un metodo per aggiungere dello stile al nostro documento?', 'Internamente', 'Esternamente', 'In linea', 'In cascata', 'In cascata'];
  var quiz5 = ['js', 'Cosa pensa Chiara quando Alessandro o Nino, per la 800esima volta fanno: "Posso chiedere una cosa?"','Evvai, non vedevo l\'ora!','Sono veramente euforico', 'Che bravo giovanotto','Le rose son rosse, le viole son blu, minchia vuoi di nuovo tu?','Le rose son rosse, le viole son blu, minchia vuoi di nuovo tu?'];
  var quiz6 = ['js', 'In Javascript "var nonChiaro;" è un modo per?', 'Richiamare una variabile', 'Definire una variabile', 'Controllare al var se "fuorigioco==true"', 'Dichiarare una variabile', 'Dichiarare una variabile'];
  var quiz7 = ['js', 'Quale numero sarà stampato in console tramite il codice " for (var iabile = -3; iabile <= -2; iabile++); console.log(iabile) " ?', 'Nulla, il ciclo non funzionerebbe', '-2', '-3','-1','-1'];
  var quiz8 = ['css', 'Quale artista cantava il celebre brano "CheckBomb" ?', 'Bruce Springsteen', 'Mousse T.', 'Alessandro Sainato', 'Tom Jones', 'Alessandro Sainato'];
  var quiz9 = ['css', 'Supponendo di avere " <div id="quadrato_UNO"></div>" e "<div id="quadrato_DUE"></div>" che andranno a formare due distinti quadrati. Supponendo che saranno uno sovrapposto all\'altro, quale mi asperò di vedere se nel mio foglio di stile avrò: "#quadrato_UNO {position: static; z-index: 2; } e #quadrato_DUE {position: absolute; z-index: 1 }" ?', '#quadrato_DUE: \'position: static\' non può struttare la proprietà \'z-index\'', "#quadrato_DUE: \'position: static\' non è un valore esistente per la proprietà \'position\' definita in #quadrato_UNO", '#quadrato_UNO: \'position: static\' permette di posizionare l\'elemento sempre davanti ad elementi con \'position: absolute\'', '#quadrato_UNO: ha uno z-index più alto', '#quadrato_DUE: \'position: static\' non può struttare la proprietà \'z-index\''];
  var quiz10 = ['css', 'In CSS, cos\'è " opacity: "', 'Una funzione', 'Una proprietà', 'Un selettore', 'Un valore', 'Una proprietà'];
  var quiz11 = ['html', 'Quale delle seguenti affermazioni riguardanti il tag <header></header> è vera?', 'Deve essere scritto sempre come primo elemento del <body></body>', 'Deve essere scritto come primo elemento del <body></body>, ma solo se abbiamo intenzione di inserire anche <main></main> e <footer></footer>', 'Possiamo scriverlo o meno, non abbiamo alcun vincolo di inserimento dell\'<header></header>', 'Può essere scritto, a patto che ci siano anche <main></main> e <footer></footer>', 'Possiamo scriverlo o meno, non abbiamo alcun vincolo di inserimento dell\'<header></header>'];
  var quiz12 = [];
  var quiz13 = [];
  var quiz14 = [];
  var quiz15 = [];
  var quiz16 = [];
  var quiz17 = [];
  var quiz18 = [];
  var quiz19 = [];
  var quiz20 = [];
  var quiz21 = [];
  var quiz22 = [];
  var quiz23 = [];
  var quiz24 = [];
  var quiz25 = [];
  var quiz26 = [];
  var quiz27 = [];
  var quiz28 = [];
  var quiz29 = [];
  var quiz30 = [];
  var quiz31 = [];
  var quiz32 = [];
  var quiz33 = [];
  var quiz34 = [];
  var quiz35 = [];
  var quiz36 = [];
  var quiz37 = [];
  var quiz38 = [];
  var quiz39 = [];
  var quiz40 = [];
  var quiz41 = [];
  var quiz42 = [];
  var quiz43 = [];
  var quiz44 = [];
  var quiz45 = [];
  var quiz46 = [];
  var quiz47 = [];
  var quiz48 = [];
  var quiz49 = [];
  var quiz50 = [];
  var quizList = [quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7, quiz8, quiz9, quiz10, quiz11, quiz12, quiz13, quiz14, quiz15, quiz16, quiz17, quiz18, quiz19, quiz20, quiz21, quiz22, quiz23, quiz24, quiz25,quiz26, quiz27, quiz28, quiz29, quiz30, quiz31, quiz32, quiz33, quiz34, quiz35, quiz36, quiz37, quiz38, quiz39, quiz40, quiz41, quiz42, quiz43, quiz44, quiz45, quiz46, quiz47, quiz48, quiz49, quiz50];
  var quiz = [];
  quiz = quizList[j];
  // function sleep(milliseconds) {
  //   const date = Date.now();
  //   let currentDate = null;
  //   do {
  //     currentDate = Date.now();
  //   } while (currentDate - date < milliseconds);
  // }
  var j = 0;
  var manyTrue = 0;
  document.getElementsByClassName('main__question__number')[0].textContent = [j+1]+'/'+numQuiz;
  document.getElementsByClassName('main__question__content')[0].textContent = quizList[j][1];
  if (quizList[j][0] == 'html') {
    document.getElementsByClassName('main__question')[0].className ='main__question bg-html';
  } else if (quizList[j][0] == 'css') {
    document.getElementsByClassName('main__question')[0].className ='main__question bg-css';
  } else {
    document.getElementsByClassName('main__question')[0].className ='main__question bg-js';
  }
  for (let i = 0; i < 4; i++ ) {
    document.getElementsByClassName('main__answer__content')[i].textContent = quizList[j][i+2];
  }
  j++;
  document.getElementsByClassName('main__answer')[0].addEventListener('click', function newQuiz() {
    if (quizList[j-1][2] == quizList[j-1][6]) {
      manyTrue++;
    }
    console.log(j, manyTrue);
    document.getElementsByClassName('main__question__number')[0].textContent = [j+1]+'/11';
    document.getElementsByClassName('main__question__content')[0].textContent = quizList[j][1];
    if (quizList[j][0] == 'html') {
      document.getElementsByClassName('main__question')[0].className ='main__question bg-html';
    } else if (quizList[j][0] == 'css') {
      document.getElementsByClassName('main__question')[0].className ='main__question bg-css';
    } else {
      document.getElementsByClassName('main__question')[0].className ='main__question bg-js';
    }
    for (let i = 0; i < 4; i++ ) {
      document.getElementsByClassName('main__answer__content')[i].textContent = quizList[j][i+2];
    }
    j++;
    if (j > numQuiz) {
      document.getElementsByClassName('end-game')[0].classList.add('dis-none');
      document.getElementsByClassName('main__message')[0].innerHTML = '<p>Peccato! Non sei riuscito a rispondere correttamente a tutti i quiz..</p> <p>ma non disparare!!</p> <p>Riprovaci per ottenere il premio!</p><p>Tanto le domande son le stesse</p><p>vedrai che ce la farai <i class="fab fa-earlybirds"></i></p>';
      if (manyTrue == j-1) {
        document.getElementsByClassName('main__gift')[0].classList.remove('dis-none');
        document.getElementsByClassName('main__gift')[0].innerHTML = '<iframe class="dance-buddy"width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=PLj6Qo0so0ijrmUg1ZdoIQIQspD-8JCmpp" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        document.getElementsByClassName('main__message')[0].innerHTML = '<p>Wooah! Sei il <i class="fas fa-chess-king"></i> di QuizManiaDance!</p><p>Prendi le cuffie e sparati la playlist a tutto volume</p><p>♫ Dance time ♪</p>';
      }
      document.getElementsByClassName('main__message')[0].className = 'main__message dis-flex';
    }
  });
  document.getElementsByClassName('main__answer')[1].addEventListener('click', function newQuiz() {
    if (quizList[j-1][3] == quizList[j-1][6]) {
      manyTrue++;
    }
    console.log(j,manyTrue);
    document.getElementsByClassName('main__question__number')[0].textContent = [j+1]+'/11';
    document.getElementsByClassName('main__question__content')[0].textContent = quizList[j][1];
    if (quizList[j][0] == 'html') {
      document.getElementsByClassName('main__question')[0].className ='main__question bg-html';
    } else if (quizList[j][0] == 'css') {
      document.getElementsByClassName('main__question')[0].className ='main__question bg-css';
    } else {
      document.getElementsByClassName('main__question')[0].className ='main__question bg-js';
    }
    for (let i = 0; i < 4; i++ ) {
      document.getElementsByClassName('main__answer__content')[i].textContent = quizList[j][i+2];
    }
    j++;
    if (j > numQuiz) {
      document.getElementsByClassName('end-game')[0].classList.add('dis-none');
      document.getElementsByClassName('main__message')[0].innerHTML = '<p>Peccato! Non sei riuscito a rispondere correttamente a tutti i quiz..</p> <p>ma non disparare!!</p> <p>Riprovaci per ottenere il premio!</p><p>Tanto le domande son le stesse</p><p>vedrai che ce la farai <i class="fab fa-earlybirds"></i></p>';
      if (manyTrue == j-1) {
        document.getElementsByClassName('main__gift')[0].classList.remove('dis-none');
        document.getElementsByClassName('main__gift')[0].innerHTML = '<iframe class="dance-buddy"width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=PLj6Qo0so0ijrmUg1ZdoIQIQspD-8JCmpp" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        document.getElementsByClassName('main__message')[0].innerHTML = '<p>Wooah! Sei il <i class="fas fa-chess-king"></i> di QuizManiaDance!</p><p>Prendi le cuffie e sparati la playlist a tutto volume</p><p>♫ Dance time ♪</p>';
      }
      document.getElementsByClassName('main__message')[0].className = 'main__message dis-flex';
    }
  });
  document.getElementsByClassName('main__answer')[2].addEventListener('click', function newQuiz() {
    if (quizList[j-1][4] == quizList[j-1][6]) {
      manyTrue++;
    }
    console.log(j,manyTrue);
    document.getElementsByClassName('main__question__number')[0].textContent = [j+1]+'/11';
    document.getElementsByClassName('main__question__content')[0].textContent = quizList[j][1];
    if (quizList[j][0] == 'html') {
      document.getElementsByClassName('main__question')[0].className ='main__question bg-html';
    } else if (quizList[j][0] == 'css') {
      document.getElementsByClassName('main__question')[0].className ='main__question bg-css';
    } else {
      document.getElementsByClassName('main__question')[0].className ='main__question bg-js';
    }
    for (let i = 0; i < 4; i++ ) {
      document.getElementsByClassName('main__answer__content')[i].textContent = quizList[j][i+2];
    }
    j++;
    if (j > numQuiz) {
      document.getElementsByClassName('end-game')[0].classList.add('dis-none');
      document.getElementsByClassName('main__message')[0].innerHTML = '<p>Peccato! Non sei riuscito a rispondere correttamente a tutti i quiz..</p> <p>ma non disparare!!</p> <p>Riprovaci per ottenere il premio!</p><p>Tanto le domande son le stesse</p><p>vedrai che ce la farai <i class="fab fa-earlybirds"></i></p>';
      if (manyTrue == j-1) {
        document.getElementsByClassName('main__gift')[0].classList.remove('dis-none');
        document.getElementsByClassName('main__gift')[0].innerHTML = '<iframe class="dance-buddy"width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=PLj6Qo0so0ijrmUg1ZdoIQIQspD-8JCmpp" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        document.getElementsByClassName('main__message')[0].innerHTML = '<p>Wooah! Sei il <i class="fas fa-chess-king"></i> di QuizManiaDance!</p><p>Prendi le cuffie e sparati la playlist a tutto volume</p><p>♫ Dance time ♪</p>';
      }
      document.getElementsByClassName('main__message')[0].className = 'main__message dis-flex';
    }
  });
  document.getElementsByClassName('main__answer')[3].addEventListener('click', function newQuiz() {
    if (quizList[j-1][5] == quizList[j-1][6]) {
      manyTrue++;
    }
    console.log(j,manyTrue);
    document.getElementsByClassName('main__question__number')[0].textContent = [j+1]+'/11';
    document.getElementsByClassName('main__question__content')[0].textContent = quizList[j][1];
    if (quizList[j][0] == 'html') {
      document.getElementsByClassName('main__question')[0].className ='main__question bg-html';
    } else if (quizList[j][0] == 'css') {
      document.getElementsByClassName('main__question')[0].className ='main__question bg-css';
    } else {
      document.getElementsByClassName('main__question')[0].className ='main__question bg-js';
    }
    for (let i = 0; i < 4; i++ ) {
      document.getElementsByClassName('main__answer__content')[i].textContent = quizList[j][i+2];
    }
    j++;
    if (j > numQuiz) {
      document.getElementsByClassName('end-game')[0].classList.add('dis-none');
      document.getElementsByClassName('main__message')[0].innerHTML = '<p>Peccato! Non sei riuscito a rispondere correttamente a tutti i quiz..</p> <p>ma non disparare!!</p> <p>Riprovaci per ottenere il premio!</p><p>Tanto le domande son le stesse</p><p>vedrai che ce la farai <i class="fab fa-earlybirds"></i></p>';
      if (manyTrue == j-1) {
        document.getElementsByClassName('main__gift')[0].classList.remove('dis-none');
        document.getElementsByClassName('main__gift')[0].innerHTML = '<iframe class="dance-buddy"width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=PLj6Qo0so0ijrmUg1ZdoIQIQspD-8JCmpp" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        document.getElementsByClassName('main__message')[0].innerHTML = '<p>Wooah! Sei il <i class="fas fa-chess-king"></i> di QuizManiaDance!</p><p>Prendi le cuffie e sparati la playlist a tutto volume</p><p>♫ Dance time ♪</p>';
      }
      document.getElementsByClassName('main__message')[0].className = 'main__message dis-flex';
    }
  });
});
