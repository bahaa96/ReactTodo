let React = require("react")
let moment = require("moment")

let Todo= React.createClass({
    render(){
        let {text, completed, id, createdAt, completedAt} = this.props
        let renderdelorp = ()=>{
            if (completed){
                return <del>{text}</del>
            }else {
                return <p>{text}</p>
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
                this.props.onToggle(id)
            }}>
                <label className="custom-control custom-checkbox">
                    <input type="checkbox" ref={"check"} className="custom-control-input" checked={completed}/>
                    <span className="custom-control-indicator"/>

                </label>
                {renderdelorp()}
                <small>{renderDate()}</small>
            </li>
        )
    }
})

module.exports = Todo