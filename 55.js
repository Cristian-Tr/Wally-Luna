document.addEventListener('DOMContentLoaded', function () {



  var d = {}
  const wordsList = ['BOXER', 'HORSE', 'DINGO', 'BISON', 'CAMEL', 'COATI', 'COBRA', 'CRANE', 'EAGLE', 'FINCH', 'GOOSE', 'HYENA', 'MACAW', 'MOUSE', 'OTTER', 'PANDA', 'SHARK', 'TIGER', 'VIPER', 'ZEBRA', 'SKUNK', 'GRAPE', 'OLIVE', 'ONION', 'LOTUS', 'MAIZE', 'CHILI', 'APPLE', 'MANGO', 'PEACH', 'LEMON', 'BERRY', 'MELON', 'COCOA', 'BEANS', 'TRUCK', 'WATER', 'RIVER', 'AWARD', 'BREAD', 'CABLE', 'CHART', 'CROSS', 'CLOCK', 'GLASS', 'GRASS', 'HOUSE', 'ARENA', 'GLOBE', 'EARTH', 'PLANE', 'BEACH', 'PASTA', 'TABLE', 'PHONE', 'MONEY', 'HEART', 'CROWN', 'CHAIR', 'KNIFE', 'PLATE', 'KNIFE', 'PLATE', 'MEDAL', 'STONE', 'TRAIN']
  var randomWord;

  function resetGame() {
    document.querySelector('#game-board').innerHTML = ''
    document.querySelector('#game-board').dataset.word = wordsList[Math.floor(Math.random() * wordsList.length)]
    randomWord = document.querySelector('#game-board').dataset.word

    if (randomWord == 'HORSE') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/6/64/Frisian_horse.jpg"
    }
    if (randomWord == 'BOXER') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/6/6f/Male_fawn_Boxer_undocked.jpg"
    }
    if (randomWord == 'DINGO') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/9/98/Dingo_walking.jpg"
    }
    if (randomWord == 'BISON') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/8/8d/American_bison_k5680-1.jpg"
    }
    if (randomWord == 'CAMEL') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg"
    }
    if (randomWord == 'COATI') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/0/09/A_White-nosed_Coati.jpg"
    }
    if (randomWord == 'COBRA') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/8/86/Naja_oxiana_Caspian_cobra_in_a_defensive_posture.jpg"
    }
    if (randomWord == 'CRANE') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/5/5e/GMK3050_All_Terrain_Crane.jpg"
    }
    if (randomWord == 'EAGLE') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/0/04/Booted_eagle_in_flight.jpg"
    }
    if (randomWord == 'FINCH') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Pyrrhula_pyrrhula_female_2.jpg"
    }
    if (randomWord == 'GOOSE') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/5/57/Greylag_Goose_-_St_James%27s_Park%2C_London_-_Nov_2006.jpg"
    }
    if (randomWord == 'HYENA') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/4/4b/Crocuta_crocuta.jpg"
    }
    if (randomWord == 'MACAW') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/6/6d/Blue-and-Yellow-Macaw.jpg"
    }
    if (randomWord == 'MOUSE') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/0/0d/%D0%9C%D1%8B%D1%88%D1%8C_2.jpg"
    }
    if (randomWord == 'OTTER') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/b/b5/Fischotter_Lutra_lutra1.jpg"
    }
    if (randomWord == 'PANDA') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG"
    }
    if (randomWord == 'SHARK') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/8/8f/Bullshark_Beqa_Fiji_2007.jpg"
    }
    if (randomWord == 'TIGER') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_female.jpg"
    }
    if (randomWord == 'VIPER') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/9/99/Crotalus_atrox_diamantklapperschlange_kopf.jpg"
    }
    if (randomWord == 'ZEBRA') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/e/e3/Plains_Zebra_Equus_quagga.jpg"
    }
    if (randomWord == 'SKUNK') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/1/1f/Skunk_about_to_spray.jpg"
    }
    if (randomWord == 'GRAPE') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/6/6c/Abhar-iran.JPG"
    }
    if (randomWord == 'OLIVE') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/8/84/Olivesfromjordan.jpg"
    }
    if (randomWord == 'ONION') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/9/93/ARS_red_onion.jpg"
    }
    if (randomWord == 'LOTUS') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/e/ed/Sacred_lotus_Nelumbo_nucifera.jpg"
    }
    if (randomWord == 'MAIZE') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/6/6f/Klip_kukuruza_uzgojen_u_Me%C4%91imurju_%28Croatia%29.JPG"
    }
    if (randomWord == 'CHILI') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/9/97/Plantatie_de_chili.jpg"
    }
    if (randomWord == 'APPLE') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/8/88/Jabuke_Gloster_na_stablu.2c.jpg"
    }
    if (randomWord == 'MANGO') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Mango_LangraBenarsi_Asit_fs8.jpg"
    }
    if (randomWord == 'PEACH') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/9/9e/Autumn_Red_peaches.jpg"
    }
    if (randomWord == 'LEMON') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/f/f7/Lemon_-_whole_and_split.jpg"
    }
    if (randomWord == 'BERRY') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/1/17/Vaccinium_corymbosum%2801%29.jpg"
    }
    if (randomWord == 'MELON') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Watermelon_and_melon_in_India.jpg"
    }
    if (randomWord == 'COCOA') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Cocoa_Pods.JPG"
    }
    if (randomWord == 'BEANS') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/a/a0/French_beans_J1.JPG"
    }
    if (randomWord == 'TRUCK') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/5/56/Renault_D-Truck_Koffer-LKW.jpg"
    }
    if (randomWord == 'WATER') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/5/5e/Water_drop_001.jpg"
    }
    if (randomWord == 'RIVER') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prut_River_im._1497.jpg"
    }
    if (randomWord == 'AWARD') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/2/2e/Wimbledon_trophies.jpg"
    }
    if (randomWord == 'BREAD') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/2/2c/Wei%C3%9Fbrot-1.jpg"
    }
    if (randomWord == 'CABLE') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/a/a0/Electric_guide_3%C3%972.5_mm.jpg"
    }
    if (randomWord == 'CHART') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/1/16/BTTFTimelines.png"
    }
    if (randomWord == 'CROSS') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/4/45/Mesteacanu_DB.bis_lemn_Cruce.jpg"
    }
    if (randomWord == 'CLOCK') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/a/a8/Bain-clock.jpg"
    }
    if (randomWord == 'GLASS') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/8/8f/Glass02.jpg"
    }
    if (randomWord == 'GRASS') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/7/78/WIKI-Grass.jpg"
    }
    if (randomWord == 'HOUSE') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/c/c0/Gingerbread_House_Essex_CT.jpg"
    }
    if (randomWord == 'ARENA') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/1/1a/Stadionul_National_-_National_Arena_3.jpg"
    }
    if (randomWord == 'GLOBE') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/9/90/World_Globe_Map.jpg"
    }
    if (randomWord == 'EARTH') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.jpg"
    }
    if (randomWord == 'PLANE') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/e/eb/British_Airways_Concorde_G-BOAC_03.jpg"
    }
    if (randomWord == 'BEACH') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/4/4b/Monolithi_Beach%2C_Preveza_1.JPG"
    }
    if (randomWord == 'PASTA') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/6/6a/Japanese_food_by_Naoki_Nakashima_175.jpg"
    }
    if (randomWord == 'TABLE') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/7/7d/Pedestal_Table%2C_c._1810%2C_England%2C_mahogany_with_ebony_and_metal_inlays%2C_gilt_bronze_-_Art_Institute_of_Chicago_-_DSC09906.JPG"
    }
    if (randomWord == 'PHONE') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/0/0f/Android_phones.jpg"
    }
    if (randomWord == 'MONEY') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/7/78/Money_poster.JPG"
    }
    if (randomWord == 'HEART') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/2/21/Latidos.gif"
    }
    if (randomWord == 'CROWN') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/3/33/Imperial_Crown_of_Napoleon_III._%28Reproduction_by_Abeler%2C_Wuppertal%29.png"
    }
    if (randomWord == 'CHAIR') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/a/ac/Plastic_Tuinstoel.jpg"
    }
    if (randomWord == 'KNIFE') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/3/33/Damascus_Bowie.jpg"
    }
    if (randomWord == 'PLATE') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/4/41/Paper_Plate.jpg"
    }
    if (randomWord == 'STONE') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/5/5a/Kummakivi_balancing_rock_in_Ruokolahti%2C_Finland.jpg"
    }
    if (randomWord == 'TRAIN') {
      var images = "https://upload.wikimedia.org/wikipedia/commons/7/71/Locomotora_FSBC_2203.jpg"
    }


    document.getElementById('img').src = images;

    var initialText = "";
    var hint = randomWord.substr(0, 1) + " _ " + randomWord.substr(2, 1) + " _ " + randomWord.substr(4, 5)
    var button = document.getElementById('showHint'),
      content = document.getElementById('hintPhrase');

    button.onclick = function () {
      content.innerHTML = hint;
    };

    setTimeout(function () {
      content.innerHTML = initialText;
    }, 12005);

    function addWordRow() {
      var wr = document.createElement('div')
      wr.className = 'wordRow'
      wr.dataset.length = 0
      if (i == 0) {
        wr.className = 'wordRow active'
      }
      if (i == 4) {
        wr.className = 'wordRow lastRow'
      }
      wr.dataset.word = ''
      wr.innerHTML = `<div class='letter'></div><div class='letter'></div><div class='letter'></div><div class='letter'></div><div class='letter'></div>`
      document.querySelector('#game-board').appendChild(wr)
    }

    for (var i = 0; i < 5; i++) {
      addWordRow()
    }

    let btns = document.querySelectorAll('#keyboard button')
    btns.forEach(function (elm) {
      if (!elm.classList.contains('big-key'))
        elm.className = ''
    })
  }


  resetGame()

  let r_num = 0
  const btn = document.querySelectorAll('#keyboard button')
  const letter_box = document.querySelectorAll('.letter')
  btn.forEach(function (elm) {
    elm.addEventListener('click', function () {
      let r = document.querySelector('.active')
      let l = elm.dataset.key
      if (l === '←') {
        if (Number(r.dataset.length) > 0) {
          r.dataset.length = Number(r.dataset.length) - 1
          r.dataset.word = r.dataset.word.slice(0, -1)
          r.querySelectorAll('.letter')[r.dataset.length].dataset.letter = ''
          r.querySelectorAll('.letter')[r.dataset.length].innerText = ''
        }
      } else if (l === '↵') {
        if (Number(r.dataset.length) == 5) {
          // console.log('hit enter')
          checkAnswer()
        }
      } else {
        if (Number(r.dataset.length) < 5) {
          r.dataset.word = r.dataset.word + l
          r.querySelectorAll('.letter')[r.dataset.length].dataset.letter = l
          r.querySelectorAll('.letter')[r.dataset.length].innerText = l
          r.dataset.length = Number(r.dataset.length) + 1
        }
      }
    })
  })

  function checkAnswer() {
    let r = document.querySelector('.active')
    let letters = randomWord.split('')
    if (wordsList.includes(r.dataset.word)) {
      for (var i = 0; i < letters.length; i++) {
        r.querySelectorAll('.letter')[i].style.transitionDelay = i * 250 + 'ms'

        if (letters[i] === r.querySelectorAll('.letter')[i].dataset.letter) {
          r.querySelectorAll('.letter')[i].classList.add('match')
          document.querySelector('#keyboard button[data-key=' + letters[i] + ']').classList.add('match')
        } else if (letters.includes(r.querySelectorAll('.letter')[i].dataset.letter)) {
          r.querySelectorAll('.letter')[i].classList.add('present')
          document.querySelector('#keyboard button[data-key=' + r.querySelectorAll('.letter')[i].dataset.letter + ']').classList.add('present')
        } else {
          r.querySelectorAll('.letter')[i].classList.add('absent')
          document.querySelector('#keyboard button[data-key=' + r.querySelectorAll('.letter')[i].dataset.letter + ']').classList.add('absent')
        }
      }

      if (r.dataset.word == randomWord) {
        setTimeout(function () {
          alert('BRAVO!\n Mai încerci încă o dată?')
          resetGame();
        }, 1500)
      } else {
        if (r.classList.contains('lastRow')) {
          setTimeout(function () {
            alert('Cuvântul corect este:\n' + randomWord + '\nMai încerci încă o dată?')
            resetGame();
          }, 1500)
        } else {
          r.nextSibling.classList.add('active')
          r.classList.remove('active')
        }
      }
    } else {
      alert('Acest cuvânt nu face parte din lista jocului!\nȘterge literele și tastează alt cuvânt!')
    }
  }



  window.addEventListener('keydown', function (e) {
    d[e.which] = true;
    if (d[8]) {
      document.querySelector('button[data-key="←"]').click()
    }
    if (d[13]) {
      document.querySelector('button[data-key="↵"]').click()
    }
  })
  window.addEventListener('keyup', function (e) {
    d[e.which] = false;
  })


}); 