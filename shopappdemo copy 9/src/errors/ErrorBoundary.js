import React from 'react';
export class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {isError:false};
    }
    componentDidCatch(error, info){



        console.log('Component DId Catch Called  ',error);
        this.setState({isError:true});
    }
    render(){
        if(this.state.isError){
            return (
                <h1>OOPS Something Went Wrong</h1>
            )
        }
        else{
            return this.props.children;
        }
    }
}