import styles from "./PrimaryButton.module.scss";
import classNames from "classnames";

interface PrimaryButtonProps {
  type: "primary" | "secondary";
  children: React.ReactNode;
}

const PrimaryButton = ({ type, children }: PrimaryButtonProps) => {
  return (
    <>
      <button
        className={classNames(styles["primary-button"], {
          [styles["primary-button--primary"]]: type === "primary",
          [styles["primary-button--secondary"]]: type === "secondary",
        })}
      >
        {children}
      </button>
    </>
  );
};

export default PrimaryButton;