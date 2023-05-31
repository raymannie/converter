import { useEffect, useState } from "react";
import Controls from "./Controls";
import ControlsAlt from "./ControlsAlt";

const CurrencyConverter = () => {

    // const [currencies, setCurrencies] = useState([])
    const [selectedCurrency1, setSelectedCurrency1] = useState('NGN')
    const [selectedCurrency2, setSelectedCurrency2] = useState('USD')
    const [rate, setRate] = useState({})
    const [amount, setAmount] = useState(0)
    const [amount2, setAmount2] = useState('')

    const currencieBalance = [
        {
            currency: 'USD',
            balance: 5000,
            sign: "$"
        },
        {
            currency: 'GBP',
            balance: 2000,
            sign: "£"
        },
        {
            currency: 'EUR',
            balance: 3500,
            sign: "€"
        },
        {
            currency: 'NGN',
            balance: 200000,
            sign: "₦"
        },
    ]


    const handleCurrencyChange = () => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${selectedCurrency1}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data.rates);
                // setRate(data.rates)
                const conversionRate = data.rates[selectedCurrency2]

                const conversionValue = conversionRate * amount

                setAmount2(conversionValue.toFixed(2))

                console.log(selectedCurrency2, conversionValue);

            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        handleCurrencyChange()
    }, [selectedCurrency2, amount])


    return (
        <>
            <div className="App">
                <div className='main-wrapper'>
                    <div className='main-wrapper-container'>
                        <h2 className='title'>Convert from one to annother currency</h2>
                        <div className='container'>
                            <div>
                                <Controls
                                    data={currencieBalance}
                                    selectedCurrency={selectedCurrency1}
                                    setSelectedCurrency={setSelectedCurrency1}
                                    handleCurrencyChange={handleCurrencyChange}
                                    setAmount={setAmount}
                                />
                                <ControlsAlt
                                    data={currencieBalance}
                                    selectedCurrency={selectedCurrency2}
                                    setSelectedCurrency={setSelectedCurrency2}
                                    amount={amount2}
                                />
                                <div>
                                    <button className='btn'>Convert</button>
                                </div>
                            </div>
                            <div className='right-container'>
                                <div>
                                    <p>You are converting</p>
                                    <p>You'll get</p>
                                    <p>You are converting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CurrencyConverter;