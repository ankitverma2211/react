class Name extends React.Component {
    render(){
        return(
            React.createElement('div',
            {className:"container"},
            React.createElement('h1',null,'getting started'))
        );
    }
}

ReactDOM.render(React.createElement(Hello,null),mountNode);