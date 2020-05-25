import React from 'react';
import pizza from './images/pizza.png';
import message from './images/message.png'
import Countdown from "./Countdown";
import BitcoinPrice from "./BitcoinPrice";
import Message from "./Message";
import './App.css';

export default class App extends React.Component{

    constructor(props) {

        super(props);
        this.state = { showModal:false}

    }

    handleCloseModal () {
        this.setState({ showModal: false});
    }

  render() {
      //console.log("in app", this.state.bpi["USD"]=== undefined);
      const currentDate = new Date();
      const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
        <div className="App content-wrap">
          <img className={"pizzaImage"} src={pizza} />
            <Countdown date={`${year+1}-05-22T00:00:00`} />
            <img className={"message"} src={message} onClick={()=>this.setState({showModal:!this.state.showModal})}/>
            <BitcoinPrice />
            {this.state.showModal ? <Message showModal={this.state.showModal} closeModal={()=>this.handleCloseModal()}/> :null}
            <footer>
                Copyright © 2020 Bitcoin Pizza Day - All Rights Reserved.<br/>
                    Powered by <a href={"https://www.coindesk.com/price/bitcoin"} >CoinDesk</a>
            </footer>
        </div>
    );
  }


}

