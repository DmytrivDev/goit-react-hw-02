import css from "./Options.module.scss";

function Options({ updateFeedback, totalFeedback }) {
  return (
    <div className={css.options}>
      <button
        className={css.buttongood}
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        className={css.buttonneutral}
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={css.buttonbad}
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback > 0 ? (
        <button
          className={css.buttonreset}
          onClick={() => {
            updateFeedback();
          }}
        >
          Reset
        </button>
      ) : null}
    </div>
  );
}

export default Options;
