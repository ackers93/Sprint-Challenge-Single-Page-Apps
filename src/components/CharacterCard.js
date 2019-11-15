import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";

export default function CharacterCard(props) {
  return (
    <Col xs="12" s="6" md="4">
      <Card>
        <CardBody>
          <CardTitle> {props.name}</CardTitle>
          <CardText>{props.gender}</CardText>
          <CardSubtitle>Species: {props.species}</CardSubtitle>
          <CardSubtitle>Status:{props.status}</CardSubtitle>
        </CardBody>
      </Card>
    </Col>
  )
}


