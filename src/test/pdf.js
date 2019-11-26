import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import Doc from "./DocService";
import PdfContainer from "./PDFContainer.js";

export default class PDF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Still, Jaime",
      rank: "SGT",
      description: "Demonstrate how to export an HTML section to PDF"
    };
  }

  onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(state => {
      state[name] = value;
      return state;
    });
  };

  createPdf = html => Doc.createPdf(html);

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <section className="header-bar">
          <span className="header">Export React Component to PDF</span>
        </section>
        <PdfContainer createPdf={this.createPdf}>
          <React.Fragment>
            <section className="flex-column">
              <h2 className="flex">Form Name</h2>
              <section className="flex-row">
                <input
                  placeholder="Rank"
                  name="rank"
                  value={this.state.rank}
                  onChange={this.onChange}
                />
                <input
                  className="flex"
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </section>
              <textarea
                rows="20"
                placeholder="Description"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
              />
            </section>
          </React.Fragment>
        </PdfContainer>
      </React.Fragment>
    );
  }
}

// render(<PDF />, document.getElementById("root"));