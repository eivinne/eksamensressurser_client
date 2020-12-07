import React, {Component} from 'react'
import { ViewOfficesDiv } from '../styles/StyledComponents'
import ViewOfficesByCity from './ViewOfficesByCity'
import {city, list} from "../utils/eventService"


class ViewOfficesComponent extends Component {
    constructor() {
        super();
        this.state = { offices: [], cities: []};
      }

    
      
      
      async componentDidMount() {
       await this.setState({ offices: (await list()).data });
       await this.setState({ cities: this.state.offices.reduce((cities,{city})=>{
           if(!cities.includes(city)){
               cities.push(city);
           }
           return cities;
           
       },[])});
       console.log(this.state.cities)
      }


    
    render(){
        
        return (
            <ViewOfficesDiv>
                <section className="main-banner">Kontorer</section>
                <select className="FilterBox"value={this.offices} onChange={this.componentDidMount}>
                    {this.state.cities.map((city)=>{
                        return <option key={city}value={this.state.offices.filter((c)=>{
                        return c.city === city;
            })}>{city}</option>
          })}
        </select>
                <ul>    
                    {this.state.cities.map((city)=>{
                        return <ViewOfficesByCity key={city} offices={this.state.offices.filter((c)=>{
                            return c.city === city;
                        })} city={city}/>

                    })}
                </ul>
            </ViewOfficesDiv>
        )
}   }

export default ViewOfficesComponent