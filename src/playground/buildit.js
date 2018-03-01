class Template extends React.Component {
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1> Visibility Toggle </h1>
                <button onClick={this.toggleVisibility}> {this.state.visibility? "Hide details" : "Show details"} </button>
                {this.state.visibility ? <h2>Hidden text</h2> : null}
            </div>
        );
    }
}

ReactDOM.render(<Template />, document.getElementById('root'));


/*let visibility = false;

const showHide = () => {
    visibility = !visibility;
    renderApp();
}

const renderApp = () => {
    const templateTwo = (
        <div>
            <h1> Visibility Toggle </h1>
            <button onClick={showHide}> {visibility? "Hide details" : "Show details"} </button>
            {visibility ? <h2>Hidden text</h2> : null}
        </div>
    );

ReactDOM.render(templateTwo, document.getElementById('root'))
}

renderApp();*/