import React, {Component} from 'react';
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Selector from "./Selector";
import HowToPlay from "./content/HowToPlay";
import { Switch, Route } from "react-router-dom";


class App extends Component {
    constructor(){
        super();
        this.state = {
            deckId: "",
            drawnCardvalue: "",
            count: 0,
            userCount: 0,
            drawnCardImg: "",
            remaining: 0
        }
        this.handleNewCard = this.handleNewCard.bind(this);
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleStay = this.handleStay.bind(this);
        this.handleNewGame = this.handleNewGame.bind(this);
    }

    handleNewGame(){
        axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`).then(response => {
            // console.log(response.data)
            this.setState({
                deckId: response.data.deck_id,
                remaining: 52,
                count: 0,
                userCount: 0,
                drawnCardImg: ""
            });
        });
    }

    handlePlus(){
        this.setState(prevState => {
            return {
                userCount: prevState.userCount + 1
            }
        });
        this.handleCheck();
        this.handleNewCard();
    }

    handleStay(){
        this.handleCheck();
        this.handleNewCard();
    }

    handleMinus(){
        this.setState(prevState => {
            return {
                userCount: prevState.userCount - 1
            }
        });
        this.handleCheck();
        this.handleNewCard();
    }

    handleCheck(){
        const splitState = this.state.drawnCard.split('');
        const checkedState = parseInt(splitState[0]);
        if(checkedState > 0 && checkedState < 7) {
            return this.setState(prevState => {
                return {
                    count: prevState.count + 1
                }
            });
        } else if (checkedState > 6 && checkedState < 10) {
            return this.setState(prevState => {
                return {
                    count: prevState.count + 0
                }
            });
        } else {
            return this.setState(prevState => {
                return {
                    count: prevState.count - 1
                }
            })
        }
    }

    handleNewCard(e) {
        if(this.state.remaining === 0){
            this.handleNewGame();
        } else {
            axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`).then(response => {
                this.setState(prevState => {
                    return {
                        drawnCard: response.data.cards[0].code,
                        drawnCardImg: response.data.cards[0].image,
                        remaining: prevState.remaining - 1
                    }
                });
                console.log(this.state.deckId);
            });
        }
    }

    render() {
        return (
            <div>
                <Navbar />

                <div className="backgroundColor">
                    <Switch>
                        <Route exact path="/" render={()=><Selector
                            handleNewCard={this.handleNewCard}
                            handleNewGame={this.handleNewGame}
                            handlePlus={this.handlePlus}
                            handleMinus={this.handleMinus}
                            handleStay={this.handleStay}
                            {...this.state}
                            />
                        }/>
                        <Route path="/how-to-play" component={HowToPlay}/>
                    </Switch>
                </div>

                <Footer />

            </div>
        );
    }
}

// <Selector
// handleStay={this.handleStay}
// handleNewCard={this.handleNewCard}
// handlePlus={this.handlePlus}
// handleMinus={this.handleMinus}
// handleNewGame={this.handleNewGame}
// {...this.state}
// />

export default App;
