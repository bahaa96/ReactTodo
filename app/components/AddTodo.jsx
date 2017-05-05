let React = require("react")
let {connect} = require("react-redux")
let actions = require("actions")

export let AddTodo = React.createClass({
    formSubmitted(e){
      e.preventDefault()
        let text = this.refs.text.value
        if (text){
            this.props.dispatch({
                type: "ADD_TODO",
                text
            })
            this.refs.text.value = ""
        }else {
            this.refs.text.focus()
        }
    },
    render(){
        return (
            <form onSubmit={this.formSubmitted}>
                <input type="text" className="form-control" ref={"text"} placeholder="What do need to do ?"/>
                <button className="btn btn-primary btn-block">Add Todo</button>
            </form>
        )
    }
})

export default connect()(AddTodo)