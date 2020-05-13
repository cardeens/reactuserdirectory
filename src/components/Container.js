import React, { Component } from "react";
import API from "../utils/API"
import Table from "./Table";
import Search from "./Search";

class Container extends Component {
    state = {
        result: [],
        search: "",
        sortedBy: "",
        flipped: false
    };

    loadEmployees = () => {
        API.getEmployees()
            .then(({ data }) => this.setState({ result: data.results }))
            .catch(err => console.log(err))
    }

    handleInputChange = event => {
        this.setState({
            search: event.target.value
        })
    }

    componentDidMount() {
        this.loadEmployees();
    }



    handleStateChange = (...changes) => {
        if (changes.length === 3) {
            this.setState({
                result: changes[0],
                sortedBy: changes[1],
                flipped: true
            })
        }
        else {
            this.setState({
                result: changes[0],
                flipped: changes[1]
            })
        }
    }

    render() {
        return (
            <div className="container">
                <Search value={this.state.search} handleInputChange={this.handleInputChange} />
                <Table {...this.state} handleStateChange={this.handleStateChange} />
            </div>
        );
    }
}

export default Container;