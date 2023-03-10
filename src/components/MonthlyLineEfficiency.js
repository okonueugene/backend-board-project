import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import mqtt from "mqtt";


function MonthlyLineEfficiency() {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const client = mqtt.connect('ws://'+ window.location.host +':8083',
    {
      clientId: "mqttjs01",
      username: "ubuntu",
      password: "1234",
      port: 8083,
      keepalive: 60,
      reconnectPeriod: 1000,
    });

    client.on("connect", () => {
      console.log("connected to MQTT broker");
      console.log("publishing to topic: monthly-line-efficiency");

      client.publish("monthly-line-efficiency", JSON.stringify([inputValue])
      ,function (err) {
        if (err) {
          console.log("Error publishing to topic: monthly-line-efficiency");
        } else {
          console.log("Published to topic: monthly-line-efficiency");
        }
      }

      );
      console.log(inputValue);
      client.end();


      setInputValue("");
    });

    handleClose();
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>MONTHLY LINE EFFICIENCY KPIS</Card.Title>
          <Button variant="primary" onClick={handleShow}>
            Edit
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>MONTHLY LINE EFFICIENCY KPIS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Monthly Line Efficiency</Form.Label>
              <Form.Control type="text" placeholder="Enter Monthly Line Efficiency" value={inputValue} onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MonthlyLineEfficiency;

