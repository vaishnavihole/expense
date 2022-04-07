import React from 'react'
import './CreditTransaction.css'

function CreditTransaction(props) {
    return(
        <div className="transaction-container-credit">
             <div className="row">
            <div className="col-8">
            <h3>{props.title}</h3>
            <h4 className='text-credit-amount'>₹ {props.amount}</h4>
           
          </div>
          <div className="col-4">
          <span class="badge rounded-pill bg-success">{props.category}</span>
          </div>
          </div>
          </div>
        

  
    )
    }

         
    

export default CreditTransaction
