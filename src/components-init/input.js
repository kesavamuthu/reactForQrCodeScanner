import React from "react";
import { Form } from "react-bootstrap";

function InputProvider(props) {
  console.log(props);
  let inputs = props.register[0];
  let lables = props.register[1];
  let placeHolders = props.register[2];
  let patterns = props.register[3];
  let datas = props.data;
  let names = Object.keys(datas);
  console.log(names);
  return inputs.map((e, i) => (
    <Form.Group controlId={e} key={i}>
      <Form.Label>{lables[i]}</Form.Label>
      <Form.Control
        type={e}
        placeholder={placeHolders[i]}
        name={names[i]}
        value={datas[names[i]]}
        onChange={props.onChange}
        pattern={patterns[i]}
      />
    </Form.Group>
  ));
}

export default InputProvider;
