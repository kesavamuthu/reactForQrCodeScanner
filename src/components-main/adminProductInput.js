import React, { useState } from "react";
import {
  InputGroup,
  Col,
  Alert,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function AdminProductInput() {
  const [show, setShow] = useState(true);

  return (
    <Form.Row className="mt-3">
      <Form>
        <Form.File
          id="custom-file-translate-scss"
          label="Product image"
          lang="en"
          custom
        />
      </Form>
      <Form.Group as={Col} controlId="formGridProduct">
        <Form.Control type="text" placeholder="Product Name" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridPrice">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text> &#8377;</InputGroup.Text>
          </InputGroup.Prepend>
          {/* <FormControl aria-label="Amount (to the nearest dollar)" /> */}
          <Form.Control type="number" placeholder="Total price" />
          <InputGroup.Append>
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridQuantity">
        <Form.Control type="number" placeholder="Qunatity" />
      </Form.Group>
      {show ? (
        <Alert
          variant="danger"
          onClose={() => setShow(false)}
          dismissible
          // style={{ padding: "0.5rem" }}
        >
          Qr absence!!!
        </Alert>
      ) : null}
    </Form.Row>
  );
}

export default AdminProductInput;
