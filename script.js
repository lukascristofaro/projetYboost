document.addEventListener("DOMContentLoaded", function() {
  const chatArea = document.createElement("div");
  chatArea.id = "chat-area";
  document.body.appendChild(chatArea);

  const options = [
      {
          question: "Bonjour ! Comment puis-je vous aider ?",
          answers: [
              { text: "Comment ça va ?", nextQuestion: 1 },
              { text: "Quel est ton nom ?", nextQuestion: 2 },
              { text: "Quel est ton nom ?", nextQuestion: 3 }

          ]
      },
      {
          question: "Je suis un robot, donc ça va toujours bien ! Et vous ?",
          answers: [
              { text: "Bien, merci.", nextQuestion: null }
          ]
      },
      {
          question: "Je suis un chatbot. Vous pouvez m'appeler Chatbot.",
          answers: [
              { text: "D'accord, merci.", nextQuestion: null }
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
                  appendMessage("user", answer.text);
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

