import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Util from "../utility";
import "./login.css";

const init = [
  ["email", "password"],
  ["Enter email", "Password"],
  ["Enter email", "Password"],
];
let flag = true;
function Login() {
  const [register, setShow] = useState([
    [...init[0]],
    [...init[1]],
    [...init[2]],
  ]);
  let inputs = register[0];
  let placeHolders = register[1];
  let lables = register[2];

  return (
    <Container style={flag ? { marginTop: "14%" } : { marginTop: "5%" }}>
      <Row>
        <Col></Col>
        <Col md={5}>
          <Form id="example2">
            {inputs.map((e, i) => (
              <Form.Group controlId={e} key={i}>
                <Form.Label>{lables[i]}</Form.Label>
                <Form.Control type={e} placeholder={placeHolders[i]} />
              </Form.Group>
            ))}
            {/* <img src="..." alt="..." class="rounded-circle"></img> */}
            <div style={{ textAlign: "center" }}>
              <Button variant="primary" type="submit" onClick={submitter}>
                Submit
              </Button>

              <label title="" className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onClick={registerSetter}
                />
                Check me out
              </label>
            </div>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );

  function submitter(event) {
    event.preventDefault();
    console.log(event);
  }

  function registerSetter(event) {
    console.log(event.target, event.target.checked);
    flag = !flag;
    if (event.target.checked) {
      inputs.unshift("text");
      placeHolders.unshift("First Name");
      lables.unshift("First Name");
      inputs.push(...["password", "tel"]);
      placeHolders.push(...["Retype Password", "Mobile number"]);
      lables.push(...["Retype Password", "Mobile number"]);
      setShow([inputs, placeHolders, lables]);
      return;
    }
    inputs = [...init[0]];
    placeHolders = [...init[1]];
    lables = [...init[2]];
    console.log(init);
    setShow([inputs, placeHolders, lables]);
  }
}

export default Login;
