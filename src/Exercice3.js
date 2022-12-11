import React from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";

function Exercice3() {
  return (
    <div>
      <h1>Exercice 3</h1>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => console.log("my name is houssam from consol @_@")}
      >
        click-here
      </Button>
    </div>
  );
}
export default Exercice3;
