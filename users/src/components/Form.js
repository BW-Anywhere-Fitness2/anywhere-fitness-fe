import React from 'react'
import { addUser } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Form extends React.Component {
    constructor() {
		super()
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		})
    }

    createUser = (evt) => {
        evt.preventDefault()

        const { name, age, height } = this.state

        this.props.addUser(name, age, height)
            .then(() => {
                this.props.history.push('/users')
            })
            .catch((err => {
                console.log(err)
            })) 
    }

    render () {
        const { name, age, height } = this.state
        const {fetchingUsers, error} = this.state

        return (
            <form onSubmit={this.createUser}>
                {error && <p className='error'>{error}</p>}
				<h1>Create New User</h1>

                <input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
				<input type="number" name="age" placeholder="Age" value={age} onChange={this.handleChange} />
				<input type="text" name="height" placeholder="Height" value={height} onChange={this.handleChange} />

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