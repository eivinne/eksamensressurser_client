import React, {Component} from 'react'
import { ViewOfficesDiv } from '../styles/StyledComponents'
import ViewOfficesByCity from './ViewOfficesByCity'
import {list} from "../utils/officesService"



class ViewOfficesComponent extends Component {
    constructor() {
        super();
        this.state = { isListView: false, offices: [], cities: []};
      }

      ChangeListView(){
          this.setState({isListView: !this.state.isListView})
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
        const listClass= this.state.isListView ? "list-element-view-list" : "list-element-view-grid"
        return (
            <ViewOfficesDiv>
                <section className="main-banner">Kontorer</section>
                <button onClick={this.ChangeListView}>List View</button>
                <ul>
                    {this.state.cities.map((city)=>{
                        return <ViewOfficesByCity className={listClass} offices={this.state.offices.filter((c)=>{
                            return c.city === city;
                        })} city={city}/>

                    })}
                </ul>
            </ViewOfficesDiv>
        )
}   }

export default ViewOfficesComponent