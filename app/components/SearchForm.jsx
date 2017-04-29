let React = require("react")

let SearchForm = React.createClass({
    onSearch(){
        let searchText = this.refs.searchText.value
        let showCompleted = this.refs.showCompleted.checked
        this.props.onSearch(searchText, showCompleted)


    },
    render(){
        return (
            <div>
                <input type="search" className="form-control" ref={"searchText"} placeholder="Search todos" onChange={this.onSearch}/>
                <label className="custom-control custom-checkbox" onClick={this.onSearch}>
                    <input type="checkbox" ref={"showCompleted"} className="custom-control-input"/>
                    <span className="custom-control-indicator"/>
                    <span className="custom-control-description">&nbsp; Show Completed Todos</span>
                </label>
            </div>
        )
    }
})

module.exports = SearchForm