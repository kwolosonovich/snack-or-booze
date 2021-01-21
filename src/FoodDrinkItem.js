import React, { useState, useEffect, Component } from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodDrinkItem({ items, cantFind }) {
  const { id } = useParams();

  let snackDrink = items.find((snackDrink) => snackDrink.id === id);
  if (!snackDrink) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snackDrink.name}
          </CardTitle>
          <CardText className="font-italic">{snackDrink.description}</CardText>
          <p>
            <b>Recipe:</b> {snackDrink.recipe}
          </p>
          <p>
            <b>Serve:</b> {snackDrink.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodDrinkItem;
