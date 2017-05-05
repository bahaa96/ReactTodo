let React = require("react")
let {connect} = require("react-redux")
let actions = require("actions")


export let SearchForm = React.createClass({
    render(){
        let {searchText, showCompleted, dispatch} = this.props
        return (
            <div>
                <input type="search" className="form-control" ref={"searchText"} value={searchText} placeholder="Search todos" onChange={()=>{
                    dispatch(actions.setSearchText(this.refs.searchText.value))
                }}/>
                <label className="custom-control custom-checkbox" onClick={(e)=>{
                    e.preventDefault()
                    dispatch(actions.toggleShowCompleted())
                }}>
                    <input type="checkbox" checked={showCompleted} ref={"showCompleted"} className="custom-control-input"/>
                    <span className="custom-control-indicator"/>
                    <span className="custom-control-description">&nbsp; Show Completed Todos</span>
                </label>
            </div>
        )
    }
})

export default connect(
    (state)=>{
    return {
        showCompleted: state.showCompleted,
        searchText: state.searchText
    }
}
)(SearchForm)