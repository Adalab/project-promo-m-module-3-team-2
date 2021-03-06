import React from "react";
import Collapsable from "../Card/Collapsable";
import Design from "../Card/Design";
import Fill from "../Card/Fill";
import Share from "../Card/Share";

function MainForm(props) {
  console.log(props);
  return (
    <form
      className="refillable js-form form"
      action="/signup"
      method="post"
      id="form"
      autoComplete="off"
    >
      <Collapsable title="Diseña" icon="far fa-object-ungroup header-icon">
        <Design
          pallete={props.pallete}
          handleColor={props.handleColor}
          handleReset={props.handleReset}
        ></Design>
      </Collapsable>

      <Collapsable title="Rellena" icon="far fa-keyboard i-main header-icon">
        <Fill
          name={props.name}
          job={props.job}
          image={props.image}
          email={props.email}
          phone={props.phone}
          linkedin={props.linkedin}
          github={props.github}
          handleInputData={props.handleInputData}
          updateAvatar={props.updateAvatar}
        ></Fill>
      </Collapsable>

      <Collapsable title="Comparte" icon="fas fa-share-alt header-icon">
        <Share
          pallete={props.pallete}
          name={props.name}
          job={props.job}
          image={props.image}
          email={props.email}
          phone={props.phone}
          linkedin={props.linkedin}
          github={props.github}
        ></Share>
      </Collapsable>
    </form>
  );
}

export default MainForm;
