function loadQuiz() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = "";

  let currentSection = 0;

  questions.forEach((item, index) => {
    // Cada 3 items es una nueva sección
    if (index % 3 === 0) {
      currentSection++;
      const sectionTitle = document.createElement("h2");
      sectionTitle.textContent = `Sección ${currentSection}`;
      quiz.appendChild(sectionTitle);
    }

    const div = document.createElement("div");
    div.className = "item";

    if (item.type === "words") {
      const title = document.createElement("h3");
      title.textContent = `1) Words to review:`;
      div.appendChild(title);

      item.words.forEach(word => {
        const wordDiv = document.createElement("div");
        wordDiv.style.marginBottom = "6px";
        wordDiv.textContent = word + " ";

        // Botón traducir palabra
        const btnTranslate = document.createElement("button");
        btnTranslate.textContent = "Translate word";
        btnTranslate.onclick = () => alert(`"${word}": ${item.translations[word] || "No translation"}`);
        wordDiv.appendChild(btnTranslate);

        // Botón escuchar palabra
        const btnListen = document.createElement("button");
        btnListen.textContent = "Listen word";
        btnListen.onclick = () => speakText(word);
        wordDiv.appendChild(btnListen);

        // Botón verificar pronunciación
        const btnCheckPron = document.createElement("button");
        btnCheckPron.textContent = "Check pronunciation";
        btnCheckPron.onclick = () => checkPronunciation(word);
        wordDiv.appendChild(btnCheckPron);

        div.appendChild(wordDiv);
      });
    }

    if (item.type === "sentence") {
      const title = document.createElement("h3");
      title.textContent = `2) Practice sentence:`;
      div.appendChild(title);

      const sentenceP = document.createElement("p");
      sentenceP.textContent = item.sentence;
      div.appendChild(sentenceP);

      // Botones: traducir, escuchar normal, escuchar lento, checar pronunciación
      div.appendChild(createButton("Translate", () => alert(item.translation)));
      div.appendChild(createButton("Listen", () => speakText(item.sentence, false)));
      div.appendChild(createButton("Listen slow", () => speakText(item.sentence, true)));
      div.appendChild(createButton("Check my pronunciation", () => checkPronunciation(item.sentence)));
    }

    if (item.type === "question") {
      const title = document.createElement("h3");
      title.textContent = `3) Your question:`;
      div.appendChild(title);

      const questionP = document.createElement("p");
      questionP.textContent = item.question;
      div.appendChild(questionP);

      const answerP = document.createElement("p");
      answerP.textContent = `Answer: ${item.answer}`;
      div.appendChild(answerP);

      // Botones: traducir, escuchar normal, escuchar lento, checar pronunciación
      div.appendChild(createButton("Translate", () => alert(item.translation)));
      div.appendChild(createButton("Listen", () => speakText(item.question, false)));
      div.appendChild(createButton("Listen slow", () => speakText(item.question, true)));
      div.appendChild(createButton("Check my pronunciation", () => checkPronunciation(item.question)));
    }

    quiz.appendChild(div);
  });
}

function createButton(text, onClick) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.onclick = onClick;
  btn.style.marginRight = "5px";
  return btn;
}

function speakText(text, slow = false) {
  if (!window.speechSynthesis) {
    alert("Your browser does not support speech synthesis.");
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = slow ? 0.6 : 1;
  window.speechSynthesis.speak(utterance);
}

function checkPronunciation(text) {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    alert("Your browser does not support speech recognition.");
    return;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function(event) {
    const spokenText = event.results[0][0].transcript.toLowerCase();
    const originalText = text.toLowerCase();

    const isCorrect = originalText.includes(spokenText) || spokenText.includes(originalText);

    if (isCorrect) {
      alert("Great! Your pronunciation is correct or very close.");
    } else {
      alert(`Not quite right.\nYou said: "${spokenText}"\nExpected: "${text}"`);
    }
  };

  recognition.onerror = function(event) {
    alert('Recognition error: ' + event.error);
  };

  recognition.onspeechend = function() {
    recognition.stop();
  };
}

window.onload = loadQuiz;
