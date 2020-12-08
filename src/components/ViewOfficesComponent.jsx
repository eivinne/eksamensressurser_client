import React, {Component} from 'react'
import { ViewOfficesDiv } from '../styles/StyledComponents'
import ViewOfficesByCity from './ViewOfficesByCity'
import {city, list} from "../utils/eventService"
import Offices from '../views/Offices';


class ViewOfficesComponent extends Component {
    constructor() {
        super();
        this.state = {
            offices: [],
            cities: [],
            filterCity: null,
        };
      }

    
      
      
    async componentDidMount() {
       await this.setState({ offices: (await list()).data });
       
       await this.setState({ cities: this.state.offices.reduce((cities,{city})=>{
            if(!cities.includes(city)){
                cities.push(city);
            }
            return cities;    
        },[])});
    }

    filterByCities = async () => {
         // (this.state.filterCity && city === this.state.filterCity)
    }

    onSelect = (e) => {
        this.setState({filterCity: e.target.value === "All" ? null : e.target.value })
    }

    
    render(){
        
        return (
            <ViewOfficesDiv>
                <section className="main-banner">Kontorer</section>
                <select className="FilterBox"value={this.offices} onChange={this.onSelect}>
                <option key='all' value={null}>Alle Kontorer</option>
                    {this.state.cities.map((city)=>{
                        return <option key={city}value={city}>{city}</option>
          })}
        </select>
                <ul>    
                    {this.state.cities.filter((city) => { return !this.state.filterCity || city === this.state.filterCity}).map((city)=>{
                        return <ViewOfficesByCity key={city} offices={this.state.offices.filter((c)=>{
                            return c.city === city;
                        })} city={city}/>

                    })}
                </ul>
            </ViewOfficesDiv>
        )
}   }

export default ViewOfficesComponent