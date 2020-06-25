import React from 'react'
import { addUser } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Form extends React.Component {
    constructor() {
		super()
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            role: 'Client'
        }
    }

    handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		})
    }

    createUser = (evt) => {
        evt.preventDefault()

        const { name, username, email, password, role } = this.state

        this.props.addUser(name, username, email, password, role)
            .then(() => {
                this.props.history.push('/users')
            })
            .catch((err => {
                console.log(err)
            })) 
    }

    render () {
        const { name, username, email, password, role } = this.state
        const {fetchingUsers, error} = this.state

        return (
            <form onSubmit={this.createUser}>
                {error && <p className='error'>{error}</p>}
				<h1>Sign Up</h1>
                <label>
                Name:
                <input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
                </label>
                <label>
                Username:
                <input type="text" name="username" placeholder="username" value={username} onChange={this.handleChange} />
                </label>
                <label>
                Password:
                <input type="password" name="password" placeholder="password" value={password} onChange={this.handleChange} />
                </label>
                <label>
                Email:
                <input type="email" name="email" placeholder="Age" value={email} onChange={this.handleChange} />
                </label>
                <label>
                 Role:
                <select name='role' value={role} onChange={this.handleChange}>
                <option value='Client'>Client</option>
                <option value='Instructor'>Instructor</option>
                </select>
                </label>

				{fetchingUsers ? <p>Loading...</p> : <button type="submit">Create User</button>}
			</form>
        )
    }
}


const mapDispatchToProps = {
    addUser,
}

const mapStateToProps = (state) => ({
    fetchingUsers: state.fetchingUsers,
    error: state.error
})

export default withRouter(connect(
        mapStateToProps,
        mapDispatchToProps,
    )(Form)
) 