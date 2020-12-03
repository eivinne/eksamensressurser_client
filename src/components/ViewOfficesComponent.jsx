import React, {Component} from 'react'
import { ViewOfficesDiv } from '../styles/StyledComponents'
import ViewOfficeIndividual from './ViewOfficeIndividual'
import {city} from "../utils/officesService"



class ViewOfficesComponent extends Component {
    constructor() {
        super();
        this.state = { offices: [], city:"fredrikstad" };
      }
    
      async componentDidMount() {
        this.setState({ offices: (await city(this.state.city)).data });
      }
    
    render(){
        return (
            <ViewOfficesDiv>
                <section className="main-banner">Kontorer</section>
                <button>List View</button>
                <ul>
                    <p>{this.state.city} ({this.state.offices.length} Kontorer)</p>
                    {this.state.offices.map((office,index)=>{
                    return <ViewOfficeIndividual key={index} office={office}/>
                    })}
                </ul>
            </ViewOfficesDiv>
        )
}   }

export default ViewOfficesComponent