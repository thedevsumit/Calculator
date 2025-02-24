import styles from "./MainButton.module.css";
const MainButton = ({handleOnClick}) => {
  const ButtonVal = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
 
  return (
    <div className={styles["buttons-mainClass"]}>
      {ButtonVal.map((val) => (
        <input type="text" value={val}
        key={val} className={styles["buttons-main"]} 
        onClick={(evt)=>{handleOnClick(evt)}}/>
      ))}
    </div>
  );
};
export default MainButton;
