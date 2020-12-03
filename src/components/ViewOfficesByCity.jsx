import React, {Component} from "react";
import ViewOfficeIndividual from "./ViewOfficeIndividual"
class ViewOfficesByCity extends Component {

    constructor(props) {
        super(props);
        //this.state = { offices: this.props.offices, city: this.props.city};
      }
    render() {
    return (
        <>
        <p>{this.props.city} ({this.props.offices.length} Kontorer)</p>
        {this.props.offices.map((office,index)=>{
         return <ViewOfficeIndividual key={index} office={office}/>
        })}</>)}
        
}

export default ViewOfficesByCity
