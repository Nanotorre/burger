import React from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/Aux";
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
  return (
    <Aux>
      <Backdrop show={props.show} click={props.modalClosed}></Backdrop>
      <div
        className={classes.Modal}
        style={{
          opacity: props.show ? 1 : 0,
          transform: props.show ? "translateY(0)" : "translateY(-100vh)"
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default modal;