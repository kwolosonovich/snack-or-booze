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

  // use context to store menu names 
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
            Our curent favorites to enjoy:
          </CardText>
          <ListGroup>
            { !menuItems ? <h1>No current items</h1> : menuItems.map((item) => (
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
