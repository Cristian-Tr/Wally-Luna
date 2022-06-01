document.addEventListener('DOMContentLoaded', function () {



window.onload =  init;

//-------------------------------------
function init() {
    wordsToFilter = getWordsToFilter();
    arrayOfAllWords = stringOfWordsToArray(wordsToFilter);
    assignGlobalVariables();
    addListeners();
    setWord(arrayOfAllWords);
}

//-------------------------------------
//====GLOBAL VARIABLES
//initialized after window is loaded
let selectedWordsCounter,
    selectedWord,
    timer,
    wordArray,
    wordsByLength,
    wordLengthCounter,
    arrayOfAllWords,
    wordsToFilter;

let htmlCountDisplay, assertDiv;

//-------------------------------------
//initiate global variables
function assignGlobalVariables() {
    assertDiv = document.querySelector("#assert");
    assertDiv.innerHTML = "    ";

    htmlCountDisplay = document.querySelector("#display-time");

    timer = new MyTimer(9); // (seconds) / pass assertDiv as well?

    wordArray = []; //full array of words
    wordsByLength = []; //array filtered by length
    wordLengthCounter = 3; //length of words / to be incremented every 5 words

    //count how many words of lenght x have been used
    selectedWordsCounter = 0;
    selectedWord = "";
}

//-------------------------------------
//====TIMER
class MyTimer {
    //  timer is set to work on seconds. The subtraction is every 100ms therefore counter-= 0.1. It would otherwise take to long tu update
    constructor(counterDuration) {
        this.counter = counterDuration;
        this.counterDur = counterDuration; //this
        this.intervalDur = 100; // must be 100 for seconds

        this.myInterval = {};

        displayCounter(counterDuration); //display initial remaining time
    }

    start() {
        this.myInterval = setInterval(
            this.countAndDisplay(this),
            this.intervalDur
        );
    }

    clearAndResetInterval() {
        clearInterval(this.myInterval); //clearInterval is defined by API
        this.start();
        displayCounter(Math.ceil(this.counter));
        this.counter = 0;
    }

    clearIntervalAtEndOfGame() {
        clearInterval(this.myInterval); //defined by API
        endGameMsg();
    }

    resetTimer() {
        clearInterval(this.myInterval);
        this.counter = this.counterDur;
        displayCounter(Math.ceil(this.counter));
        clearInput();
    }

    newDuration(counterDuration) {
        this.counterDur = counterDuration;
        this.resetTimer();
    }

    /** SEE NOTE: another possibility for passing arguments to setInterval() */
    countAndDisplay(t) {
        //	(t = this timer)
        return function() {
            t.counter -= 0.1;

            if (t.counter <= 0) {
                t.counter = t.counterDur;
                newWord(); //calling global function...
                clearInput();
            }

            if (t.counter <= t.counterDur - 1.0) {
                clearAssert();
            }
            displayCounter(Math.ceil(t.counter));
        };
    }
}

/**
 * another possibility for passing arguments to setInterval():
 * https://coderwall.com/p/kxswnw/you-can-pass-arguments-into-settimeout-and-setinterval
*/

//-------------------------------------
//====TIMER HELPER FUNCTIONS
//	these functions interact with the DOM and global ojects
function clearAssert() {
    assertDiv.innerHTML = "      ";
}
//-------------------------------------
function displayCounter(currentCount) {
    htmlCountDisplay.innerHTML = currentCount;
}
//-------------------------------------
function endGameMsg() {
    assertDiv.innerHTML =
        "<i>" + "Sfârșit!" + "</i>" + "<br>" + " Jocul a ajuns la final.";
    assertDiv.className = "end-input";

    //remove input listener with compareInput()
    let wordInput = document.querySelector("#word-input");
    wordInput.removeEventListener("input", compareInput);
    // wordInput.readOnly = true;
    wordInput.style.backgroundColor = "lightGreen";
}

//  -----------------------------------
function clearInput() {
    //maybe use a global variable to avoid redefining every time
    let wordInput = document.querySelector("#word-input");
    wordInput.value = "";
    wordInput.style.backgroundColor = "";
}
//-------------------------------------

/**
 * another possibility for passing arguments to setInterval():
 * https://coderwall.com/p/kxswnw/you-can-pass-arguments-into-settimeout-and-setinterval
*/

//-------------------------------------
//====RANDOM WORD SELECTOR
/*
 * selects a random word from an array and returns it  
 * increments the length of the words to be selected
 * ends game  
 * may recursively calls itself
 */
function randomWordSelector() {
    let randomWord = "";
    selectedWordsCounter = selectedWordsCounter % 5;

    if (wordsByLength.length !== 0) {
        let arrIndex = Math.floor(Math.random() * wordsByLength.length);
        wordsByLength[arrIndex];
        randomWord = wordsByLength[arrIndex].toLowerCase();

        //if there is at least one word on array, remove a word
        if (arrIndex > -1) wordsByLength.splice(arrIndex, 1);

        //if 5 words of selected length, increment the length
        if (selectedWordsCounter === 4) {
            wordLengthCounter++;
            wordsByLength = filterWordArray(wordArray, wordLengthCounter);
        }

        //count how many words of lenght x have been used
        selectedWordsCounter++;
    } else if (wordsByLength.length === 0 && wordLengthCounter < 30) {
        // if a certain wordLength is not present,
        // we call recursively up to a word length of 30
        wordLengthCounter++;
        selectedWordsCounter = 0;
        wordsByLength = filterWordArray(wordArray, wordLengthCounter);

        //return recursive, otherwise 'undefined' or ' ' would be displayed
        return randomWordSelector();
    } else {
        //else, end the game
        timer.clearIntervalAtEndOfGame();
        console.log("else", wordLengthCounter);
        return "GAME OVER";
    }
    return randomWord;
}

//-------------------------------------
//====WORD-FUNCTIONS
//filter array by lenth of word and assign it
function filterWordArray(originalArray, wordLengthCounter) {
    // types: (array, number)

    return originalArray.filter(word => word.length === wordLengthCounter);
}

//-------------------------------------
//sets the first word
function setWord(arr) {
    //(array)
    //filter duplicates from original array
    wordArray = arr.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    });

    //new array from filtering by length
    wordsByLength = filterWordArray(wordArray, wordLengthCounter);

    //get a new word and display it
    newWord();
}

//-------------------------------------
function newWord() {
    selectedWord = randomWordSelector();
    document.querySelector("#show-word").innerHTML = selectedWord;
}

//-------------------------------------
function stringOfWordsToArray(wordsToFilter) {
    //separate string by line breaks and join by spaces
    let arrayOfAllWords = wordsToFilter.split("\n").join(" ");

    //remove '.' / only one such entry
    arrayOfAllWords = arrayOfAllWords.split(".").join(" ");

    // remove ','
    arrayOfAllWords = arrayOfAllWords.split(",").join(" ");

    //split by spaces and returs array
    arrayOfAllWords = arrayOfAllWords.split(" ");

    return arrayOfAllWords;
}

//====LISTENERS
function addListeners() {
    let wordInput = document.querySelector("#word-input");
    wordInput.addEventListener("input", compareInput);

    //start game on first input
    addStartGameListener();

    let startingWordLength = document.querySelector("#wordLength");
    startingWordLength.addEventListener("input", newWordLength);

    let counterDurL = document.querySelector("#counter-dur");
    counterDurL.addEventListener("input", newCounterDuration);
}

//====LISTENERS' FUNCTIONS
//-------------------------------------
function compareInput(evt) {
    let currentInput = evt.target;
    let currentInputVal = currentInput.value;
    let inputValLength = currentInputVal.length;

    //compare selectedWord character, up to the length of the input, with input
    if (selectedWord.substring(0, inputValLength) === currentInputVal) {
        //notify correct
        currentInput.style.backgroundColor = "";
    } else {
        //notify incorrect
        currentInput.style.backgroundColor = "pink";
    }

    //assert once the input length is equivalent to selectedWord length
    if (currentInputVal.length >= selectedWord.length) {
        if (selectedWord === currentInputVal) {
            assertDiv.innerHTML = "Corect!";
            assertDiv.className = "good-input";
        } else {
            assertDiv.innerHTML = "Eronat!";
            assertDiv.className = "bad-input";
        }

        timer.clearAndResetInterval();
        clearInput();
    }
    /**SEE BELOW FOR COMPARISON PER CHARACTER */
}

//-------------------------------------
function startGameAndRemoveListener(evt) {
    //start the game and destroy the listener (this function)
    evt.target.removeEventListener("input", startGameAndRemoveListener);
    timer.start();
}

//-------------------------------------
//Game starts on input
function addStartGameListener() {
    let wordInput = document.querySelector("#word-input");
    wordInput.addEventListener("input", startGameAndRemoveListener);
}

//-------------------------------------
function newWordLength(evt) {
    addStartGameListener();
    wordLengthCounter = parseInt(evt.target.value);
    setWord(arrayOfAllWords);
    timer.resetTimer();
}

//-------------------------------------
function newCounterDuration(evt) {
    addStartGameListener();
    timer.newDuration(parseInt(evt.target.value));
}

/** FOR COMPARISON BY CHARACTER USE:
	//compare selectedWord character, at length of the input, 
	// with last input letter
	let charIndex = currentInputVal.length - 1;
	if (selectedWord[charIndex] === currentInputVal[charIndex]) { } else { }
 */

//===================================
//====WORDS TO FILTER

//  src: https://a-z-animals.com/animals/scientific/
function getWordsToFilter() {
    return `Acanthuridae
Achatina Fulica
Achatinoidea
Acinonyx Jubatus
Actinidia Deliciosa
Aegypius Monachus
Aepyceros Melampus
Ailuropoda Melanoleuca
Ailurus Fulgens
Ajaja Ajaja
Alcelaphinae
Alces Alces
Alligator Mississippiensis
Alopex Lagopus
Alouatta
Ambystoma Mexicanum
Ambystoma Tigrinum
Amphiprioninae
Anas Platyrhynchos
Anguis Fragilis
Anisoptera
Anthozoa
Apatura Iris
Apis
Apodemus Sylvaticus
Aptenodytes Forsteri
Aptenodytes Patagonicus
Arachnocampa Luminosa
Arctictis Binturong
Arctocephalinae
Ardeidae
Arini
Arvicola Amphibius
Astrochelys Radiata
Atelerix Albiventris
B

Balaenoptera Acutorostrata
Balaenoptera Physalus
Balsenoptera Musculus
Barbus Barbus
Betta Splendens
Bison Bison
Blattaria
Bombina
Bombus
Bos Grunniens
Bos Primigenius Indicus
Bos Taurus
Brachypelma Smithi
Brachyura
Branta
Bubalus Bubalis
Bubo Scandiacus
Bufo Bufo
Bufo Marinus
Buteo Buteo
C

Cacajao
Caelifera
Caimaninae
Callithrix Pygmaea
Camelus Bactrianus
Camelus Dromedarius
Canis Aureus
Canis Latrans
Canis Lupus Dingo
Canis Lupus Familiaris
Canis Lupus Rufus
Canis Rufus
Canus Lupus Arcticus
Capra Aegagrus Hircus
Capra Falconeri
Caracal Caracal
Carcharhinus Amblyrhynchos
Carcharhinus Leucas
Carcharodon Carcharias
Caridea
Castor Canadensis
Casuarius
Caudata
Cavia Porcellus
Cebus Capucinus
Cephalopterus
Ceratophrys Ornata
Ceratotherium Simum
Cerura Vinula
Cetorhinus Maximus
Cettia Diphone
Chaetodontidae
Chamaeleonidae
Chelonioidea
Chelydridae
Chilopoda
Chinchilla Lanigera
Chiroptera
Chlamydosaurus Kingii
Chlamyphorus Truncatus
Chlorocebus Pygerythrus
Choeropsis Liberiensis
Choloepus Hoffmani
Cichlidae
Cirripedia
Civettictis Civetta
Cnidaria Scyphozoa Aurelia
Coccinellidae
Coleoptera
Connochaetes Taurinus
Coraciiformes
Coturnix Coturnix
Crocodylus
Crocuta Crocuta
Cryptoprocta Ferox
Cuon Alpinus
Cygnus Atratus
D

Dasyatis Centroura
Dasypodidae
Dasyurus Viverrinus
Daubentonia Madagascariensis
Delphinus Delphis
Demospongiae
Dendrobatidae
Dendrobranchiata
Dermaptera
Desmodontinae
Dicerorhinus Sumatrensis
Diceros Bicornis
Didelphis Virginiana
Diomedeidae
Diplopoda
Diptera
Dracaena Guianensis
Dromaius Novaehollandiae
Dugong Dugon
Dynastes Hercules
E

Echinoidea
Electrophorus Electricus
Elephantulus
Elephas Maximus
Elephas Maximus Borneensis
Elephas Maximus Indicus
Elephas Maximus Maximus
Elephas Maximus Sumatranus
Eleutherodactylus Iberia
Emydidae
Enhydra Lutris
Ephemeroptera
Equus Asinus
Equus Caballus
Equus Mule
Equus Zebra X Equus Asinus
Equus Zebra X Equus Caballus
Equus Zebra, Equus Quagga, Equus Grevyi
Erethizon Dorsaum
Erithacus Rubecula
Erythrocebus Patas
Esox
Eudyptes Chrysocome
Eudyptes Chrysolophus
Eudyptes Robustus
Eudyptes Schlegeli
Eudyptula Minor
F

Falconiforme
Felis Concolor
Felis Domesticus
Felis Lynx
Formicidae
Fratercula Arctica
Fregata
Funambulus Palmarum
G

Galeocerdo Cuvier
Gallinula
Gallus Gallus
Gavia Immer
Gavialis Gangeticus
Gekkonidae
Geochelone Elegans
Geochelone Gigantea
Geochelone Nigra
Geochelone Pardalis
Gerbillinae
Gerridae
Ginglymostoma Cirratum
Giraffa Camelopardalis
Gliridae
Gopherus Agassizii
Gorilla Berengei
Gorilla Berengei Berengei
Gorilla Berengei Graueri
Gorilla Gorilla
Gorilla Gorilla Diehli
Gorilla Gorilla Gorilla
Gruidae
Gulo Gulo
Gynnidomorpha Alisman
H

Halichoerus Grypus
Helarctos Malayanus
Heleioporus
Heloderma Suspectum
Helogale Parvula
Hemigalus Derbyanus
Heterodontus Francisci
Hieraatus Spilogaster
Hippocampus
Hippopotamus Amphibius
Holothuroidea
Homo Sapiens Neanderthalensis
Homo Sapiens Sapiens
Hydrochoerus Hydrochaeris
Hydrodamalis Gigas
Hydrurga Leptonyx
Hyla
Hylobatidae
Hymenoptera
I

Iguana Iguana
Indri Indri
Insecta
Isoptera
L

Labridae
Lacerta Agilis
Lacertilia
Lagenorhynchus Obscurus
Lagothrix Lagotricha
Lama Glama
Larva
Latrodectus
Lemmus Lemmus
Lemur Catta
Leontopithecus Rosalia
Leopardus Pardalis
Lepisosteidae
Leptailurus Serval
Lepus Arcticus
Lepus Europaeus
Limulidae
Lissotriton Vulgaris
Litoria Nasuta
Lopholithodes Mandtii
Loxodonta Africana
Loxodonta Africana Africana
Loxodonta Cyclotis
Lucanidae
Luscinia Magarhynchos
Lutra Canadensis
Lycaon Pictus
Lynx Rufus
M

Macaca Fascicularis
Macaca Fuscata
Macropus
Macropus Giganteus
Mammuthus Primigenius
Mandrillus Sphinx
Manta Birostris
Megadyptes Antipodes
Megaptera Novaeangliae
Meleagris
Melopsittacus Undulatus
Mephitis Mephitis
Merops Orientalis
Mesobatrachia
Mesocricetus Auratus
Metynnis Argenteus
Microcebus Murinus
Mirounga
Moloch Horridus
Muraenidae
Mustela Erminea
Mustela Nivalis
Mustela Putorius Furo
Myrmecobius Fasciatus
Myrmecophaga Tridactyla
N

Nandinia Binotata
Nasalis Larvatus
Nasua Nasua
Nectophryne Afra
Neofelis Nebulosa
Nephropidae
Numididae
Nyctereutes Procyonoides

O

Ochotona Minor
Octopus Vulgaris
Odobenus Rosmarus
Odocoileus Virginiana
Okapia Johnstoni
Oniscidea
Ophisaurus
Orcinus Orca
Oriolus Oriolus
Ornithorhynchus Anatinus
Orycteropus Afer
Oryctolagus Cuniculus
Osteolaemus Tetraspis
Ostreidae
Otariidae
Ovis Aries
P

Paguma Larvata
Paguroidea
Pan Paniscus
Pan Troglodytes
Panthera Leo
Panthera Leo × Panthera Tigris
Panthera Onca
Panthera Pardus
Panthera Pardus, Panthera Onca
Panthera Tigris
Panthera Tigris Altaica
Panthera Tigris Amoyensis
Panthera Tigris Corbetti
Panthera Tigris Jacksoni
Panthera Tigris Sumatrae
Panthera Tigris Tigris
Papilionoidea
Papio
Paracheirodon Axelrodi
Paradisaeidae
Paradoxurus Hermaphroditus
Paralichthys
Passeridae
Pavo Cristatus
Pecari Tajacu
Pelecanus Occidentalis
Pelophylax Kl. Esculentus
Pelophylax Lessonae
Pelophylax Ridibundus
Perameles
Phacochoerus Africanus
Phaethon
Phalanger Maculatus
Phalangeriforme
Pharomachrus, Euptilotis
Phascolarctos Cinereus
Phasianus Colchicus
Phasmatodea
Phoca Vitulina
Phoenicopterus
Phycodurus Eques
Physeter Macrocephalus
Physignathus
Pica Pica
Picidae
Platanistoidea
Poecilia
Poecilia Reticulata
Pogona Vitticeps
Pomacanthidae
Pongo Abelii
Pongo Pygmaeus
Pongo Pygmaeus, Pongo Abelii, Pongo Tapanuliensis
Pongo Tapanuliensis
Prionailurus Bengalensis
Prionailurus Viverrinus
Pristella Maxillaris
Procavia Capensis
Procyon Lotor
Proteus Anguinus
Protoreaster Nodosus
Pseudoryx Nghetinhensis
Psittacine
Pterois Volitans
Pteromyini
Pygocentrus Nattereri
Pygoscelis Adeliae
Pygoscelis Antarcticus
Pygoscelis Papua
R

Ramphastos Sulfuratus
Ramphastos Toco
Rana Catesbeiana
Rana Temporaria
Rangifer Tarandus
Raphus Cucullatus
Rattus Rattus
Recurvirostra
Rhincodon Typus
Rhinoceros Sondaicus
Rhinoceros Unicornis
Rhinocerotidae
Rhinoderma Darwinii
Rupicapra Rupicapra
S

Saguinus Bicolor
Saguinus Geoffroyi
Saguinus Imperator
Saguinus Midas
Saguinus Oedipus
Saimiri
Sarcophilus Harrisii
Sciuridae
Scorpaenidae
Scorpiones
Sepiida
Serpentes
Setonix Brachyurus
Siluriformes
Simia Paniscus
Smilodon Populator
Spermophilus Richardsonii
Spheniscus Demersus
Spheniscus Humboldti
Spheniscus Magellanicus
Spheniscus Mendiculus
Sphenodon Punctatus
Sphyraena
Sphyrna Zygaena
Squalus Acanthias
Stegostoma Fasciatum
Strigops Habroptilus
Strix Aluco
Struthio Camelus
Sula Nebouxii
Suricata Suricatta
Sus Scrofa
Sus Scrofa Scrofa
Symphysodon
Syncerus Caffer
T

Tachyglossus Aculeatus
Talpidae
Tamias Striatus
Tapirus
Tarsius
Taxidea Taxus
Tetraodontidae
Tetraoninae
Teuthida
Threskiornithidae
Thylogale
Tragelaphus Eurycerus
Tragelaphus Strepsiceros
Tremarctos Ornatus
Trichechus Manatu
Tridacna Gigas
Trochilidae
Troglodytes Gorilla
Tursiops Truncatus
Tyto Alba
U

Urochordata
Uroplatus
Ursidae
Ursus Americanus
Ursus Arctos
Ursus Arctos Horriblis
Ursus Maritimus
Ursus Tibetanus
V

Varanus Indicus
Varanus Komodoensis
Vespa Mandarinia
Viverra Tangalunga
Vombatus Ursinus
Vulpes Vulpes
Vulpes Zerda
X

Xenopus Laevis
`;
}


}); 