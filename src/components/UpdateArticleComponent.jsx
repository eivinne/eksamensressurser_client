import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FormButton, FormStyle } from '../styles/StyledComponents';
import ViewArticleDetailComponent from './ViewArticleDetailComponent';
import { updateArticle } from '../utils/eventService';

const UpdateArticleComponent = ({ article }) => {

    const [tittel, setTittel] = useState(article.tittel);
    const [ingress, setIngress] = useState(article.ingress);
    const [innhold, setInnhold] = useState(article.innhold);
    const [dato, setDato] = useState(article.dato);
    const [forfatter, setForfatter] = useState(article.forfatter);
    const [kategori, setKategori] = useState(article.kategori);
    const [message, setMessage] = useState("");
    const [isSecret, setIsSecret] = useState(article.isSecret);


    const handleTittelInput = (e) => {
        let inputTittel = e.target.value;
        setTittel(inputTittel);
    };

    const handleIngressInput = (e) => {
        let inputIngress = e.target.value;
        setIngress(inputIngress);
    };

    const handleInnholdInput = (e) => {
        let inputInnhold = e.target.value;
        setInnhold(inputInnhold);
    };

    const handleForfatterSelect = (e) => {
        let forfatter = e.target.value;
        setForfatter(forfatter);
    };
    const handleKategoriSelect = (e) => {
        let kategori = e.target.value;
        setKategori(kategori);
    };

    const handleDate = () => {
        const newDate = new Date().toLocaleDateString();
        setDato(newDate)
    }

    const handleIsSecretInput = (e) => {
        const secretBoolean = e.target.value;
        setIsSecret(secretBoolean);
    }

    const postArticleToApi = () => {
        handleDate();
        const sendData = async () => {
            const { data, error } = await updateArticle({
                tittel: tittel,
                ingress: ingress,
                innhold: innhold,
                dato: dato,
                forfatter: forfatter,
                kategori: kategori,
                isSecret: isSecret
            }, article._id);
            if (error) {
                setMessage("Artikkel kunne ikke oppdateres");
                console.log(error)
            }
            else {
                setMessage("Artikkel " + tittel + " oppdatert");
                console.log(data)
            }
        }
        sendData();
    };

    return (
        <>
        <FormStyle className="NewArticle">
            <p>{article.tittel}</p>
            
            <p>Tittel</p>
            <input type="text" placeholder="Tittel" onChange={handleTittelInput} value={tittel} required/>
            <p>Ingress</p>
            <input type="text" placeholder="Ingress" onChange={handleIngressInput} value={ingress} required/>
            <p>Innhold</p>
            <input type="text" placeholder="Innhold" onChange={handleInnholdInput} value={innhold} required></input>
            <p>Forfatter</p>
            <select onChange={handleForfatterSelect} required>
                <option>Lars Larsen</option>
                <option>Gunn Gundersen</option>
                <option>Simen Simensen</option>
            </select>
            <p>Kategori</p>
            <select onChange={handleKategoriSelect} required>
                <option>Baderom</option>
                <option>Kjøkken</option>
                <option>Hytte</option>
            </select>
            <select onChange={handleIsSecretInput}>
                <option value={true}>Hemmelig</option>
                <option value={false}>Ikke hemmelig</option>
            </select>
            <input type="submit" value="Submit" onClick={postArticleToApi}/>
        </FormStyle>
        </>

    )
};

export default UpdateArticleComponent;
