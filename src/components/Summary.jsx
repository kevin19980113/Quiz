import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedRatio = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctRatio = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongRatio = 100 - skippedRatio - correctRatio;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz Complete" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedRatio}%</span>
          <span className="text">SKIPPED</span>
        </p>
        <p>
          <span className="number">{correctRatio}%</span>
          <span className="text">ANSWERED CORRECTLY</span>
        </p>
        <p>
          <span className="number">{wrongRatio}%</span>
          <span className="text">ANSWERED INCORRECTLY</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ? answer : "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
