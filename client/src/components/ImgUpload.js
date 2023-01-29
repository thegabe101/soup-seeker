// import "../App.css";
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
            localStorage.setItem('profilepicture', img)
            this.setState({ avatar: img });
        };
    };

    render() {
        return (
            <div>
                {!localStorage.getItem('profilepicture') && <input type="file" onChange={this.handleChange} />}
                <div>
                    {!localStorage.getItem('profilepicture') ? <img src={this.state.avatar} /> : <img src={localStorage.getItem('profilepicture')} alt="A profile picture." className="profImg" />}
                </div>
            </div>
        );
    }
}

export default ProfImg;
