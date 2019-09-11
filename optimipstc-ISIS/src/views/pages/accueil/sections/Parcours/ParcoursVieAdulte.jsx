import React from 'react';
import {
    CardText,
    Col,
    Container,
    ListGroup,
    ListGroupItem,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row,
    Table,
} from 'reactstrap';
import {Card, CardBody, Button, CardTitle, UncontrolledCollapse} from 'reactstrap';
import '../../../../../css/index.css'
import '../../../../../css/container.css'
import header2 from "../../../../../assets/images/header2.png";
import Collapsible from "react-collapsible";
import ars from "../../../../../assets/images/ars_occitanie.png";
import IHNPS from "../../../../../assets/images/IHNPS.jpg";
import chu from "../../../../../assets/images/chu.jpg";
import chum from "../../../../../assets/images/chum.png";
import chun from "../../../../../assets/images/chun.jpeg";
import isis from "../../../../../assets/images/isis.jpg";
import irit from "../../../../../assets/images/irit.png";
import imt from "../../../../../assets/images/imt.jpg";
import inserm from "../../../../../assets/images/inserm.jpg";
import ymca from "../../../../../assets/images/ymca.jpg";
import unaftc from "../../../../../assets/images/unaftc.png";

export default class SectionTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalMPR: false,
            modalSRPR: false,
            modalUE: false,
            modalKine: false,
            modalErgo: false,
            modalOrtho: false,
            modalOTP: false,
            modalYMCA: false,
            modalNP: false,
            modalNC: false,
            modalMR: false,
            modalNeuro: false,
            modalMT: false,
            modalID: false,
            modalAuxVie: false,
            modalAM: false,
            modalAidant: false,
            modalSAVS: false,
            modalSAMSAH: false,
            modalSSIAD: false,
            modalSAAD: false,
            modalAmenLog: false,
            modalVehic: false,
            modalMM: false,
            modalMAS: false,
            modalFAM: false,
            modalFoyer: false,
            modalAFTC: false,
            modalGEM: false,
            modalDeplac: false,
            modalSport: false,
            modalMTra: false,
            modalAdapt: false,
            modalESAT: false,
            modalUEROS: false,
            modalCOMETE: false,
            modalCAPE: false,
            modalSSMETH: false,
            modalAccueilJour: false,
            modalLogement: false,
            modalHandi: false,
            modalEntreprises: false,
            modalDEA: false,
            open1: false,
            open2: false,
            open3: false,
            open4: false,
            open5: false,
            open6: false,
            open7: false,
            open8: false,
            open9: false,
            open10: false,
            open11: false,
            open12: false
        }
    }

    triggerModalAuxVie = () => {
        this.setState({modalAuxVie: !this.state.modalAuxVie})
    };

    triggerModalDEA = () => {
        this.setState({modalDEA: !this.state.modalDEA})
    };

    triggerModalEntreprises = () => {
        this.setState({modalEntreprises: !this.state.modalEntreprise})
    };

    triggerModalHandi = () => {
        this.setState({modalHandi: !this.state.modalHandi})
    };

    triggerModalAccueilJour = () => {
        this.setState({modalAccueilJour: !this.state.modalAccueilJour})
    };

    triggerModalLogement = () => {
        this.setState({modalLogement: !this.state.modalLogement})
    };

    triggerModalIDE = () => {
        this.setState({modalIDE: !this.state.modalIDE})
    };

    triggerModalAM = () => {
        this.setState({modalAM: !this.state.modalAM})
    };

    triggerModalAidant = () => {
        this.setState({modalAidant: !this.state.modalAidant})
    };

    triggerModalSAVS = () => {
        this.setState({modalSAVS: !this.state.modalSAVS})
    };

    triggerModalSAMSAH = () => {
        this.setState({modalSAMSAH: !this.state.modalSAMSAH})
    };

    triggerModalSSIAD = () => {
        this.setState({modalSSIAD: !this.state.modalSSIAD})
    };
    triggerModalSAAD = () => {
        this.setState({modalSAAD: !this.state.modalSAAD})
    };

    triggerModalAmenLog = () => {
        this.setState({modalAmenLog: !this.state.modalAmenLog})
    };

    triggerModalVehic = () => {
        this.setState({modalVehic: !this.state.modalVehic})
    };

    triggerModalMM = () => {
        this.setState({modalMM: !this.state.modalMM})
    };

    triggerModalMAS = () => {
        this.setState({modalMAS: !this.state.modalMAS})
    };

    triggerModalFAM = () => {
        this.setState({modalFAM: !this.state.modalFAM})
    };

    triggerModalFoyer = () => {
        this.setState({modalFoyer: !this.state.modalFoyer})
    };

    triggerModalAFTC = () => {
        this.setState({modalAFTC: !this.state.modalAFTC})
    };

    triggerModalGEM = () => {
        this.setState({modalGEM: !this.state.modalGEM})
    };

    triggerModalYMCA = () => {
        this.setState({modalYMCA: !this.state.modalYMCA})
    };

    triggerModalDeplac = () => {
        this.setState({modalDeplac: !this.state.modalDeplac})
    };

    triggerModalSport = () => {
        this.setState({modalSport: !this.state.modalSport})
    };

    triggerModalMTra = () => {
        this.setState({modalMTra: !this.state.modalMTra})
    };
    triggerModalAdapt = () => {
        this.setState({modalAdapt: !this.state.modalAdapt})
    };

    triggerModalESAT = () => {
        this.setState({modalESAT: !this.state.modalESAT})
    };

    triggerModalUEROS = () => {
        this.setState({modalUEROS: !this.state.modalUEROS})
    };

    triggerModalCOMETE = () => {
        this.setState({modalCOMETE: !this.state.modalCOMETE})
    };

    triggerModalCAPE = () => {
        this.setState({modalCAPE: !this.state.modalCAPE})
    };

    triggerModalSMMETH = () => {
        this.setState({modalSMMETH: !this.state.modalSMMETH})
    };

    render() {
        return (
            <section className={'section'}>
                <Container fluid className={'container-justify'}>
                    <Row>
                        <Col xs='12' xl='6' className={'pm'}>
                            <div className={'action-responsive'}>
                                <h2 className={'titre TCL'}>
                                    Parcours de vie
                                </h2><br/>
                                À l'issue de la prise en charge initiale, même si le patient est stabilisé, le suivi médical
                                et la prise en charge rééducative nécessitent d'être poursuivis. En parallèle, un parcours
                                de vie se met en place.<br/>
                                Les dispositifs d'aide sont nombreux et il n'est pas toujours facile de s'y retrouver.<br/>
                                Nous vous présentons ci-dessous les principales personnes, dispositifs et structures dont
                                vous pouvez avoir besoin.<br/>
                                Des informations supplémentaires apparaissent en cliquant sur la case
                                correspondante. <br/><br/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" xl="9">
                            <div className={'margin-historique'}>
                                <Card className={'container-set'}>
                                    <Collapsible
                                        open={this.state.open1}
                                        onOpening={() => {
                                            // eslint-disable-next-line no-undef
                                            this.setState({open1: true});
                                            this.setState({open2: false});
                                            this.setState({open3: false});
                                            this.setState({open4: false});
                                            this.setState({open5: false});
                                            this.setState({open6: false});
                                            this.setState({open7: false});
                                            this.setState({open8: false});
                                            this.setState({open9: false});
                                            this.setState({open10: false});
                                            this.setState({open11: false});
                                            this.setState({open12: false});
                                        }}
                                        onClosing={() => {
                                            this.setState({open1: false});
                                        }}
                                        trigger="Aides humaines" className={'clp1'}>
                                        <div className="text-align-parcours">
                                        <a onClick={this.triggerModalAuxVie} href={"#"}
                                                                                          className={'link'}> Auxilaire de vie </a><br/>
                                            <a onClick={this.triggerModalIDE} href={"#"}
                                               className={'link'}> IDE </a><br/>
                                            <a onClick={this.triggerModalAM} href={"#"} className={'link'}> Aide
                                                ménagère </a><br/>
                                            <a onClick={this.triggerModalAidant} href={"#"}
                                               className={'link'}> Aidant </a><br/>
                                        </div>
                                    </Collapsible>
                                    <Collapsible open={this.state.open2}
                                                 onOpening={() => {
                                                     // eslint-disable-next-line no-undef
                                                     this.setState({open1: false});
                                                     this.setState({open2: true});
                                                     this.setState({open3: false});
                                                     this.setState({open4: false});
                                                     this.setState({open5: false});
                                                     this.setState({open6: false});
                                                     this.setState({open7: false});
                                                     this.setState({open8: false});
                                                     this.setState({open9: false});
                                                     this.setState({open10: false});
                                                     this.setState({open11: false});
                                                     this.setState({open12: false});
                                                 }}
                                                 onClosing={() =>
                                                     this.setState({open2: false})}
                                                 trigger="Services de coordination" className={'clp2'}>
                                        <div className="text-align-parcours">
                                        <a onClick={this.triggerModalSAMSAH} href={"#"}
                                           className={'link'}> SAMSAH </a><br/>
                                        <a onClick={this.triggerModalSAVS} href={"#"}
                                           className={'link'}> SAVS </a><br/>
                                        <a onClick={this.triggerModalSSIAD} href={"#"}
                                           className={'link'}> SSIAD </a><br/>
                                        <a onClick={this.triggerModalSAAD} href={"#"}
                                           className={'link'}> SAAD </a><br/>
                                        </div>
                                    </Collapsible>
                                    <Collapsible
                                        open={this.state.open3}
                                        onOpening={() => {
                                            // eslint-disable-next-line no-undef
                                            this.setState({open1: false});
                                            this.setState({open2: false});
                                            this.setState({open3: true});
                                            this.setState({open4: false});
                                            this.setState({open5: false});
                                            this.setState({open6: false});
                                            this.setState({open7: false});
                                            this.setState({open8: false});
                                            this.setState({open9: false});
                                            this.setState({open10: false});
                                            this.setState({open11: false});
                                            this.setState({open12: false});
                                        }}
                                        onClosing={() => {
                                            this.setState({open3: false});
                                        }}
                                        trigger="Aides matérielles" className={'clp3'}>
                                        <div className="text-align-parcours">
                                        <a onClick={this.triggerModalAmenLog} href={"#"}
                                           className={'link'}> Aménagement du logement </a><br/>
                                        <a onClick={this.triggerModalVehic} href={"#"}
                                           className={'link'}> Véhicule </a><br/>
                                        <a onClick={this.triggerModalMM} href={"#"} className={'link'}> Matériel
                                            médical </a><br/>
                                        </div>
                                    </Collapsible>
                                    <Collapsible
                                        open={this.state.open4}
                                        onOpening={() => {
                                            // eslint-disable-next-line no-undef
                                            this.setState({open1: false});
                                            this.setState({open2: false});
                                            this.setState({open3: false});
                                            this.setState({open4: true});
                                            this.setState({open5: false});
                                            this.setState({open6: false});
                                            this.setState({open7: false});
                                            this.setState({open8: false});
                                            this.setState({open9: false});
                                            this.setState({open10: false});
                                            this.setState({open11: false});
                                            this.setState({open12: false});
                                        }}
                                        onClosing={() => {
                                            this.setState({open4: false});
                                        }}
                                        trigger="Insertion sociale" className={'clp4'}>
                                        <div className="text-align-parcours">
                                        <a onClick={this.triggerModalDeplac} href={"#"} className={'link'}> Aide aux
                                            déplacements </a><br/>
                                        <a onClick={this.triggerModalSport} href={"#"} className={'link'}> Sport,
                                            loisirs </a><br/>
                                            <a onClick={this.triggerModalAccueilJour} href={"#"} className={'link'}> Service d'accueil de jour</a><br/>
                                            <a onClick={this.triggerModalLogement} href={"#"} className={'link'}> Foyer appartement et Logements partagés</a><br/>
                                        </div>
                                    </Collapsible>
                                    <Collapsible
                                        open={this.state.open5}
                                        onOpening={() => {
                                            // eslint-disable-next-line no-undef
                                            this.setState({open1: false});
                                            this.setState({open2: false});
                                            this.setState({open3: false});
                                            this.setState({open4: false});
                                            this.setState({open5: true});
                                            this.setState({open6: false});
                                            this.setState({open7: false});
                                            this.setState({open8: false});
                                            this.setState({open9: false});
                                            this.setState({open10: false});
                                            this.setState({open11: false});
                                            this.setState({open12: false});
                                        }}
                                        onClosing={() => {
                                            this.setState({open5: false});
                                        }}
                                        trigger="Etablissement médico-social" className={'clp5'}>
                                        <div className="text-align-parcours">
                                        <a onClick={this.triggerModalMAS} href={"#"} className={'link'}> MAS </a><br/>
                                        <a onClick={this.triggerModalFAM} href={"#"} className={'link'}> FAM </a><br/>
                                        <a onClick={this.triggerModalFoyer} href={"#"} className={'link'}> Foyer de vie </a><br/>
                                        <a onClick={this.triggerModalHandi} href={"#"} className={'link'}> Unité pour Personnes Handicapées Vieillissantes </a><br/>
                                        </div>
                                    </Collapsible>
                                    <Collapsible
                                        open={this.state.open11}
                                        onOpening={() => {
                                            // eslint-disable-next-line no-undef
                                            this.setState({open1: false});
                                            this.setState({open2: false});
                                            this.setState({open3: false});
                                            this.setState({open4: false});
                                            this.setState({open5: false});
                                            this.setState({open6: false});
                                            this.setState({open7: false});
                                            this.setState({open8: false});
                                            this.setState({open9: false});
                                            this.setState({open10: false});
                                            this.setState({open11: true});
                                            this.setState({open12: false});
                                        }}
                                        onClosing={() => {
                                            this.setState({open11: false});
                                        }}
                                        trigger="Associations" className={'clp5'}>
                                        <div className="text-align-parcours">
                                        <a onClick={this.triggerModalAFTC} href={"#"} className={'link'}> AFTC </a><br/>
                                        <a onClick={this.triggerModalGEM} href={"#"} className={'link'}> GEM </a><br/>
                                        <a onClick={this.triggerModalYMCA} href={"#"} className={'link'}> YMCA </a><br/>
                                        </div>
                                    </Collapsible>
                                    <Collapsible
                                        open={this.state.open6}
                                        onOpening={() => {
                                            // eslint-disable-next-line no-undef
                                            this.setState({open1: false});
                                            this.setState({open2: false});
                                            this.setState({open3: false});
                                            this.setState({open4: false});
                                            this.setState({open5: false});
                                            this.setState({open6: true});
                                            this.setState({open7: false});
                                            this.setState({open8: false});
                                            this.setState({open9: false});
                                            this.setState({open10: false});
                                            this.setState({open11: false});
                                            this.setState({open12: false});
                                        }}
                                        onClosing={() => {
                                            this.setState({open6: false});
                                        }}
                                        trigger="Insertion professionnelle" className={'clp6'}>
                                        <div className="text-align-parcours">
                                        <a onClick={this.triggerModalMTra} href={"#"} className={'link'}>Médecine du
                                            travail </a><br/>
                                        <a onClick={this.triggerModalAdapt} href={"#"} className={'link'}> Adaptation de
                                            poste </a><br/>
                                            <a onClick={this.triggerModalEntreprises} href={"#"} className={'link'}> Entreprises adaptées </a><br/>
                                            <a onClick={this.triggerModalESAT} href={"#"} className={'link'}> ESAT </a><br/><br/>
                                        </div>
                                    </Collapsible>
                                    <Collapsible
                                        open={this.state.open7}
                                        onOpening={() => {
                                            // eslint-disable-next-line no-undef
                                            this.setState({open1: false});
                                            this.setState({open2: false});
                                            this.setState({open3: false});
                                            this.setState({open4: false});
                                            this.setState({open5: false});
                                            this.setState({open6: false});
                                            this.setState({open7: true});
                                            this.setState({open8: false});
                                            this.setState({open9: false});
                                            this.setState({open10: false});
                                            this.setState({open11: false});
                                            this.setState({open12: false});
                                        }}
                                        onClosing={() => {
                                            this.setState({open7: false});
                                        }}
                                        trigger="Services d'accompagnement" className={'clp7'}>
                                        <div className="text-align-parcours">
                                        <a onClick={this.triggerModalUEROS} href={"#"}
                                           className={'link'}> UEROS </a><br/>
                                        <a onClick={this.triggerModalCOMETE} href={"#"}
                                           className={'link'}> COMETE </a><br/>
                                        <a onClick={this.triggerModalCAPE} href={"#"} className={'link'}> CAP
                                            EMPLOI </a><br/>
                                         <a onClick={this.triggerModalDEA} href={"#"} className={'link'}> Dispositif emplois accompagnés </a><br/>
                                        <a onClick={this.triggerModalSMMETH} href={"#"}
                                           className={'link'}> SAMETH </a><br/>
                                        </div>
                                    </Collapsible>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                            <Row>
                                Pour plus d'informations sur l'hébergement, les allocations ou encore le travail, deux liens
                                s'offrent à vous :
                                <ul>
                                    <li>
                                        <a href='https://www.service-public.fr/particuliers/vosdroits/N12230'>Service public -
                                            Vos droits</a>
                                    </li>
                                    <li>
                                        <a href='https://travail-emploi.gouv.fr/emploi/emploi-et-handicap/prevention-et-maintien-dans-l-emploi/'>
                                            Emploi et handicap - Prévention et maintien dans l'emploi</a>
                                    </li>
                                </ul>
                    </Row>
                </Container>
                <Modal className={'tc_modal'} isOpen={this.state.modalAuxVie} fade={false} centered>
                    <ModalHeader>Auxiliaire de vie</ModalHeader>
                    <ModalBody>
                        Personne qui vient à domicile pour aider à réaliser les activités de la vie quotidienne comme :
                        toilette, habillage, courses, repas, déplacements, participation à la vie sociale. Elle doit
                        s’adapter aux capacités et à la pathologie de la personne pour favoriser son autonomie.<br/>
                        Pour qui : personne en situation de handicap, personne âgée en perte d’autonomie<br/>
                        Comment : demande auprès d’un prestataire de services, ou d’une association d’aides à
                        domicile<br/>
                        Prise en charge : PCH pour les moins de 60ans, APA pour les plus 60ans<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalAuxVie} className={'buttonSecondary'} centered>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalIDE} fade={false} centered>
                    <ModalHeader>IDE</ModalHeader>
                    <ModalBody>
                        Pour l’aide à la prise des médicaments, l’aide aux soins d’hygiène, faire les prises de sang,
                        les pansements.<br/>
                        Comment : prescription médicale, sur ordonnance.<br/>
                        Prise en charge : Sécurité sociale.<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalIDE} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalAM} fade={false} centered>
                    <ModalHeader>Aide-ménagère</ModalHeader>
                    <ModalBody>
                        Entretien de la maison et aide possible pour la préparation des repas et les courses<br/>
                        Pour qui : personne ayant difficultés pour accomplir les principales tâches ménagères<br/>
                        Comment : demande du patient ou de la famille<br/>
                        Prise en charge : varie selon la situation : aide financière départementale ou caisse de
                        retraite ou la mutuelle.<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalAM} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalAidant} fade={false} centered>
                    <ModalHeader>Aidant</ModalHeader>
                    <ModalBody>

                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalAidant} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalSAVS} fade={false} centered>
                    <ModalHeader>Service d'Accompagnement à la Vie Sociale</ModalHeader>
                    <ModalBody>
                        Même système que le SAMSAH mais ne s’occupe pas du domaine médical et paramédical.<br/>
                        Il apporte des conseils et aides pratiques pour tout ce qui concerne la vie courante,
                        l'alimentation, les démarches administratives, le logement, le travail, les loisirs, la gestion
                        budgétaire, etc.<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalSAVS} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalSAMSAH} fade={false} centered>
                    <ModalHeader>Service d'Accompagnement Médico-Social pour Adultes Handicapés</ModalHeader>
                    <ModalBody>
                        Une équipe pluridisciplinaire évalue les besoins en matière de logement, vis sociale, accès aux
                        soins…<br/>
                        Puis aide à la coordination de ce projet de soins, assure un suivi médical, paramédical,
                        psychologique. L’objectif est d’aider au maintien à domicile.<br/>
                        Pour qui : adultes en situation de handicap entre 20 et 60 ans<br/>
                        Comment : la demande de « notification SAMSAH » est faite sur le certificat de la MDPH rempli
                        par le médecin. La commission de la MDPH prendra la décision.<br/>
                        Prise en charge : Assurance Maladie pour la partie soins, Conseil Général pour la partie
                        accompagnement<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalSAMSAH} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalSSIAD} fade={false} centered>
                    <ModalHeader>Service de soins infirmiers à domicile</ModalHeader>
                    <ModalBody>
                        S’occupe de trouver les intervenants nécessaires pour assurer les actes infirmiers et les aides
                        aux soins d’hygiène nécessaires à la personne.<br/>
                        Pour qui : personnes dépendantes à domicile, ou établissement non médicalisé<br/>
                        Comment : prescription médicale, sur ordonnance.<br/>
                        Prise en charge : sécurité sociale ou PCH<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalSSIAD} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalSAAD} fade={false} centered>
                    <ModalHeader>Service d'Accompagnement à Domicile</ModalHeader>
                    <ModalBody>
                        Différents dispositifs existent pour permettre d’organiser des aides auprès des personnes handicapées et leur entourage vivant à domicile.
                        Vous pouvez trouver des informations détaillées sur <a href="https://handicap.gouv.fr/les-aides-et-les-prestations/aides/article/aides-et-soins-a-domicile" target="_blank"> ce lien.</a>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalSAAD} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalAmenLog} fade={false} centered>
                    <ModalHeader>Aménagement du logement</ModalHeader>
                    <ModalBody>
                        Des aides financières peuvent être demandées si votre handicap nécessite une modification de votre logement. Il y a plusieurs possibilités de financement :
                        <ul>
                            <li>
                                via la <a href="https://www.service-public.fr/particuliers/vosdroits/F14202" target="_blank">PCH aide au logement</a> pour les moins de 60 ans<br/>
                                Comment :  à demander sur le certificat de la MDPH. Un ergothérapeute de la MDPH peut parfois venir évaluer la demande à domicile.
                            </li>
                            <li>
                                via l’APA pour les plus de 60 ans
                            </li>
                            <li>
                                via la caisse de retraite
                            </li>
                            <li>
                                via l’aide fiscale par crédit d’impot
                            </li>
                            <li>
                                via l’ANAH (Agence Nationale de l’Habitat)
                            </li>
                        </ul><br/>
                        Si vous êtes locataire : vous devez demander un accord écrit du bailleur pour la réalisation de travaux d’aménagements ou de transformation du logement, les travaux ne sont pas à la charge du bailleur. Si vous êtes locataire d’un logement social : faire une demande de travaux auprès du bailleur social ; si les travaux ne sont pas possibles il doit vous proposer un autre logement adapté.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalAmenLog} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalVehic} fade={false} centered>
                    <ModalHeader>Aménagement du véhicule</ModalHeader>
                    <ModalBody>
                        Il existe deux possibilités :<br/><br/>
                        - Si le handicap nécessite de modifier le poste de conduite :<br/>
                        Pour qui : personne titulaire du permis de conduire ET portant la mention restrictive d'un poste de conduite adapté.<br/>
                        Prise en charge : PCH aménagement du véhicule, assurance, CPAM, AGEFIPH si le véhicule est utilisé pour le travail.<br/>
                        Comment : demande sur le certificat MDPH pour obtenir la PCH. Demande des dossiers spécifiques pour les autres organismes.<br/>
                        <br/><br/>
                        - Si le handicap nécessite un aménagement de véhicule pour le passager. Par exemple : rampe d’accès, treuil :<br/>
                        Pour qui : personnes en situation de handicap<br/>
                        Prise en charge : certaines assurances, PCH aménagement du véhicule<br/>
                        Comment : demande sur le certificat MDPH pour obtenir la PCH. Demande des dossiers spécifiques pour votre assurance.<br/>


                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalVehic} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalMM} fade={false} centered>
                    <ModalHeader>Matériel médical</ModalHeader>
                    <ModalBody>
                        Le matériel médical est habituellement soumis à prescription médicale (ordonnance) et une partie est remboursée par la Sécurité Sociale.
                        <br/><br/>
                        En ce qui concerne l’appareillage, les fauteuils roulants c’est la MDPH qui finance avec la <a href="https://www.service-public.fr/particuliers/vosdroits/F14202" target="_blank">PCH.</a>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalMM} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalUE} fade={false} centered>
                    <ModalHeader>Unite Eveil</ModalHeader>
                    <ModalBody>
                        Service qui accueille les patients en phase d’éveil. Il s’agit souvent de traumatisés crâniens sévères qui ont vécus un long séjour en réanimation, qui sont maintenant plus stables sur le plan vital, mais restent en état de conscience altérée. Les complications médicales et les décès restent fréquents à ce stade. L’objectif du service est d’apporter un environnement propice à l’éveil, avec des stimulations visuelles (photos par exemple), auditives (voix des proches, musique), présence de l’entourage, etc…
                        <br/><br/>
                        Si le patient récupère un état de conscience suffisant il rejoindra un service de rééducation.
                        <br/>
                        Si le patient ne se réveille pas ou que son niveau de conscience reste altéré, l’orientation vers une Unité EVC-EPR (Etat Végétatif Chronique- Etat Pauci Relationnel) se discutera.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalUE} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalAFTC} fade={false} centered>
                    <ModalHeader>Association Francaise des Traumatisés Crâniens</ModalHeader>
                    <ModalBody>
                        Il s’agit d’une association qui regroupe les personnes et leurs familles atteintes par une
                        lésion cérébrale acquise. Elle permet de faciliter le contact entre les blessés et les familles,
                        de les conseiller et les soutenir tout au long de la prise en charge. Elle représente et défend
                        les intérêts et les droits auprès des instances décisionnelles, participe à des actions de
                        prévention des accidents
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalAFTC} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalGEM} fade={false} centered>
                    <ModalHeader>Groupe d'entraide mutuelle</ModalHeader>
                    <ModalBody>
                        Lieu ouvert aux personnes cérébrolésées, encadré par des animateurs et des bénévoles et financé
                        par l’Agence Régionale de Santé. C’est un lieu de rencontres, d’échanges, d’entraide et de
                        loisirs partagés.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalGEM} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalYMCA} fade={false} centered>
                    <ModalHeader>YMCA</ModalHeader>
                    <ModalBody>
                        Unité de Soutien et d'Accompagnement aux Personnes Cérébrolésées. Association régionale qui gère
                        des établissements sociaux et médico-sociaux agréés, notamment un ESAT, une entreprise adaptée,
                        un centre de rééducation professionnelle, et des foyers d’hébergement. Elle accueille également
                        des personnes cérébro lésées pour des activités rééducatives (individuelles ou
                        collectives).<br/>
                        Pour qui : personne en situation de handicap<br/>
                        Comment : il faut demander une notification d’orientation sur le certificat MDPH rempli par le
                        médecin.<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalYMCA} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalDeplac} fade={false} centered>
                    <ModalHeader>Aide aux déplacements</ModalHeader>
                    <ModalBody>
                        <ul>
                            <li>
                                Pour les rendez vous médicaux en lien avec votre handicap: ambulance, VSL ou remboursement d’un trajet en véhicule personnel. Prise en charge par la CPAM. Comment : bon de transport à demander à remplir par le médecin AVANT le rendez vous.
                            </li>
                            <li>
                                Pour se rendre au travail : l’ AGEFIPH peut financer des moyens de transport (aménagement véhicule personnel, taxis, autre)
                            </li>
                            <li>
                                Carte Mobilité Inclusion : permet une priorité d’accès dans les transports en commun, les espaces et salles d’attente, les établissements publics, accès aux places de stationnement pour personne à mobilité réduite.
                                <br/>
                                Pour qui : handicap avec taux d’incapacité permanente d’au moins 80%, ou invalidité catégorie 3, ou groupe Aggir 1et 2.
                                <br/>
                                Comment : à demander sur le certificat MDPH
                            </li>
                            <li>
                                Services d’aide au transport spécifiques dans certaines villes ou départements (ex : Mobibus à Toulouse). Vous pouvez demander conseil à votre assistante sociale.
                            </li>
                        </ul>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalDeplac} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalSport} fade={false} centered>
                    <ModalHeader>Sport et loisirs adaptés</ModalHeader>
                    <ModalBody>
                        Des structures (centres sportifs, associations…) proposent des sports ou des activités de loisirs adaptées au handicap moteur ou cognitif.<br/>
                        Un recensement détaillé des associations de sports et loisirs adaptés a été réalisé pour <a href="https://www.haute-garonne.fr/sites/default/files/cd31_guide_services_a_domicile_paph.pdf" target="_blank"> l’agglomération toulousaine. </a><br/>
                        Et vous pouvez également trouver des informations sur l’annuaire Handi Sport, qui est moins détaillé mais couvre l’ensemble de la <a href='https://f2.quomodo.com/682C5CED/uploads/1059/Annuaire%202019%20par%20discipline.pdf' target='_blank'> Haute Garonne.</a>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalSport} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalMTra} fade={false} centered>
                    <ModalHeader>Médecine du travail</ModalHeader>
                    <ModalBody>
                        Son rôle est de vérifier que vous êtes en capacité de travailler sur votre poste, et si ce n’est pas le cas de discuter des possibilités d’aménagement du poste avec votre employeur. Une consultation avec le médecin du travail est obligatoire avant de reprendre votre activité si vous avez eu un arrêt de travail supérieur à 30 jours.
                        <br/><br/>
                        Son accord est également nécessaire si une reprise à temps partiel pour raison thérapeutique est envisagée.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalMTra} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalAdapt} fade={false} centered>
                    <ModalHeader>Adaptation de poste</ModalHeader>
                    <ModalBody>
                        Le salarié peut demander à bénéficier d’adaptations des conditions de travail à son état de
                        santé. Il peut s’agir d’adaptation des horaires (pour permettre une sieste en cas de
                        fatigabilité par exemple), de télétravail, d’aménagement technique (rampe d’accès, bureau adapté
                        par exemple). Cela doit être discuté avec l’employeur et le médecin du travail ; un certificat
                        médical justifiant l’état de santé peut être demandé.<br/>
                        L’entreprise peut obtenir des aides financières via l’Agefiph pour réaliser les aménagements ou
                        acheter du matériel adapté.<br/>
                        Il peut être demandé une RQTH afin de justifier de l’aménagement de poste auprès de l’organisme financeur
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalAdapt} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalESAT} fade={false} centered>
                    <ModalHeader>Etablissements et Services d'Aide par le Travail</ModalHeader>
                    <ModalBody>
                        Il s’agit de structures qui permettent aux personnes en situation de handicap grave de réaliser
                        leur activité professionnelle en bénéficiant d'un soutien médico-social et éducatif dans un
                        milieu protégé. Les travailleurs sont rémunérés entre 55 % et 110 % du SMIC. Il y a souvent un
                        foyer d’hébergement associé à la structure.<br/>
                        Pour qui : personne qui ne peut pas travailler dans une entreprise ordinaire ou une entreprise
                        adaptée. Car la capacité de travail ne dépasse pas le 1/3 de celle d'une personne valide, ou si
                        la personne a besoin de soutiens médicaux, éducatifs, sociaux et psychologiques. Il faut avoir
                        au moins 20 ans.<br/>
                        Comment : la demande de « notification RQTH avec orientation vers un Esat » est faite sur le
                        certificat de la MDPH rempli par le médecin. La commission de la MDPH (CDAPH) prendra la
                        décision.<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalESAT} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalUEROS} fade={false} centered>
                    <ModalHeader>Unité d'Evaluation, de Réentrainemenet de d'Orientation
                        Socioprofessionnelle</ModalHeader>
                    <ModalBody>
                        Une équipe pluri disciplinaire (médecin, ergothérapeute, psychologue / neuropsychologue, chargé
                        d’insertion, formateur, assistant de service social, secrétaire) va étudier les possibilités de
                        réinsertion sociale et/ou professionnelle. L’objectif est d’élaborer et de mettre en œuvre un
                        programme de réentrainement individualisé pour optimiser ses capacités et de construire un
                        projet d’insertion.<br/>
                        Pour qui : adultes de 18 à 60 ans en situation de handicap suite à une lésion cérébrale acquise,
                        avec notification RQTH (Reconnaissance de la qualité de travailleur handicapé : cf en bas).<br/>
                        Comment : la demande de « notification UEROS » est faite sur le certificat de la MDPH rempli par
                        le médecin. La commission de la MDPH prendra la décision.<br/>
                        Et les propositions d’orientation après l’évaluation de l’UEROS doivent aussi être validées par
                        la MDPH.<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalUEROS} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalCOMETE} fade={false} centered>
                    <ModalHeader>COMETE</ModalHeader>
                    <ModalBody>
                        Association présente dans certains services de Médecine Physique et de Réadaptation. Avec les
                        compétences d’une équipe pluri disciplinaire l’objectif est la prise en charge précoce des
                        problématiques socio-professionnelles des patients hospitalisés.<br/>
                        Pour qui : personnes hospitalisées ou suivis en établissement associé à une cellule Comète.<br/>
                        Comment : le médecin peut proposer une prise en charge si la personne est volontaire.<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalCOMETE} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalCAPE} fade={false} centered>
                    <ModalHeader> Cap Emploi </ModalHeader>
                    <ModalBody>
                        Organisme du service public qui accueille, informe et conseille la personne en situation de
                        handicap et les entreprises en vue d’une insertion professionnelle, d’une transition
                        professionnelle ou d’une formation ; en milieu ordinaire de travail.<br/>
                        Pour qui : les entreprises et les personnes reconnues travailleur handicapé (RQTH) par la
                        MDPH<br/>
                        Comment : faire la demande auprès de votre conseiller Pôle Emploi.<br/>
                        <a href='https://www.capemploi31.com' target='_blank'>Cap Emploi 31</a>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalCAPE} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalSMMETH} fade={false} centered>
                    <ModalHeader>Service d'Appui au Maintien en Emploi des Travailleurs Handicapés</ModalHeader>
                    <ModalBody>
                        Son objectif est d’aider les salariés et les entreprises à trouver une solution de maintien dans
                        l’emploi quand celui n’est pas possible dans les conditions actuelles en raison du handicap du
                        salarié. Il peut alors proposer des aménagements matériels, de temps de travail, demander des
                        aides financières.<br/>
                        Pour qui : personnes reconnues travailleur handicapé ou en voie de le devenir<br/>
                        Comment : intervient sur demande de la Médecine du Travail.<br/>

                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalSMMETH} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalMAS} fade={false} centered>
                    <ModalHeader>Maison d'accueil spécialisé</ModalHeader>
                    <ModalBody>
                        Structure d’hébergement qui accueille des adultes avec handicap grave et dont les capacités de
                        décision et d'action dans les actes de la vie quotidienne sont altérées. On y propose des
                        activités d'éveil ou occupationnelles, des soins médicaux et paramédicaux adaptés<br/>
                        Pour qui : adulte nécessitant le recours à une tierce personne pour les actes de la vie courante
                        ainsi qu'une surveillance médicale et des soins constants.<br/>
                        Comment : demande MDPH via le formulaire spécifique<br/>
                        Prise en charge : Sécurité sociale + participation financière du résident de 20 € par jour (sauf
                        si CMU-complémentaire)<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalMAS} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalFAM} fade={false} centered>
                    <ModalHeader>Foyer d'Accueil Médicalisé</ModalHeader>
                    <ModalBody>
                        Structure d'hébergement qui accueille des adultes avec handicap grave. Elle permet un
                        accompagnement pour effectuer les actes essentiels de la vie courante, une aide éducative, des
                        soins médicaux et paramédicaux adaptés.<br/>
                        Pour qui : adulte nécessitant le recours à une tierce personne pour les actes de la vie courante
                        ainsi qu'une surveillance médicale et des soins constants.<br/>
                        En principe, le foyer d'accueil médicalisé (Fam) accueille des personnes un peu moins
                        dépendantes que celles hébergées en maison d'accueil spécialisée (Mas), mais dans la pratique,
                        les publics sont sensiblement les mêmes.<br/>
                        Comment : demande MDPH via le formulaire spécifique<br/>
                        Prise en charge : Sécurité Sociale + participation aux frais d'hébergement et d'entretien
                        demandée au résident, plafonnée en fonction des revenus.<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalFAM} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalFoyer} fade={false} centered>
                    <ModalHeader>Foyer de vie</ModalHeader>
                    <ModalBody>
                        Etablissement qui accueille des adultes handicapés ayant une certaine autonomie pour leur
                        proposer des animations, des activités ludiques et éducatives en fonction de leur handicap. Il
                        peut s’agir d’un accueil temporaire, de jour ou en internat.<br/>
                        Pour qui : adultes avec taux d'incapacité d'au moins 50 % et ne relevant ni d'un établissement
                        et service d'aide par le travail (Ésat), ni d'une maison d'accueil spécialisée (Mas), ni d'un
                        foyer d'accueil médicalisé (Fam).<br/>
                        Comment : demande MDPH via le formulaire spécifique<br/>
                        Prise en charge : Sécurité Sociale + participation aux frais d'hébergement et d'entretien
                        demandée au résident, plafonnée en fonction des revenus.<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalFoyer} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalAccueilJour} fade={false} centered>
                    <ModalHeader>Service d'accueil de jour</ModalHeader>
                    <ModalBody>
                        Accueil des adultes handicapés sur demi-journées ou journées entières pour y réaliser des activités en groupe et aider à la réalisation d’un projet de vie. Ces structures ne sont pas médicalisées.<br/><br/>
                        Pour qui : adulte de 20 à 60 ans en situation de handicap, ayant une autonomie suffisante pour participer à des activités en groupe.<br/><br/>
                        Comment : demande MDPH via le formulaire spécifique (certificat MDPH)
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalAccueilJour} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalLogement} fade={false} centered>
                    <ModalHeader>Foyer appartement et Logements partagés</ModalHeader>
                    <ModalBody>
                        Différents types de structures existent. Elles sont associatives ou privées. Leur objectif est de permettre une indépendance et une autonomie tout en apportant l’aide adaptée aux difficultés de chacun. Il peut s’agir d’aides à domicile 24h/24 dont les coûts sont partagés par plusieurs habitants, d’une colocation permettant une mise en commun des aides humaines, techniques et de l’entraide, etc… Il faut contacter directement les structures pour connaitre leur fonctionnement et savoir si elles correspondent à votre situation.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalLogement} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalHandi} fade={false} centered>
                    <ModalHeader>Unité pour Personnes Handicapées Vieillissantes</ModalHeader>
                    <ModalBody>
                        Elle accueille des personnes handicapées de plus de 60 ans qui résidaient en établissement pour personnes handicapées (FAM, Foyers Occupationnels...). Il s’agit d’une unité spécifique au sein d’un Etablissement d’Hébergement pour Personnes Agées Dépendantes (EHPAD). Il en existe plusieurs en Hérault mais pas encore dans les autres départements d’Occitanie.                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalHandi} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalEntreprises} fade={false} centered>
                    <ModalHeader>Enteprises adaptées</ModalHeader>
                    <ModalBody>
                        Il s’agit d’entreprises qui fonctionnent comme une entreprise en milieu ordinaire, mais au moins 80 % des effectifs se composent de personnes en situation de handicap. Elle propose un accompagnement spécifique favorisant la réalisation d'un projet professionnel. La rentabilité exigée est plus grande qu’en ESAT.<br/><br/>
                        Pour qui : personne en situation de handicap avec une capacité de travail d’au moins 1/3 de celle d'une personne valide.<br/><br/>
                        Comment : il faut obtenir la « notification RQTH avec orientation vers le marché du travail » qui est demandée sur le certificat de la MDPH rempli par le médecin. Puis le recrutement en entreprise adaptée se fait sur proposition de Pôle emploi ou de Cap emploi. Le recrutement peut être fait directement par l’entreprise adaptée si le salarié sort d'un Ésat ou change d'entreprise adaptée.
                    </ModalBody>
                        <ModalFooter>
                        <Button onClick={this.triggerModalEntreprises} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalDEA} fade={false} centered>
                    <ModalHeader>Dispositif emplois accompagnés</ModalHeader>
                    <ModalBody>
                        C’est un dispositif qui doit permettre aux adultes handicapés d’obtenir et de garder un emploi rémunéré. Il doit soutenir et accompagner le salarié ainsi que l’employeur.<br/>
                        Il intervient en complément des services déjà existants (Cap Emploi, Agefiph…) et a la particularité de suivre la personne tout au long de son parcours y compris lorsqu’elle est en poste.<br/><br/>
                        Pour qui : adultes en situation de handicap avec notification RQTH (Reconnaissance de la qualité de travailleur handicapé : plus de détail dans la page Parcours de Soins) ou travaillant en ESAT et ayant un projet d’insertion en milieu ordinaire de travail.<br/><br/>
                        Comment : demande d’orientation sur le certificat MDPH rempli par le médecin. La commission de la MDPH prendra la décision.<br/><br/>
                        Pour plus de détails, cliquer <a href="https://travail-emploi.gouv.fr/emploi/emploi-et-handicap/article/emploi-et-handicap-le-dispositif-de-l-emploi-accompagne" target='_blank'> ici</a>.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalDEA} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
            </section>
        );
    }
}