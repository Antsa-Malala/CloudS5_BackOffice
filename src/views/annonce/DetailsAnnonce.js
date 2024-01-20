import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import { useState } from "react";
import {CButton} from "@coreui/react";

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const DetailsAnnonce = (props) => {
    let { id } = useParams();
    const [items, setItems] = useState([]);
    let [nomCategorie, setNomCategorie] = useState("");
    let [nomMarque, setNomMarque] = useState("");
    let [nomModele, setNomModele] = useState("");
    let [nomEnergie, setNomEnergie] = useState("");
    let [nomBoite, setNomBoite] = useState("");
    let [consommation, setConsommation] = useState("");
    let [porte, setPorte] = useState("");
    let [kilometrage, setKilometrage] = useState("");
    let [couleur, setCouleur] = useState("");
    let [nomVille, setNomVille] = useState("");
    let [nomUtilisateur, setNomUtilisateur] = useState("");
    let [prenomUtilisateur, setPrenomUtilisateur] = useState("");
    let [emailUtilisateur, setEmailUtilisateur] = useState("");
    let [adresseUtilisateur, setAdresseUtilisateur] = useState("");
    let [telephoneUtilisateur, setTelephoneUtilisateur] = useState("");
    let [description, setDescription] = useState("");


    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const fetchAnnonce = async () => {
        let url = process.env.REACT_APP_API_URL + "/annonces/" + id;
        let response = await fetch(url);
        let data = await response.json();
        setItems(data.data);
        let datas = data.data;
        let voiture = datas.voiture;
        console.log(voiture);

        nomCategorie = voiture.categorie.nomCategorie;
        console.log(nomCategorie);

        nomMarque = voiture.marque.nomMarque;
        console.log(nomMarque);

        nomModele = voiture.modele.nomModele;
        console.log(nomModele);

        nomEnergie = voiture.energie.nomEnergie;
        console.log(nomEnergie);

        nomBoite = voiture.boite.nomBoite;
        console.log(nomBoite);

        consommation = voiture.consommation;

        description = datas.description;
        console.log(description);

        porte = voiture.porte.valeur;

        kilometrage = voiture.kilometrage;

        couleur = voiture.couleur.nomCouleur;

        nomVille = datas.ville.nomVille;
        nomUtilisateur = datas.utilisateur.nom;
        prenomUtilisateur = datas.utilisateur.prenom;
        emailUtilisateur = datas.utilisateur.mail;
        adresseUtilisateur = datas.utilisateur.adresse;
        telephoneUtilisateur = datas.utilisateur.contact;
        setNomCategorie(nomCategorie);
        setNomMarque(nomMarque);
        setNomModele(nomModele);
        setNomEnergie(nomEnergie);
        setNomBoite(nomBoite);
        setConsommation(consommation);
        setPorte(porte);
        setKilometrage(kilometrage);
        setCouleur(couleur);
        setNomVille(nomVille);
        setNomUtilisateur(nomUtilisateur);
        setPrenomUtilisateur(prenomUtilisateur);
        setEmailUtilisateur(emailUtilisateur);
        setAdresseUtilisateur(adresseUtilisateur);
        setTelephoneUtilisateur(telephoneUtilisateur);
        setDescription(description);
   };

    const confirmerAnnonce = async () => {
        let url = process.env.REACT_APP_API_URL + "/annonces/valider/" + id;
        console.log(url);
        let response = await fetch(url);
        let data = await response.json();
        setItems(data.data);
        console.log(data.data);
        console.log(id);
    }

    const RefuserAnnonce = async () => {
        let url = process.env.REACT_APP_API_URL + "/annonces/refuser/" + id;
        let response = await fetch(url);
        let data = await response.json();
        setItems(data.data);
        console.log(data.data);
        console.log(id);

    }

    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${
                size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    useEffect(() => {
        fetchAnnonce();
    }, []);

    const [enlargedIndex, setEnlargedIndex] = useState(null);

    const handleImageClick = (index) => {
        setEnlargedIndex(index === enlargedIndex ? null : index);
    };

    return (
        <div>
            <div>
                <ImageList
                    sx={{width: 600, height: 450}}
                    variant="quilted"
                    cols={2}
                    rowHeight={400}
                >
                    {itemData.map((item, index) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} style={{ cursor: 'grab' }}>
                            <img
                                {...srcset(item.img, 400, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    objectFit: 'cover',
                                    width: enlargedIndex === index ? '100%' : 'auto',
                                    height: enlargedIndex === index ? '100%' : 'auto',
                                }}
                                draggable="false" // Empêcher le glisser-déposer natif du navigateur
                            />
                        </ImageListItem>

                    ))}
                </ImageList>
                <div style={{display: 'flex', justifyContent: 'center', gap: '30px'}}>
                    <CButton
                        type="button"
                        onClick={() => confirmerAnnonce({ id })}
                    >
                        Confirmer
                    </CButton>
                    <CButton
                        type="button"
                        onClick={() => RefuserAnnonce({ id })}
                    >
                        Refuser
                    </CButton>
                </div>
            </div>
            <div style={{position: 'absolute', top: 130, right: 70}}>
                <h4 style={{ textAlign:"center" }}>Details Annonce</h4>
                <Box sx={{bgcolor: 'background.paper', width: 500}}>
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Basiques" {...a11yProps(0)} />
                            <Tab label="Plus" {...a11yProps(1)} />
                            <Tab label="Descriptions" {...a11yProps(2)} />
                            <Tab label="Utilisateur" {...a11yProps(3)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <p><strong>ID : </strong> {id}</p>
                            <p><strong>Type : </strong>{nomCategorie}</p>
                            <p><strong>Marque : </strong>{nomMarque}</p>
                            <p><strong>Modele : </strong>{nomModele}</p>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <p><strong>Energie : </strong>{nomEnergie}</p>
                            <p><strong>Boite : </strong>{nomBoite}</p>
                            <p><strong>Consommation : </strong>{consommation} L</p>
                            <p><strong>Porte : </strong>{porte}</p>
                            <p><strong>Kilometrage : </strong>{kilometrage}.00 KM</p>
                            <p><strong>Couleur : </strong>{couleur}</p>
                            <p><strong>Ville : </strong>{nomVille}</p>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <p><strong>{description}</strong></p>
                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>
                            <p><strong>Nom : </strong>{nomUtilisateur}</p>
                            <p><strong>Prenom : </strong>{prenomUtilisateur}</p>
                            <p><strong>Email : </strong>{emailUtilisateur}</p>
                            <p><strong>Adresse : </strong>{adresseUtilisateur}</p>
                            <p><strong>Telephone : </strong>{telephoneUtilisateur}</p>
                        </TabPanel>
                    </SwipeableViews>
                </Box>
            </div>
        </div>
    );
};

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
];

export default DetailsAnnonce;