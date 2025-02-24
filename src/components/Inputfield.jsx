import styles from "./InputField.module.css";
const InputField = ({currVal}) => {
  return <input type="text" className={styles["input-main"]} value={currVal} readOnly/>;
};
export default InputField;
