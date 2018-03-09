// import axios from "axios";
// import thunk from "redux-thunk"
//
//
// const initialState = {
//     deckId: "",
//     drawnCardvalue: "",
//     count: 0,
//     userCount: 0,
//     drawnCardImg: "",
//     remaining: 0
// }
//
// export function newDeck() {
//     return dispatch => {
//         dispatch({
//             type: "NEW_DECK"
//         });
//
//         handleNewGame(){
//             axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`).then(response =>
//                 this.setState({
//                     deckId: response.data.deck_id,
//                     remaining: 52,
//                     count: 0,
//                     userCount: 0,
//                 });
//             });
//         }
//     }
// }
//
// export function newCard(){
//     return dispatch => {
//         dispatch({
//             type: "NEW_CARD"
//         });
//         handleNewCard(e) {
//             if(this.state.remaining === 0){
//                 this.handleNewGame();
//             } else {
//                 axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`).then(response => {
//                     this.setState(prevState => {
//                         return {
//                             drawnCard: response.data.cards[0].code,
//                             drawnCardImg: response.data.cards[0].image,
//                             remaining: prevState.remaining - 1
//                         }
//                     });
//                     console.log(this.state.deckId);
//                 });
//             }
//         }
//     }
// }
//
// function reducer(state = initialState, action){
//     switch (action.type) {
//         case "NEW_DECK":
//             return
//         default:
//             return state;
//
//     }
// }
//
// export default reducer;
