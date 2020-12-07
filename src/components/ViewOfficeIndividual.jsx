
const ViewOfficeIndividual = ({office}) => {
    return (
    
        <div className="list-element-view-grid">
            <ul>
                <li>{office.name}</li>
                <li>{office.address}</li>
                <li> {office.phone}</li>
                <li> {office.location} {office.email}</li>
            </ul>
        </div>
    
            )
}

    

export default ViewOfficeIndividual
