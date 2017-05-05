let React = require("react")
let moment = require("moment")
let {connect} = require("react-redux")

let actions = require("actions")

export let Todo = React.createClass({
    render(){
        let {text, completed, id, createdAt, completedAt} = this.props
        let renderCompletedOrNot = ()=>{
            if (completed){
                return <del><h4>{text}</h4></del>
            }else {
                return <h4>{text}</h4>
            }
        }
        let renderDate = ()=>{
            let message = "Created @"
            let date = moment.unix(createdAt).format("MMM Do, Y @ h:mm a")
            if (completed){
                message = "Completed @"
                date = moment.unix(completedAt).format("MMM Do, Y @ h:mm a")
            }
            return message + date
        }
        return (
            <li onClick={(e)=>{
                e.preventDefault()
                this.props.dispatch(actions.toggleTodo(id))
            }}>
                <label className="custom-control custom-checkbox">
                    <input type="checkbox" ref={"check"} className="custom-control-input" checked={completed}/>
                    <span className="custom-control-indicator"/>

                </label>
                <div className="flex-column">
                    {renderCompletedOrNot()}
                    <p>{renderDate()}</p>
                </div>

            </li>
        )
    }
})

export default  connect()(Todo)
