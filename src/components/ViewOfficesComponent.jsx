import React, {Component, useState, useEffect} from 'react'
import { HomeHeader, ViewOfficesDiv } from '../styles/StyledComponents'
import ViewOfficesByCity from './ViewOfficesByCity'
import {city, getAllOffices} from "../utils/eventService"
import Offices from '../views/Offices';
import listOfOffices from '../data/offices.json';
import { BsFillGridFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import ViewOfficeDetail from './ViewOfficeDetail';






const ViewOfficesComponent = () => {

    const [allOffices, setAllOffices] = useState(listOfOffices.offices);
    const [allEmployees, setAllEmployees] = useState(listOfOffices.employees);
    const [osloOffices, setOsloOffices] = useState([]);
    const [fredrikstadOffices, setFredrikstadOffices] = useState([]);
    const [haldenOffices, setHaldenOffices] = useState([]);
    const [sarpsborgOffices, setSarpsborgOffices] = useState([]);
    const [isRendered, setIsRendered] = useState(false);
    const [showDetailView, setShowDetailView] = useState(false);
    const [selectedOffice, setSelectedOffice] = useState(null);

    const [itemView, setItemView] = useState("");

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

    const showOfficeDetail = (id) => {
        console.log(id);
        allOffices.map( (office) => {
            if(office.id == id) {
                console.log(office);
                setSelectedOffice(office);
                setShowDetailView(true);
            }
        })
    };

    const setListView = () =>{
        setItemView("list-element-view-list");
    }

    const setGridView = () => {
        setItemView("list-element-view-grid");
    }

    useEffect(() =>{
        sortOfficesByCity();
        setIsRendered(true);
      }, []);
    
    if(!showDetailView) {
    return(
        <>
        <ViewOfficesDiv>
        <div className="main-banner">Kontorer</div>
        <div className="buttons-container">
        <button className="button-change" onClick={setListView}><BsList /></button>
        <button className="button-change" onClick={setGridView}><BsFillGridFill/></button>
        </div>
        <h2>Fredrikstad ({fredrikstadOffices.length})</h2>

        {fredrikstadOffices.map((office) => {
            return( 
            <div className={itemView} onClick={() => showOfficeDetail(office.id)}>
                <ul>
                    <li className="title">{office.name}</li>
                    <li>{office.adress}</li>
                    <li>{office.phone}</li>
                    <li>{office.city}</li>
                    <li>{office.location}</li>
                </ul>
            </div>
            )
        })}
        <h2>Oslo ({osloOffices.length})</h2>
        {osloOffices.map((office) => {
            return(
            <div className={itemView} onClick={() => showOfficeDetail(office.id)}>
                <ul>
                    <li className="title">{office.name}</li>
                    <li>{office.adress}</li>
                    <li>{office.phone}</li>
                    <li>{office.city}</li>
                    <li>{office.location}</li>
                </ul>
            </div>
            )
        })}
       
        <h2>Halden ({haldenOffices.length})</h2>
        {haldenOffices.map((office) => {
            return(
            <div className={itemView} onClick={() => showOfficeDetail(office.id)}>
                <ul>
                    <li className="title">{office.name}</li>
                    <li>{office.adress}</li>
                    <li>{office.phone}</li>
                    <li>{office.city}</li>
                    <li>{office.location}</li>
                </ul>
            </div>
            )
        })}
        <h2>Sarpsborg ({sarpsborgOffices.length})</h2>
        {sarpsborgOffices.map((office) => {
            return(
            <div className={itemView} onClick={() => showOfficeDetail(office.id)}>
                <ul>
                    <li className="title">{office.name}</li>
                    <li>{office.adress}</li>
                    <li>{office.phone}</li>
                    <li>{office.city}</li>
                    <li>{office.location}</li>
                </ul>
            </div>
            )
        })}
        </ViewOfficesDiv>

        </>
    );
    }
    else {
        return(
            <ViewOfficeDetail office={selectedOffice}></ViewOfficeDetail>
        )
    }
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