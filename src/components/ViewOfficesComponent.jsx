import React, {Component, useState, useEffect} from 'react'
import { ViewOfficesDiv } from '../styles/StyledComponents'
import ViewOfficesByCity from './ViewOfficesByCity'
import {city, getAllOffices} from "../utils/eventService"
import Offices from '../views/Offices';
import listOfOffices from '../data/offices.json';
import { render } from '@testing-library/react';






const ViewOfficesComponent = () => {

    const [allOffices, setAllOffices] = useState(listOfOffices);
    const [osloOffices, setOsloOffices] = useState([]);
    const [fredrikstadOffices, setFredrikstadOffices] = useState([]);
    const [haldenOffices, setHaldenOffices] = useState([]);
    const [sarpsborgOffices, setSarpsborgOffices] = useState([]);
    const [isRendered, setIsRendered] = useState(false);

    const sortOfficesByCity = () => {
        allOffices.map((office) => {
            if(office.city == "Oslo") {
                osloOffices.push(office);
            }
            if(office.city == "Fredrikstad") {
                fredrikstadOffices.push(office);
            }
            if(office.city == "Halden") {
                haldenOffices.push(office);
            }
            if(office.city == "Sarpsborg") {
                sarpsborgOffices.push(office);
            }
        })
    }

    useEffect(() =>{
        sortOfficesByCity();
        setIsRendered(true);
      }, []);
    
    return(
        <>
        <div>
        <h2>Fredrikstad</h2>
        <ul>
        {fredrikstadOffices.map((office) => {
            return(
                <li>
                    <p>{office.name}</p>
                    <p>{office.adress}</p>
                    <p>{office.phone}</p>
                    <p>{office.city}</p>
                    <p>{office.location}</p>
                </li>
            )
        })}
        </ul>
        <h2>Oslo</h2>
        <ul>
        {osloOffices.map((office) => {
            return(
                <li>
                    <p>{office.name}</p>
                    <p>{office.adress}</p>
                    <p>{office.phone}</p>
                    <p>{office.city}</p>
                    <p>{office.location}</p>
                </li>
            )
        })}
        </ul>
        <h2>Halden</h2>
        <ul>
        {haldenOffices.map((office) => {
            return(
                <li>
                    <p>{office.name}</p>
                    <p>{office.adress}</p>
                    <p>{office.phone}</p>
                    <p>{office.city}</p>
                    <p>{office.location}</p>
                </li>
            )
        })}
        </ul>
        <h2>Sarpsborg</h2>
        <ul>
        {sarpsborgOffices.map((office) => {
            return(
                <li>
                    <p>{office.name}</p>
                    <p>{office.adress}</p>
                    <p>{office.phone}</p>
                    <p>{office.city}</p>
                    <p>{office.location}</p>
                </li>
            )
        })}
        </ul>
        </div>
        </>
    );

}

export default ViewOfficesComponent;


/*class ViewOfficesComponent extends Component {
    constructor() {
        super();
        this.state = {
            offices: [],
            cities: [],
            filterCity: null,
        };
      }

    
      
      
    async componentDidMount() {
       await this.setState({ offices: (await getAllOffices()).data });
       
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

export default ViewOfficesComponent*/