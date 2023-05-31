import { useState } from "react";

const Controls = ({ selectedCurrency, setSelectedCurrency, handleCurrencyChange, setAmount, data }) => {
    const [dropDown, setdropDown] = useState(false)

    const currencieBalance = data

    const getSelectedCurrencyBalannce = currencieBalance.find(itm => itm.currency === selectedCurrency)

    return (
        <div className='mb-30 dropdown-cntainer' >
            <div className="dropdown-cntainer" onClick={() => setdropDown(!dropDown)}>
                <div className='controls'>
                    <p>NGN Wallet</p>
                    <span></span>
                    <div>
                        <p>Balance</p>
                        <p>{getSelectedCurrencyBalannce.sign} {getSelectedCurrencyBalannce.balance}</p>
                    </div>
                </div>
                {dropDown && <div className="dropdown">
                    {currencieBalance.filter(itm => itm.currency !== selectedCurrency).map((list, index) =>
                        <p onClick={() => setSelectedCurrency(list.currency)} key={index}>{list.currency}</p>
                    )}
                </div>}
            </div>
            <input onChange={(e) => setAmount(e.target.value)} className='input' />
        </div>
    );
}

export default Controls;