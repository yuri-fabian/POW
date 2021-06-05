import React, { Component } from "react";
import ImageUpload from "./ImageUpload";
import CustomerEdit from "./CustomerEdit";
import { Container } from "reactstrap";

export default class Form extends Component {
  render() {
    return (
      <Container>
        <div class="row" style={{ marginTop: 100 }}>
          <div class="column" style={{ margin: 20 }}>
            <ImageUpload />
          </div>
          <div class="column" style={{ margin: 20 }}>
            <CustomerEdit />
          </div>
        </div>
      </Container>
    );
  }
}
