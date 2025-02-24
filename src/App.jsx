import { useState } from "react";
import styles from "./App.module.css";
import InputField from "./components/Inputfield";
import MainButton from "./components/MainButton";
function App() {
  let [currVal, setcurrVal] = useState([]);
  const handleOnClick = (evt) => {
    let buttonText = evt.target.value;
    if (buttonText === "C") {
      setcurrVal([]);
    } else if (buttonText === "=") {
      try {
        setcurrVal(eval(currVal));
      } catch (err) {
        setcurrVal("Error");
      }
    } else {
      let newCurrVal = currVal + buttonText;
      setcurrVal(newCurrVal);
    }
  };
  return (
    <>
      <div className={styles["calculator"]}>
        <InputField currVal={currVal}></InputField>
        <MainButton handleOnClick={handleOnClick}></MainButton>
      </div>
    </>
  );
}

export default App;
