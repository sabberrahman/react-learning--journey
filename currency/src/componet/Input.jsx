import { useId } from "react";

function InputBox({
    label,
    amount,
    OnAmountChange,
    onCurrencyChange,
    currencyOptions=[],// default empty value jaty crash na hoy 
    selectCurrency="usa",
    amountDisable=false,
    currencyDisable=false,
    className = "",
}) {
   const amountInputId = useId(); //uniq id generate 

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                   { label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>OnAmountChange && OnAmountChange(Number(e.target.value))} //check kora asekina then call korbe 
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)} // string ka num agae convert korar dorkar nae aine
                    disabled={currencyDisable}

                    
                >
                    
                       {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option>

                       ))}
                         {/* Loops er moddy key passkorte hobe jsx er moddy performance valo korar jonooo */}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox; 