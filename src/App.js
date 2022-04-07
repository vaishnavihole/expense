import React, {useState, useEffect} from 'react'
 
 import CreditTransaction from './CreditTransaction/CreditTransaction'
 import DebitTransaction from './DebitTransaction/DebitTransaction'
 import './App.css'
 
 
 function App() {
 
 
   const [transactions, setTransactions] = useState([])
 
   useEffect(()=>{
     const storedTransactions = JSON.parse(localStorage.getItem('transactions'))
     if(storedTransactions){
       setTransactions(storedTransactions)
     }
   }, [])
 
   useEffect(()=>{
     localStorage.setItem("transactions", JSON.stringify(transactions))
   }, [transactions])
 
   const [title, setTitle] = useState('')
   const [amount, setAmount] = useState('')
   const [category, setCategory] = useState('other')
 
   function addTransaction()
   {
     const transaction = {
       "title": title,
       "amount": amount,
       "category": category
     }
 
     setTransactions([...transactions, transaction]);
 
     setTitle('');
     setAmount('');
     setCategory('other');
   }
 
   function deleteAllTransactions()
   {
     localStorage.removeItem("transactions")
   }
 
   return (
     <div className="container">
       
       <div className="main-title-container">
         <h1 className="text-center mt-3 mt-3">Expense Tracker  🛍️💴</h1>
       </div>
       
       <div className="row">
 
         <div className="col-md-6">
           {
             transactions.map((obj)=>{
 
                if(obj.amount<0){
                 return (<DebitTransaction title={obj.title} amount={obj.amount} category={obj.category}/>)
                }
                else
                {
                 return (<CreditTransaction title={obj.title} amount={obj.amount} category={obj.category}/>)
                } 
                
             })
           }
         </div>
 
         <div className="col-md-6">
           <form className="from-add-transaction">
 
             <h2 className="text-center">Add Transaction</h2>
 
             <label for="input-title">Title</label>
             <input type="text" className="form-control" id="input-title" placeholder='Enter Title' 
             value={title}
             onChange={(e)=>{setTitle(e.target.value)}}/>
 
             <label for="input-amount">Amount</label>
             <input type="text" className="form-control" id="input-amount" placeholder='Enter Amount'
             value={amount}
             onChange={(e)=>{setAmount(e.target.value)}}/>
 
             <label for="input-category">Category</label>
             <select className="form-control" id="input-category" 
             value={category}
             onChange={(e)=>{setCategory(e.target.value)}}>
               <option>Select Category</option>
               <option value="bills">bills 🧾</option>
               <option value="shopping">shopping 🛍</option>
               <option value="grocery">grocery 🛒</option>
               <option value="other">other 💳</option>
             </select>
 
             <br /><br />
 
             <button type="button" className="btn btn-warning w-100" onClick={addTransaction}>Add Transaction</button>
             <button className="btn btn-danger w-100 mt-4" onClick={deleteAllTransactions}>Delete All Transaction from Storage</button>
           </form>
           
         </div>
 
        
 
 
       </div>
 
 
     </div>
   )
 }
 
 export default App