document.addEventListener("DOMContentLoaded", function() {
  const chatArea = document.createElement("div");
  chatArea.id = "chat-area";
  document.body.appendChild(chatArea);

  const options = [
      {
          question: "Bonjour ! Comment puis-je vous aider ?",
          answers: [
              { text: "Quel est le language de programmation le plus utilisé ?", nextQuestion: 1 },
              { text: "Ou peut-on trouver des documentations pour coder ?", nextQuestion: 2 },
              { text: "Ou publier des programme créés ?", nextQuestion: 3 },
              { text: "Ou installer go ?", nextQuestion: 4 },
              { text: "Quel est le premier language de programation ?", nextQuestion: 5 },
              { text: "Comment se former à la programmation ?", nextQuestion: 6 }

          ]
      },
      {
          question: "Python est globalement le plus utilisé. Il est principalement utilisé en Data. Pour des jeux video, les plus utilisés sont C++ et C#." +
              " Pour des site web, il s'agit d'HTML/CSS, JavaScript et PHP",
          answers: [
            {text: "done", nextQuestion: null}
          ]
      },
      {
          question: "Sur devdocs vous pourrez trouver la documentation de plusieurs langages de programmation : https://devdocs.io/",
          answers: [
            {text: "done", nextQuestion: null}
        ]
      },
      {
          question: "Sur github : Il permet également de travailler en groupe plus facilement https://github.com/",
          answers: [
            {text: "done", nextQuestion: null}
        ]
      },
      {
          question: "Vous pouvez le faire sur le site de docs officiel de go https://go.dev/doc/install",
          answers: [
            {text: "done", nextQuestion: null}
        ]
      },
      {
          question: "Il s'agit de Prolog en 1972 par Colmerauer",
          answers: [
            {text: "done", nextQuestion: null}
        ]
      },
      {
          question: "OpenClasseroom peut fournir des cours sur plusieurs langages de programmation : https://openclassrooms.com/",
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

