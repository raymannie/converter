import { useState } from "react";

const ControlsAlt = ({ selectedCurrency, setSelectedCurrency, amount, data }) => {
    const [dropDown, setdropDown] = useState(false)

    const currencieBalance = data

    const getSelectedCurrencyBalannce = currencieBalance.find(itm => itm.currency === selectedCurrency)

    return (
        <div className='mb-30 dropdown-cntainer' >
            <div className="dropdown-cntainer" onBlur={() => setdropDown(false)} onClick={() => setdropDown(!dropDown)}>
                <div className='controls'>
                    <p>Convert to</p>
                    <span className={dropDown ? 'open' : ''}></span>
                    <div>
                        <p className="small-text">Balance</p>
                        <p>{getSelectedCurrencyBalannce.sign} {getSelectedCurrencyBalannce.balance.toLocaleString("en-US", { style: "decimal" })}</p>
                    </div>
                </div>
                {dropDown && <div className="dropdown">
                    {currencieBalance.filter(itm => itm.currency !== selectedCurrency).map((list, index) =>
                        <p onClick={() => setSelectedCurrency(list.currency)} key={index}>{list.currency}</p>
                    )}
                </div>}
            </div>
            <input value={amount} disabled className='input' />
        </div>
    );
}

export default ControlsAlt;