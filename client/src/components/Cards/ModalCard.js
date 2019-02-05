import React, {Component} from "react";
import "./ModalCard.css"

class ModalCard extends Component{
    render(){
        return (
            <div onClick={this.props.handleModal} className="ModalBackground">
                <div className="ModalBox">
                    <h1>Modal</h1>
                </div>
            </div>
        )
    }
}
export default ModalCard;