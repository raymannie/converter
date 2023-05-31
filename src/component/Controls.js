import { useState } from "react";

const Controls = ({ selectedCurrency, setSelectedCurrency, handleCurrencyChange, setAmount, data, amount }) => {
    const [dropDown, setDropdown] = useState(false)
    const [err, setError] = useState(false)

    const currencieBalance = data

    const getSelectedCurrencyBalannce = currencieBalance.find(itm => itm.currency === selectedCurrency)

    const checkAmount = () => {
        if (getSelectedCurrencyBalannce.balance < amount) {
            setError(true)
        } else {
            setError(false)
        }
    }

    return (
        <div className='mb-30 dropdown-cntainer' >
            <div className="dropdown-cntainer" onClick={() => setDropdown(!dropDown)}>
                <div className='controls'>
                    <p>{selectedCurrency} Wallet</p>
                    <span className={dropDown ? 'open' : ''}></span>
                    <div>
                        <p className="small-text">Balance</p>
                        <p>{getSelectedCurrencyBalannce.sign}{getSelectedCurrencyBalannce.balance.toLocaleString("en-US", { style: "decimal" })}</p>
                    </div>
                </div>
                {err && <p>Insufficient balance</p>}
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