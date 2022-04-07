import React from 'react'
import './DebitTransaction.css'

function DebitTransaction(props) {
    return(
        <div className="transaction-container-debit">
            <h3>{props.title}</h3>
            <h4 className='text-debit-amount'>₹ {props.amount}</h4>
            <div className="row">
            <div className="col-8">
          </div>
          <div className="col-4">
          <span class="badge rounded-pill bg-danger">{props.category}</span>
          </div>
          </div>
          </div>
        

  
    )
    }

         
    

export default DebitTransaction
