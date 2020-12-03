import {useState} from 'react';

export const Poll = () => {
    const [pollName, setPollName] = useState("");
    const [creatorId, setCreatorId] = useState(0);
    const [questions, setQuestions] = useState([])
    return{
        pollName,
        setPollName,
        creatorId,
        setCreatorId,
        questions,
        setQuestions
    }
};

export const OfficeCity = () => {
const [cityName] = useState("");
const [count] = useState(0);
return{
    cityName,
    count
}


}
