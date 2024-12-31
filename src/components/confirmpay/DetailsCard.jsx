import React, { useState } from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';

function FarmShareIsland() {
  const [nights, setNights] = useState(1);
  const [pricePerNight, setPricePerNight] = useState(18500);
  const [serviceFeePercentage, setServiceFeePercentage] = useState(0.07);
  const [taxPercentage, setTaxPercentage] = useState(0.09);

  const calculateTotal = () => {
    const basePrice = nights * pricePerNight;
    const serviceFee = basePrice * serviceFeePercentage;
    const taxes = basePrice * taxPercentage;
    const total = basePrice + serviceFee + taxes;
    return total;
  };

  const handleNightsChange = (event) => {
    setNights(parseInt(event.target.value));
  };

  const handlePricePerNightChange = (event) => {
    setPricePerNight(parseInt(event.target.value));
  };

  const handleServiceFeeChange = (event) => {
    setServiceFeePercentage(parseFloat(event.target.value));
  };

  const handleTaxChange = (event) => {
    setTaxPercentage(parseFloat(event.target.value));
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Image src="/path/to/island-image.jpg" fluid /> {/* Replace with actual image path */}
        </Col>
        <Col md={8}>
          <h3>VINI'S FARM-SHARE AN ISLAND</h3>
          <p>Room in island</p>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nights:</Form.Label>
              <Form.Control type="number" value={nights} onChange={handleNightsChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price per night:</Form.Label>
              <Form.Control type="number" value={pricePerNight} onChange={handlePricePerNightChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Service Fee (%):</Form.Label>
              <Form.Control type="number" step="0.01" value={serviceFeePercentage} onChange={handleServiceFeeChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tax (%):</Form.Label>
              <Form.Control type="number" step="0.01" value={taxPercentage} onChange={handleTaxChange} />
            </Form.Group>
          </Form>

          <h5>Price details</h5>
          <ul>
            <li>
              {nights} nights x ₹{pricePerNight}: ₹{(nights * pricePerNight).toLocaleString('en-IN')}
            </li>
            <li>
              Airbnb service fee: ₹{calculateTotal() - (nights * pricePerNight).toLocaleString('en-IN')}
            </li>
            <li>
              Taxes: ₹{(calculateTotal() - (nights * pricePerNight) - (calculateTotal() - (nights * pricePerNight))).toLocaleString('en-IN')}
            </li>
          </ul>

          <hr />

          <h5>Total (INR): ₹{calculateTotal().toLocaleString('en-IN')}</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default FarmShareIsland;