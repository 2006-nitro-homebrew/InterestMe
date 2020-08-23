import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logout} from '../store/user'

const Navbar = ({ handleClick, isLoggedIn }) => (
    <div>
        <h2>Offline Reader</h2>
        <nav>
            {isLoggedIn ? (
                <div>
                    {/* The navbar will show these links after you log in */}
                    <Link to="/home">Home</Link>
                    <Link to="/readinglist">Reading List</Link>
                    <a href="#" onClick={handleClick}>
                        Logout
            </a>
                </div>
            ) : (
                    <div>
                        {/* The navbar will show these links before you log in */}
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                )}
        </nav>
        {/* <hr /> */}
    </div>
)

const mapState = state => {
    return {
        isLoggedIn: !!state.user.email
    }
}

const mapDispatch = dispatch => {
    return {
        handleClick() {
            dispatch(logout())
        }
    }
}

export default connect(mapState, mapDispatch)(Navbar)
