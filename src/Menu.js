import React, { useState, useEffect, Component, useContext } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import MenuContext from "./MenuContext";

function Menu({ name }) {

    let getContext = useContext(MenuContext)

    let menuItems = getContext[name]

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {name} Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {menuItems.map((item) => (
              <Link to={`/${name}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
