import { useState } from 'react'

import './App.css'


function App() {

    const [formData, setFormData] = useState({
        fullName: '',
        phone:'',
        email: ''
    })


    const [submitData, setSubmitData] = useState(null)


    function handleChange (e){
        const {name, value} = e.target
        setFormData({...formData,[name]:value})
    }

    function handleSubmit (e){
        e.preventDefault()
        setSubmitData(formData)
    }

  return (
    <div className="registration-form">
        <h1>Регистрация пользователя</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>ФИО:</label>
                <input type="text" name='fullName' value={formData.fullName} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label>Телефон:</label>
                <input type="text" name='phone' value={formData.phone} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label>Почта:</label>
                <input type="text" name='email' value={formData.email} onChange={handleChange}/>
            </div>
            <button type='submit'>submit</button>
        </form>

        {submitData && (
            <div className='form-preview'>
                <h2>Данные</h2>
                <p>ФИО: {submitData.fullName}</p>
                <p>Телефон: {submitData.phone}</p>
                <p>Почта: {submitData.email}</p>
            </div>
        )}
    </div>

  )
}

export default App
