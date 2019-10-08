import React from "react";
import ReactDOM from "react-dom";

//when we create a class, render is originally
// the only method in it, and is also the main method.
// However, we also need the other method in React 
//thus "extends" allows us to borrow methods from
//React.Component.
//This means App is now a subclass of React.Component
class App extends React.Component {
    //Overwrite constructor function of
    //React.Component with that of App's
    //But we still want to make sure we can access
    //the props of React.Component's constructor
    constructor(props){
        //always call super(props) first
        super(props);
            // We ONLY do direct assign of this.state in the constructor function
        this.state = {latitude: null, errorMessage: ''};
        window.navigator.geolocation.getCurrentPosition(
                //we call setState to update the state
            position => {this.setState({latitude: position.coords.latitude});
        },
            // DO NOT do this.
               //this.state.latitude = position.coords.latitude; 
            err => {this.setState({ errorMessage: err.message })}
        );
    }

    render(){
        //use browser to get location
        if(this.state.errorMessage && !this.state.latitude){
            return (<div>
                Error: {this.state.errorMessage}
                </div>);}
        else if(!this.state.errorMessage && this.state.latitude){
            return ( <div> 
                        Latitude: {this.state.latitude}
                    </div>);
        }else{
            return(<div>Loading!</div>);
        };
    };
}

ReactDOM.render(<App/>, document.querySelector("#root"));
