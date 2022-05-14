import React, {Component} from 'react'
import axios from 'axios'

export default class AxiosApiClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name] : e.target.value})
    }
    submitHandler = e => {
        e.prevntDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts' , this.state).then(response => {
            console.log(response)
        }).catch(error => {console.log(error)})
    }
    render() {

        const {userId , title , body} = this.state;
        return (
            <>     <div>AxiosApiClass</div>
                <form onSubmit={this.submitHandler}>
                    <input  type="text" onChange={this.changeHandler} name="userId" value={userId}></input>
                    <input  type="text" onChange={this.changeHandler} name="title" value={title}></input>
                    <input  type="text" onChange={this.changeHandler} name="body" value={body}></input>
                    <button type="submit">Submit</button>
               </form>

            </>
        )
    }
}
