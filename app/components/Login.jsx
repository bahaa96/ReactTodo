import React from "react"
import * as actions from "actions"
import {connect} from "react-redux"

export let Login = React.createClass({
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 col-md-8 col-lg-4 card mt-5 text-center bg-faded p-3">
                            <h1 className="card-title">Login</h1>
                            <h6 className="card-subtitle">Login with GitHub account below</h6>
                            <button className="btn btn-primary" onClick={()=>{
                                this.props.dispatch(actions.startLogin())
                            }}>Login with GitHub</button>
                    </div>
                </div>
            </div>
        )
    }
})

export default connect()(Login)