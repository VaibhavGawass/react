import React ,{useId} from "react";

function InputBox({ 
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency ="usd",
    amountDisable,
    currencyDisable,
    classGiven = "" }) {

        const amountInputId = useId();

        return(
          <div className={`bg-white p-3 rounded-lg text-sm flex ${classGiven}`}>
            <div className="w-1/2">
              <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
              {label}</label>
              <input
                id={amountInputId}
                className="outline-none w-full bg-transparent py-1.5"
                type="number"
                placeholder="Amount"
                disabled={amountDisable}
                value={amount}
                onChange={(e) =>
                  onAmountChange && onAmountChange(Number(e.target.value))
                }
              />
            </div>
            <div className="flex flex-wrap w-1/2 justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                className="outline-none px-1 py-1 rounded-lg bg-grey-100 cursor-pointer "
                value={selectCurrency}
                onChange={(e) => {
                  onCurrencyChange && onCurrencyChange(e.target.value);
                }}
                disabled={currencyDisable}
              >
                {currencyOptions.map((currency) => (
                  <option value={currency} key={currency}>
                  {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );
    }

export default InputBox;