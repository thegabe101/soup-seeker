import "../App.css";
import React, { Component } from "react";

class ProfImg extends Component {
    constructor() {
        super();

        this.state = { avatar: "" };
    }

    handleChange = (event) => {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (e) => {
            let img = e.target.result;
            this.setState({ avatar: img });
        };
    };

    render() {
        return (
            <div>
                <input type="file" onChange={this.handleChange} />
                <div>
                    <img src={this.state.avatar} className="profImg" alt="" />
                </div>
            </div>
        );
    }
}

export default ProfImg;
