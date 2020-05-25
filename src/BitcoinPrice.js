import React from 'react';

export default class BitcoinPrice extends React.Component {

    constructor(props) {

        super(props);
        this.state = {bpi:{},  currency:'USD'}

    }
    componentDidMount() {
        console.log("component app mounted");
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res=>res.json())
            .then(data =>
                this.setState({bpi:data.bpi}))

    }

    handleSelect(e){
        this.setState({currency:e.target.value})
    }


    render() {
        const currencySymbols = {'USD':'$', 'EUR':'€' ,'GBP':'£'}


        return(
            <div className={"Countdown"}>
                <div className="Countdown-col currency">
                    <span> 1 bitcoin = </span>
                </div>
                <div className="Countdown-col currency">
                <select placeholder='Select your currency' onChange={(e)=>this.handleSelect(e)}
                        name="currency" value={this.state.currency}>
                    {
                        Object.keys(this.state.bpi).map((element,index,array)=>{
                            return <option key={`currency${element}${index}`}>
                                    {element}
                            </option>
                        })
                    }
                </select>
                </div >
                {this.state.bpi[this.state.currency] !== undefined ?
                    <div className="Countdown-col currency">
                        <span>
                            {currencySymbols[this.state.bpi[this.state.currency].code] !== undefined ?
                                currencySymbols[this.state.bpi[this.state.currency].code]
                            :
                            null}
                        </span>
                        <span>
                            {this.state.bpi[this.state.currency].rate }
                        </span>
                        </div>
                    :
                    null
                    }


                    {this.state.bpi[this.state.currency] !== undefined ?
                        <div className="currency"> He had 2 full 🍕 worth <mark>$ {parseFloat(this.state.bpi["USD"].rate) * 10000}</mark> on this day 😲
                        </div>
                        :
                        null
                    }



            </div>
        );
    }
}