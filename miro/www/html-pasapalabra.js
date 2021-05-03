// Settings
const ORIGINAL_QUESTIONS = [
  {
    letter: "a",
    answer: "acoso",
    status: 0,
    question:
      "CON LA A. Intimidación que se ejerce sobre otra persona con el fin de humillarlo (acoso o anonimato)",
  },

  {
    letter: "b",
    answer: "alfabetización digital",
    status: 0,
    question:
      "CONTIENE LA B. Aprender a utilizar las herramientas que nos proporciona la tecnología digital (alfabetización digital o absentismo)",
  },

  {
    letter: "c",
    answer: "cibercacoso",
    status: 0,
    question:
      "CON LA C. Utilizar los medios digitales para molestar a otra persona con la intención de hacer daño (calumnia o ciberacoso)",
  },

  {
    letter: "d",
    answer: "delito",
    status: 0,
    question:
      "CON LA D. Conducta o infracción que va en contra de las normas (delito o denuncia)",
  },

  {
    letter: "e",
    answer: "erótico",
    status: 0,
    question: "CON LA E. Que despierta el deseo sexual (elegante o erótico)",
  },

  {
    letter: "f",
    answer: "ofensivo",
    status: 0,
    question:
      "CONTIENE LA F. Que humilla o hiere el amor propio o la dignidad de alguien (ofensivo o efectivo)",
  },

  {
    letter: "g",
    answer: "grooming",
    status: 0,
    question:
      "CON LA G. Acoso en el que un adulto se hace pasar por un menor, creando un vínculo de confianza para luego involucrarlo en una actividad sexual (grooming o griming)",
  },

  {
    letter: "h",
    answer: "honor",
    status: 0,
    question:
      "CON LA H. Cualidad moral que lleva a alguien a no hacer nada que lo pueda desmerecer en la estima de los demás o la suya propia (honor o herencia)",
  },

  {
    letter: "i",
    answer: "intimidad",
    status: 0,
    question:
      "CON LA I. Zona espiritual, íntima y reservada de una persona o de un grupo (intimidad o inocencia)",
  },

  {
    letter: "j",
    answer: "vejatorio",
    status: 0,
    question:
      "CONTIENE LA J. Humillante, ofensivo, denigrante, insultante, ultrajante (vejatorio o enjambre)",
  },

  {
    letter: "k",
    answer: "TikTok",
    status: 0,
    question:
      "CONTIENE LA K. Servicio de redes sociales para compartir vídeos (TikTok o eureka)",
  },

  {
    letter: "l",
    answer: "calumnia",
    status: 0,
    question:
      "CONTIENE LA L. Acusación falsa, hecha para causar daño (alegría o calumnia)",
  },

  {
    letter: "m",
    answer: "M1R0",
    status: 0,
    question:
      "CON LA M. El robot más molón del mundo cibernético (Mariano o M1R0)",
  },

  {
    letter: "n",
    answer: "conflicto",
    status: 0,
    question:
      "CONTIENE LA N. Enfrentamiento o pelea entre dos o más personas (conflicto o entrevista)",
  },

  {
    letter: "ñ",
    answer: "niño",
    status: 0,
    question: "CONTIENE LA Ñ. Víctima en el grooming (muñeco o niño)",
  },

  {
    letter: "o",
    answer: "testigo",
    status: 0,
    question:
      "CONTIENE LA O. Persona que presencia de manera directa un cierto acontecimiento (testigo o profesor)",
  },

  {
    letter: "p",
    answer: "público",
    status: 0,
    question: "CON LA P. Accesible a todos. (público o privado)",
  },

  {
    letter: "q",
    answer: "código QR",
    status: 0,
    question:
      "CON LA Q. Tipo de código de barras para acceder a una web concreta (código QR o código QS)",
  },

  {
    letter: "r",
    answer: "Redes Sociales",
    status: 0,
    question:
      "CON LA R. Plataformas digitales de comunicación global que ponen en contacto a gran número de usuarios/as (radio o redes sociales)",
  },

  {
    letter: "s",
    answer: "acosadora",
    status: 0,
    question:
      "CONTIENE LA S. Persona que realiza el acoso (acosadora o asalariada)",
  },

  {
    letter: "t",
    answer: "TIC",
    status: 0,
    question:
      "CON LA T. Conjunto de técnicas y equipos informáticos que permiten comunicarse a distancia por vía electrónica (TIC o tecnicismo)",
  },

  {
    letter: "u",
    answer: "trauma",
    status: 0,
    question:
      "CONTIENE LA U. Evento que amenaza el bienestar o la vida de un individuo y la consecuencia de ese evento en la estructura mental o vida emocional del mismo (trauma o vuelo)",
  },

  {
    letter: "v",
    answer: "víctima",
    status: 0,
    question:
      "CON LA V. Persona que ha sufrido daño producto de la comisión de un delito (violento o víctima)",
  },

  {
    letter: "w",
    answer: "whatsapp",
    status: 0,
    question:
      "CON LA W. Aplicación móvil para el envío de mensajes y llamadas (whatsapp o wallapop) ",
  },

  {
    letter: "x",
    answer: "sexting",
    status: 0,
    question:
      "CONTIENE LA X. Enviar mensajes, fotos o vídeos eróticos y sexuales a través del móvil (soxting o sexting)",
  },

  {
    letter: "y",
    answer: "cyberbullyng",
    status: 0,
    question: "CONTIENE LA Y. Ciberacoso en inglés (cyberbullyng o cybering)",
  },

  {
    letter: "z",
    answer: "amenazar",
    status: 0,
    question:
      "CONTIENE LA Z. Delito que consiste en intimidar a alguien con el argumento de que se va a ejercer un mal grave sobre él o su familia (amenazar o victimizar)",
  },
];
const LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const AVAILABLE_TIME = 180;

//HTML element selectors
const WELCOME_PAGE = document.querySelector(".welcome");
const SCORE_PAGE = document.querySelector(".scorePopup");
const SCOREPOP_CORRECT_ANSWERS = document.querySelector(
  ".scorePop-correctAnswers"
);
const SCOREPOP_TIME_LEFT = document.querySelector(".scorePop-timeLeft");
const SCORE_CORRECT_ANSWERS = document.querySelector(".score-correct");
const SCORE_TIME_LEFT = document.querySelector(".score-time");
const PLAYER_NAME_INPUT = document.querySelector("#inputPlayerName");
const START_GAME_BUTTON = document.querySelector("#inputStartGame");
const ANSWER_BUTTON = document.querySelector("#btn-asnwer");
const DISPLAY = document.querySelector("#questions");
const LAST_PLAYERS_LIST = document.querySelector(".lastPlayersList");
const USER_ANSWER_INPUT = document.querySelector(".btn-text");

// Keyboard events
USER_ANSWER_INPUT.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    checkAnswer();
  }
});

// Players history
const LAST_PLAYERS = [];

//Game initial values
let questions = null;
let playerName = null;
let correctAnswers = 0;
let incorrectAnswers = 0;
let turn = 1;
let actualQuestion = 0;
let actualLetter = null;
let timeLeft = AVAILABLE_TIME;
let timer = null;

// * ----- Core functions - They contain the main functions of the game -----

// Loads players history to show it on welcome page
const initialLoad = () => {
  showLastPlayers();
};

const startGame = () => {
  questions = [...ORIGINAL_QUESTIONS];
  playerName = capitalizeFirstLetter(PLAYER_NAME_INPUT.value);
  hide(WELCOME_PAGE);
  setTimer("start");
  showNextQuestion();
};

const showNextQuestion = () => {
  if (actualQuestion > questions.length - 1) {
    actualQuestion = 0;
  }
  if (questions[actualQuestion].status != 1) {
    showQuestion(questions[actualQuestion]);
  } else {
    actualQuestion++;
    let remainingWords = questions.filter((question) => question.status === 0);
    if (remainingWords.length === 0) {
      showScore();
    }
    showNextQuestion();
  }
};

const pasapalabra = () => {
  let letter = document.querySelector("." + actualLetter);
  letter.classList.add("pasa");
  turn++;
  actualQuestion++;
  cleanInputText();
  showNextQuestion();
};

const checkAnswer = () => {
  let answer = USER_ANSWER_INPUT.value.toLowerCase();
  let letter = document.querySelector("." + actualLetter);
  if (answer === "") {
    USER_ANSWER_INPUT.classList.add("wrong");
    return;
  }
  letter.classList.remove("pasa");
  if (answer === questions[actualQuestion].answer) {
    letter.classList.add("correct");
    correctAnswers++;
    updateScore();
  } else {
    letter.classList.add("wrong");
    incorrectAnswers++;
  }
  questions[actualQuestion].status = 1;
  turn++;
  actualQuestion++;
  cleanLastLetter();
  cleanInputText();
  showNextQuestion();
};

const saveGameStats = () => {
  if (LAST_PLAYERS.length === 5) {
    LAST_PLAYERS.shift();
  }
  LAST_PLAYERS.push({
    name: playerName,
    correctAnswers: correctAnswers,
    timeLeft: timeLeft,
  });
};

const resetGame = () => {
  playerName = null;
  correctAnswers = 0;
  incorrectAnswers = 0;
  turn = 1;
  actualQuestion = 0;
  actualLetter = null;
  timeLeft = AVAILABLE_TIME;
  cleanAllQuestionStatus();
  resetInputPlayerName();
  cleanAllLetters();
  initialLoad();
};

const endGame = () => {
  saveGameStats();
  resetGame();
  hide(SCORE_PAGE);
  show(WELCOME_PAGE);
};

// * ----- Display functions - Used to show information -----
const showLastPlayers = () => {
  LAST_PLAYERS_LIST.innerHTML = "";
  if (LAST_PLAYERS.length < 1) {
    LAST_PLAYERS_LIST.innerHTML = "<li> - </li>";
  }
  LAST_PLAYERS.forEach((element) => {
    LAST_PLAYERS_LIST.innerHTML +=
      "<li>" +
      element.name +
      ": Correctas: " +
      element.correctAnswers +
      " - Tiempo restante: " +
      element.timeLeft +
      "</li>";
  });
};

const showScore = () => {
  setTimer("stop");
  SCOREPOP_CORRECT_ANSWERS.innerHTML = correctAnswers;
  SCOREPOP_TIME_LEFT.innerHTML = timeLeft;
  show(SCORE_PAGE);
};

const showQuestion = (el) => {
  actualLetter && cleanLastLetter();
  actualLetter = el.letter;
  let letter = document.querySelector("." + actualLetter);
  letter.classList.add("active");
  DISPLAY.innerHTML = el.question;
};

//  * ----- Format functions -----

const capitalizeFirstLetter = (word) => {
  word = word.toLowerCase();
  return word.charAt(0).toUpperCase() + word.slice(1);
};

// * ------ Helper functions -----

const setTimer = (action) => {
  const startTimer = () => {
    timer = setInterval(() => {
      if (timeLeft === 0) {
        showScore();
        stopTimer();
        return;
      }
      timeLeft--;
      updateScore();
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  action === "start" && startTimer();
  action === "stop" && stopTimer();
};

const show = (element) => {
  element.classList.remove("hidden");
};

const hide = (element) => {
  element.classList.add("hidden");
};

const handleNameChange = () => {
  if (PLAYER_NAME_INPUT.value.length > 0) {
    show(START_GAME_BUTTON);
  } else {
    hide(START_GAME_BUTTON);
  }
};

const updateScore = () => {
  SCORE_CORRECT_ANSWERS.innerHTML = correctAnswers;
  SCORE_TIME_LEFT.innerHTML = timeLeft;
};

const resetInputPlayerName = () => {
  PLAYER_NAME_INPUT.value = "";
  hide(START_GAME_BUTTON);
};

const cleanLastLetter = () => {
  let letter = document.querySelector("." + actualLetter);
  letter.classList.remove("active");
};

const cleanAllLetters = () => {
  LETTERS.forEach((letter) => {
    let letterToClean = document.querySelector("." + letter);
    letterToClean.classList.remove("active", "wrong", "correct", "pasa");
  });
};

const cleanAllQuestionStatus = () => {
  questions.map((question) => (question.status = 0));
};

const cleanInputText = () => {
  USER_ANSWER_INPUT.value = "";
  USER_ANSWER_INPUT.classList.remove("wrong");
};

//  -------------- Starter function
initialLoad();
