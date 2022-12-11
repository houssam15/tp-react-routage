import React from "react";
import CustomButton from "./CustomButton";

function Exercice1() {
  return (
    <div>
      <h1>Exercice 1</h1>
      <CustomButton
        text="Click-me !"
        action={function (e) {
          alert("bonsoir ");
        }}
      />
    </div>
  );
}
export default Exercice1;
