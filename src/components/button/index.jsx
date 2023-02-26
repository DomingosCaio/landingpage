import Styles from "./button.module.scss";

export const Button = ({ title, kind }) => {
  const generationKindButton = () => {
    if (kind === "secondary") {
      return Styles.secondary;
    }

    return Styles.primary;
  };

  return (
    <button className={`${Styles.button} ${generationKindButton()}`}>
      {title}
    </button>
  );
};
