class App extends React.Component {

    // state of a componemt
    state = {
        "name" : "Shaon",
        "age" : 30
    }

    handleClick(e) {
        console.log(e.target);
    }

    handleMouseOver(e) {
        console.log(e.target, e.pageX);
    }

    handleCopy(e) {
        console.log("write something original");
    }

    render() {
        return (
            <div className="app-content">
                <h1>hey ninjas!</h1>
                <p>My Name is: {this.state.name} and I am {this.state.age} years old</p>
                <button onClick={this.handleClick}>Click Me</button>
                <button onMouseOver={this.handleMouseOver}>Hover Me</button>
                <p onCopy={this.handleCopy}>Dont copy this para</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));