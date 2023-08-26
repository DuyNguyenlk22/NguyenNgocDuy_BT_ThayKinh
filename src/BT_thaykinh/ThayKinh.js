import React, { Component } from "react";
import { dataGlasses } from "./data";

export default class ThayKinh extends Component {
  state = {
    name: "",
    url: "",
    desc: "",
  };
  handleChangeModel = (_name, _url, _desc) => {
    this.setState({
      name: _name,
      url: _url,
      desc: _desc,
    });
  };
  renderListGlasses = () => {
    return dataGlasses.map((item, index) => {
      return (
        <div className="col-2 ">
          <img
            onClick={() => {
              this.handleChangeModel(item.name, item.url, item.desc);
            }}
            key={index}
            src={item.url}
            style={{ width: "100%", cursor: "pointer" }}
            className="border border-dark"
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(./resource/glassesImage/background.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div style={{ backgroundColor: `rgba(0, 0, 0, 0.8)`, height: "100vh" }}>
          <h1
            className="text-light p-4 mb-4"
            style={{ backgroundColor: `rgba(0, 0, 0, 0.6)` }}
          >
            TRY GLASSES APP ONLINE
          </h1>
          <div className="container">
            <div className="row justify-content-between mb-5 ">
              <div
                className="col-4"
                style={{
                  backgroundImage: `url(./resource/glassesImage/model.jpg)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "top center",
                  height: "50vh",
                }}
              ></div>
              <div
                className="col-4"
                style={{
                  backgroundImage: `url(./resource/glassesImage/model.jpg)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "top center",
                  height: "50vh",
                  position: "relative",
                }}
              >
                <img
                  src={this.state.url}
                  style={{
                    position: "absolute",
                    width: "40%",
                    top: "25%",
                    left: "30%",
                    opacity: "0.8",
                  }}
                />
                <div
                  style={{
                    backgroundColor: `rgba(255, 200, 224, 0.6)`,
                    position: "absolute",
                    left: "45px",
                    right: "45px",
                    top: "70%",
                    bottom: "0px",
                  }}
                >
                  <div className="text-left p-3">
                    <h4>{this.state.name}</h4>
                    <p>{this.state.desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row mb-5 p-3"
              style={{ backgroundColor: "white", height: "150px" }}
            >
              <div className="row">{this.renderListGlasses()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
