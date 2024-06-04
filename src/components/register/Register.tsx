import React from 'react'
import { Form } from 'react-router-dom'

export default function Register() {
  return (
    <div>Register
        <form action=''>
            <label htmlFor="">email</label>
            <input type="text" /><br />
            <label htmlFor="">name</label>
            <input type="text" /><br />
            <label htmlFor="">password</label>
            <input type="text" /><br />
            <label htmlFor="">confirm password</label>
            <input type="text" /><br />
            <button>Register</button>
        </form>
    </div>
  )
}
