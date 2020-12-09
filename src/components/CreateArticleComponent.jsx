import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FormButton, FormArticleStyle } from '../styles/StyledComponents';
import ViewArticleDetailComponent from './ViewArticleDetailComponent';
import { createArticle } from '../utils/eventService';

const CreateArticleComponent = ({  }) => {

    const [tittel, setTittel] = useState("");
    const [ingress, setIngress] = useState("");
    const [innhold, setInnhold] = useState("");
    const [dato, setDato] = useState("fix me");
    const [forfatter, setForfatter] = useState("");
    const [kategori, setKategori] = useState("");
    const [message, setMessage] = useState("");
    const [isSecret, setIsSecret] = useState(false);


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
        console.log(forfatter)
        setForfatter(forfatter);
    };
    const handleKategoriSelect = (e) => {
        let kategori = e.target.value;
        console.log(kategori)
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
            const { data, error } = await createArticle({
                tittel: tittel,
                ingress: ingress,
                innhold: innhold,
                dato: dato,
                forfatter: forfatter,
                kategori: kategori,
                isSecret: isSecret
            });
            if (error) {
                setMessage("Artikkel kunne ikke opprettes");
                console.log(error)
            }
            else {
                setMessage("Artikkel " + tittel + " created");
                console.log(data)
            }
        }
        sendData();
    };

    return (
        <>
        <FormArticleStyle className="NewArticle">
            <p>Ny Artikkel</p>
            
            <p>Tittel</p>
            <input type="text" placeholder="Tittel" onChange={handleTittelInput} value={tittel} required/>
            <p>Ingress</p>
            <input type="text" placeholder="Ingress" onChange={handleIngressInput} value={ingress} required/>
            <p>Innhold</p>
            <textarea type="text" rows="10" columns="40" placeholder="Innhold" onChange={handleInnholdInput} value={innhold} required></textarea>
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
            <input className="submitButton" type="submit" value="Publiser" onClick={postArticleToApi}/>
        </FormArticleStyle>
        </>

    )
};

export default CreateArticleComponent;
