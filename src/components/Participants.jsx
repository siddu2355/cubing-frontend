import React, { Component } from 'react';
import Table from './Table';
import NavBar from './Navbar';

class Participants extends Component {
    state = {
        endpt:" ",
    }
    componentDidMount() {
        const endpt = window.location.href
        this.setState({endpt})
    }

    clname = (endpt) =>{
        let classN = " "
        let myEndPointArray = this.state.endpt.split("/")
        if(myEndPointArray[myEndPointArray.length - 1] === endpt){
            classN = "btn-active"
        }
        else{
            classN = "btn"
        }
        return classN
    }
    
    render() { 
        return (
            <div className='App'>
                <NavBar/>
                <div style={{marginTop:"20px", marginBottom:"20px"}}>
                  <span className={this.clname("single")}><a href='/results/single'>Single</a></span>
                  <span className={this.clname("average")}><a href='/results/average'>Average</a></span>
                </div>
                <Table sa={this.props.sa}/>
            </div>
        );
    }
}
 
export default Participants;