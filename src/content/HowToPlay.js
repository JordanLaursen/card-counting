import React from "react";

const HowToPlay = () => {
    return(
        <div className="howToPlayContainer">
            <h1>About This App</h1>
            <p>This idea of this app is simple. All this app is doing, is helping players practice counting cards.</p>
            <h1>How To Play:</h1>
            <h3>Simple instructions:</h3>
            <p>If your current card is between 2 and 6 you must raise your count by 1</p>
            <p>If your current card is between 1 and 9 keep your count as is</p>
            <p>If your current card is a 10 or a face card you must lower your count by 1</p>
            <h3>The goal of counting cards:</h3>
            <p>The goal of a card counting system is to assign point values that are either high points or low points. While the decks count is high then there is a better chance of getting a blackjack or high cards, and while the deck count is low there is a better chance of getting smaller cards. By understanding how to count cards in blackjack, a player is giving themselves an advantage over the house which can lead to higher winnings or if in a bad scenario it may help a player break even.</p>
        </div>
    );
}

export default HowToPlay;
