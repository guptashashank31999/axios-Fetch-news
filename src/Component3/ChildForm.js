import React from 'react'
import {useState} from 'react'

const ChildForm = (props) => {

    const [userRegistration, setUserRegistration] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    const [record, setRecord] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setUserRegistration({...userRegistration, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = {...userRegistration, id: new Date().getTime().toString()}
        setRecord([...record, newRecord])
        setUserRegistration({
            name: "", email: "",
            phone: "",
            password: ""
        })


    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username' />
                    <input type="text"
                        value={userRegistration.name}
                        onChange={handleChange}
                        name="username"
                        id="username"

                    />
                </div>

                <div>
                    <label htmlFor='email' />
                    <input type="email"
                        value={userRegistration.email}
                        onChange={handleChange}
                        name='email'
                        id='email'
                    />
                </div>

                <div>
                    <label htmlFor='phonenumber' />
                    <input type="text"
                        value={userRegistration.phone}
                        onChange={handleChange}
                        name='number'
                        id='phonenumber'

                    />
                </div>

                <div>
                    <label htmlFor='password' />
                    <input type="password"
                        value={userRegistration.password}
                        onChange={handleChange}
                        name='password'
                        id='password'

                    />
                </div>

                <button type='submit'>Registration</button>
            </form>
            <div>
                {
                    record.map((currElm) => {
                        return (
                            <div key={currElm.id}>
                                <p>{currElm.username}</p>
                                <p>{currElm.email}</p>
                                <p>{currElm.phone}</p>
                                <p>{currElm.password}</p>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default ChildForm