let React = require("react")

let AddTodo = React.createClass({
    formSubmitted(e){
      e.preventDefault()
        let text = this.refs.text.value
        if (text){
            this.props.onNewTodo(text)
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

module.exports = AddTodo