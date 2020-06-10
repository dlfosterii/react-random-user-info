import React, { Component } from 'react'

export default class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usrImage: ''
        }
    }
    componentDidMount() {
        this.getNewUser()

    }
    // this is a function to get a new user
    getNewUser = () => {
        console.log('mounted to card')
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                const r = data.results[0]
                this.setState({
                    usrImage : r.picture.large,
                    usrName : r.name.first,
                    usrPhone: r.phone,
                })
                console.log(data)
                console.log(r.picture.large)
            });
    }
    render() {

        return (
            <div>
                
                    <img src={this.state.usrImage} alt=""></img><br/>
                
                    <label>{this.state.usrName}</label><br/>
                
                    <label>{this.state.usrPhone}</label><br/>
                
                    <button onClick={this.getNewUser}>Get New User</button>
                
            </div>
        )
    }
}
