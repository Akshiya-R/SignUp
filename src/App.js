import './style.css'


import React, { useState } from "react"

export default function App() {
    
    
    const [formElements, setFormElement] = useState({
      email:'', password:'', confirmPassword:'', emailSend:true
    })

    function handleChange(event){
      const {name,value,type,checked} = event.target
      setFormElement(
        prevData => {
          return{
            ...prevData,
            [name]: type === "checkbox"? checked: value
          }
        }
      )
    }

    function handleSubmit(event) {
        event.preventDefault()
        
        if (formElements.password === formElements.confirmPassword && formElements.password){
          console.log("Successfully signed up")
          alert("Successfully signed up!🤩")
        }
        else{
          console.log("passwords to not match")
          alert("Passwords to not match👎")
          return;
          
        }
        if(formElements.emailSend){
          alert("Thanks for signing up for our newsletter!😍")
        }

    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name='email'
                    value={formElements.email}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name='password'
                    value={formElements.password}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name='confirmPassword'
                    value={formElements.confirmPassword}
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name='emailSend'
                        checked={formElements.emailSend}
                        onChange={handleChange}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                    type='submit'
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}
