import tick from "./images/icon-complete.png"
import { useState } from 'react';
import './App.css'

export const App = () => {


     function format(s) {
         return s.toString().replace(/\d{4}(?=.)/g, '$& ');
    }


    const [confirmed, setConfirmed] = useState(false)
    const [data, setData] = useState({
            cardName: "",
            cardNumber: "",
            cardM: "",
            cardY: "",
            cardCVV: ""
    })

    const {cardName, cardNumber, cardM, cardY , cardCVV} = data

    const reset = () => {
        setConfirmed(false);
        setData({
            cardName: "",
            cardNumber: "",
            cardM: "",
            cardY: "",
            cardCVV: ""
        })
    }


    const onChange = (e) =>{
        const re = /^[0-9\b]+$/;
        const name = e.target.name;
        const value = e.target.value;

        if (e.target.value == '' || re.test(e.target.value)) {
            setData({...data, [name]: value})
        }
      }
      const onChangeL = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const reL = /^[A-Za-z]+$/;
        if (value === "" || reL.test(value)) {
            setData({...data, [name]: value})
    }
      }



    const handleSubmit = (e) => {
        e.preventDefault();
        

    }


    const ThankYou = ({setConfirmed}) => {

        return (
            <>
            <div className="containerThankYou">
                <img src={tick} alt="" className="imgThankYou"/>
                <h1 className="center">Thank You!</h1>
                <p className="center">We've added your card details</p>
                <button onClick={reset} >Continue</button>
            </div>
                
            </>
        )
      }
    
  return (
    <>
        <div className="container">
            <div className="card">
                <div className="containerCF">
                    <p id='cNumber'>{format(cardNumber)}</p>
                    <p id='cName'>{cardName}</p>
                    <p id='cExpDate'>{cardM}/{cardY}</p>
                </div>
                <div className="containerCB">
                    <p id='cvv'>{cardCVV}</p>
                </div>
                
            </div>
            {!confirmed && <div className="form">
                <div className="containerForm">
                    <form method='post' onSubmit={handleSubmit}>
                        <p className='formTitle'>CARDHOLDER NAME</p>
                        <input type="text" name="cardName" id="cardName" placeholder='e.g. Ricardo Garcia' className='input' value={cardName} onChange={onChangeL} required/>
                        <p className='formTitle'>CARD NUMBER</p>
                        <input type="text" name="cardNumber" id="cardNumber" placeholder='e.g. 1234 56789 9123 0000' className='input' maxLength="16" value={cardNumber} onChange={onChange} required/>
                        <p className='formTitleS'>EXP. DATE (MM/YY)</p>
                        <input type="text" name="cardM" id="cardM" placeholder='MM' className='inputS' maxLength="2" value={cardM} onChange={onChange} required/>
                        <input type="text" name="cardY" id="cardY" placeholder='YY' className='inputS' maxLength="2" value={cardY} onChange={onChange} required/>
                        <p className='formTitle'>CVC</p>
                        <input type="text" name="cardCVV" id="cardCV" placeholder='e.g. 123' className='inputS' maxLength="3" value={cardCVV} onChange={onChange} required/>
                        <button onClick={() => setConfirmed(true)} className='btnConfirm'>Confirm</button>
                    </form>
                </div>
            </div>}
        </div>
        {confirmed && <ThankYou setConfirmed={setConfirmed} />}
    </>
  )

  
}
