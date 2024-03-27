document.addEventListener("DOMContentLoaded", function() {
  const chatArea = document.createElement("div");
  chatArea.id = "chat-area";
  document.body.appendChild(chatArea);

  const options = [
      {
          question: "Bonjour ! Comment puis-je vous aider ?",
          answers: [
              { text: "quel est le language de programmation le plus utilisé ?", nextQuestion: 1 },
              { text: "ou trouvé des documentation ?", nextQuestion: 2 },
              { text: "ou publier des programme crée ?", nextQuestion: 3 },
              { text: "ou installer go ?", nextQuestion: 4 },
              { text: "quel est le premier language de programation ?", nextQuestion: 5 },
              { text: "comment se former à la programmation ?", nextQuestion: 6 }

          ]
      },
      {
          question: "pour des jeux video python, C++ pour des site web js, HTML/CSS",
          answers: [
            {text: "done", nextQuestion: null}
          ]
      },
      {
          question: "sur devdocs vous pourrez trouver la documentation de plusieur langage  https://devdocs.io/",
          answers: [
            {text: "done", nextQuestion: null}
        ]
      },
      {
          question: "sur github il permet aussi de travailler en groupe plus facilement https://github.com/",
          answers: [
            {text: "done", nextQuestion: null}
        ]
      },
      {
          question: "sur le site de docs officiel de go https://go.dev/doc/install",
          answers: [
            {text: "done", nextQuestion: null}
        ]
      },
      {
          question: "Prolog en 1972 par Colmerauer",
          answers: [
            {text: "done", nextQuestion: null}
        ]
      },
      {
          question: "openClasseroom peut fournir des cour sur pluisieur language de programation https://openclassrooms.com/",
          answers: [
            {text: "done", nextQuestion: null}
        ]
      }
  ];

  let currentQuestionIndex = 0;

  function displayQuestion(questionIndex) {
      const currentQuestion = options[questionIndex];
      appendMessage("bot", currentQuestion.question);

      const answers = currentQuestion.answers;
      answers.forEach((answer, index) => {
          const answerButton = document.createElement("button");
          answerButton.textContent = answer.text;
          answerButton.addEventListener("click", function() {
              if (answer.nextQuestion !== null) {
                  displayQuestion(answer.nextQuestion);
              } else {
                displayQuestion(0);
                const currentQuestion = options[0];
              }
          });
          chatArea.appendChild(answerButton);
      });
  }

  function appendMessage(sender, message) {
      const messageElement = document.createElement("div");
      messageElement.classList.add(sender === "bot" ? "bot-message" : "user-message");
      messageElement.textContent = message;
      chatArea.appendChild(messageElement);
  }

  displayQuestion(currentQuestionIndex);
});

