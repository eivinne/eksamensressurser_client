import React, {Component} from "react";
import ViewOfficeIndividual from "./ViewOfficeDetail"

class ViewOfficesByCity extends Component {
    constructor(props) {
        super(props);
        this.state = { viewType: 'list-element-view-list'};
      }

      handleViewChange = (event, value) => {
        this.setState({ viewType: value });
    };
   
    render() {

    return (
        <>

        <p>{this.props.city} ({this.props.offices.length} Kontorer)</p>
        {this.props.offices.map((office,index)=>{
         return <ViewOfficeIndividual key={index} office={office}/>
        })}</>)}
        
}

export default ViewOfficesByCity
