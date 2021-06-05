import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import FirebaseService from "../firebase/db";
class CustomerEdit extends Component {
  emptyCustomer = {
    address: "",
    neighborhood: "",
    rooms: 0,
    baths: 0,
    date: new Date().toLocaleDateString(),
    price: 0,
    floorSpace: 0,
    pool: false,
    key: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyCustomer,
    };
  }

  componentDidMount = () => {
    let key = this.props.match.params.key;
    if (key !== "new") {
      FirebaseService.get(key).on("value", this.onDataChange);
    }
  };

  componentWillUnmount = () => {
    FirebaseService.getAll().off("value", this.onDataChange);
  };

  onDataChange = (item) => {
    let data = item.val();
    let customer = {
      rooms: data.rooms,
      neighborhood: data.neighborhood,
      baths: data.baths,
      rooms: data.rooms,
      price: data.price,
      floorSpace: data.floorSpace,
      key: data.key,
    };
    console.log(customer);

    this.setState({
      item: customer,
    });
  };

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    let item = { ...this.state.item };
    item[name] = value;
    this.setState({ item });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { item } = this.state;
    let key = this.props.match.params.key;
    if (key !== "new") {
      FirebaseService.update(key, item);
    } else {
      FirebaseService.addCustomer(item);
      console.log(key);
    }

    this.props.history.push("/estate");
  };

  render = () => {
    const { item } = this.state;
    const title = <h2>{item.key ? "editar casa" : "Agregar Inmueble"}</h2>;

    return (
      <>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="address">Dirrecion</Label>
            <Input
              type="text"
              name="address"
              id="address"
              value={item.address || ""}
              onChange={this.handleChange}
              autoComplete="address"
            />
          </FormGroup>

          <FormGroup>
            <Label for="neighborhood">Barrio</Label>
            <Input
              type="text"
              name="neighborhood"
              id="neighborhood"
              value={item.neighborhood || ""}
              onChange={this.handleChange}
              autoComplete="neighborhood"
            />
          </FormGroup>

          <FormGroup>
            <Label for="rooms">Habitaciones </Label>
            <Input
              type="text"
              name="rooms"
              id="rooms"
              value={item.rooms || ""}
              onChange={this.handleChange}
              autoComplete="rooms"
            />
          </FormGroup>

          <FormGroup>
            <Label for="baths">Baños</Label>
            <Input
              type="text"
              name="baths"
              id="baths"
              value={item.baths || ""}
              onChange={this.handleChange}
              autoComplete="baths"
            />
          </FormGroup>

          <FormGroup>
            <Label for="price">Precio</Label>
            <Input
              type="text"
              name="price"
              id="price"
              value={item.price || ""}
              onChange={this.handleChange}
              autoComplete="price"
            />
          </FormGroup>

          <FormGroup>
            <Label for="floorSpace">metros cuadrados</Label>
            <Input
              type="text"
              name="floorSpace"
              id="floorSpace"
              value={item.floorSpace || ""}
              onChange={this.handleChange}
              autoComplete="floorSpace"
            />
          </FormGroup>

          <FormGroup style={{ justifyContent: "center" }}>
            <Label for="pool" style={{ marginRight: 30 }}>
              Piscinia{" "}
            </Label>
            <Input
              type="checkbox"
              placeholder="piscina?"
              onChange={(e) => console.log(e.target.checked)}
            />
          </FormGroup>

          <FormGroup>
            <Button color="primary" type="submit">
              Save
            </Button>{" "}
            <Button color="secondary" tag={Link} to="/estate">
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </>
    );
  };
}

export default withRouter(CustomerEdit);
