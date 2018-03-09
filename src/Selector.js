import React from "react";

const Selector = (props) => {
    return(
        <div className="selection">
            <div>
                <div className="center">
                    <h1>Count the cards</h1>
                </div>
                <div className="center">
                    <div className="blankCard">
                        <img src={props.drawnCardImg} alt="" />
                    </div>
                </div>
                <div className="center marginFromCard">
                    <h1>Cards remaining in deck: {props.remaining}</h1>
                </div>
                <div className="center">
                    <h1>True Count: {props.count}</h1>
                </div>
                <div className="center">
                    <button onClick={props.handleNewGame}>Get New Deck</button>
                </div>
                <div className="center">
                    <button onClick={props.handleNewCard}>Start Game</button>
                </div>
                <button onClick={props.handleMinus}>-</button>
                <button onClick={props.handleStay}>Stay</button>
                <button onClick={props.handlePlus}>+</button>

                <div className="center">
                    <h1>Your Count: {props.userCount}</h1>
                </div>
            </div>
        </div>
    )
}

export default Selector;
