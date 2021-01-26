import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <FormWhole>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Build your own pizza
      </h2>
      <Category>Name Your Order</Category>
      <Input type="text" style={{ width: "50%" }} />
      <Category>Choice of Size</Category>
      <Select id="size">
        <option>Tiny</option>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
        <option>X-Large</option>
      </Select>
      <Category>Choice of Sauce</Category>
      <label id="sauce">
        <Input type="radio" />
        Tomato
        <Input type="radio" />
        Alfredo
        <Input type="radio" />
        BBQ
        <Input type="radio" />
        Spicy Ranch
        <Input type="radio" />
        No Sauce
      </label>
      <Category>Choose Toppings</Category>
      <label id="topping">
        <Input type="checkbox" />
        Pepperoni
        <Input type="checkbox" />
        Sausage
        <Input type="checkbox" />
        Corned Beef
        <Input type="checkbox" />
        Chicken
        <Input type="checkbox" />
        Black Olives
        <Input type="checkbox" />
        Bell Peppers
        <Input type="checkbox" />
        Disgusting Mushrooms
        <Input type="checkbox" />
        Extra Extra Too Much Cheese
      </label>
      <Category>Special Instructions</Category>
      <label id="instructions">
        <Input
          type="text"
          style={{ height: "40px", fontSize: "20px" }}
          placeholder="none"
        />
      </label>
      <Input type="submit" value="Add to Order" />
    </FormWhole>
  );
};
export default Form;

const FormWhole = styled.div`
  border: 1px solid lightgray;
  margin: 5% 25%;
  margin-bottom: 100px;
  padding-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0 8px 6px -6px grey;
`;


const Category = styled.label`
  display: block;
  background-color: lightgray;
  padding: 20px 10px;
  font-size: 20px;
`;

const Select = styled.select`
  background-color: white;
  margin: 20px 10px;
`;

const Input = styled.input`
  background-color: white;
  margin: 20px 10px;
`;