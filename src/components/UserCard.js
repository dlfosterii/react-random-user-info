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
                    usrImage: r.picture.large,
                    usrFirstName: r.name.first,
                    usrLastName: r.name.last,
                    usrHouseNumber: r.location.street.number,
                    usrStreet: r.location.street.name,
                    usrCity: r.location.city,
                    usrState: r.location.state,
                    usrZip: r.location.postcode,
                    usrPhone: r.phone,
                    usrBirthday: r.dob.date,
                    usrAge: r.dob.age,
                    usrEmail: r.email,

                })
                console.log(data)
                console.log(r.picture.large)
            });
    }
    render() {

        return (
            <div>

                <br/><img src={this.state.usrImage} alt=""></img><br />

                <label>{this.state.usrFirstName} {this.state.usrLastName}</label><br />
                <label>{this.state.usrHouseNumber} {this.state.usrStreet}</label><br />
                <label>{this.state.usrCity}, {this.state.usrState} {this.state.usrZip}</label><br />
                <label>{this.state.usrPhone}</label><br />
                <label>{this.state.usrEmail}</label><br />
                <label>Birthday: {this.state.usrBirthday}</label><br />
                <label>Age: {this.state.usrAge}</label><br />

                <button onClick={this.getNewUser}>Get New User</button>

            </div>
        )
    }
}
