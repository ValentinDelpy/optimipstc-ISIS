import React from 'react';
import {
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
import doctor from "../../../../../assets/images/doctor.png";
import child from "../../../../../assets/images/child.png";
import Collapsible from "react-collapsible";
import close from "../../../../../assets/images/close-button.png";

export default class SectionTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalMS: false,
            modalPM: false,
            modalPedia: false,
            modalNeuroP: false,
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
            modalAidant: false,
            modalSESSAD: false,
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
            modalIME: false,
            modalIEM: false,
            modalPPS: false,
            modalAESH: false,
            modalULIS: false,
            modalACPE: false,
            modalAT: false,
            modalCNED: false,
            modalPsySco: false,
            modalSEGPA: false,
            modalSIPFP: false,
            modalEVC: false,
            modalCMI: false,
            modalPCH: false,
            modalORI: false,
            modalAAH: false,
            modalCAMPS: false,
            modalPsychiatre: false,
            modalCMP: false,
            modalCMPP: false,
            modalUrPsy: false,
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
            open12: false,
            open21: false,
            open22: false,
            open23: false,
            open24: false,
            modalSoutienSco: false,
            modalSAPAD: false,
            modalMDPH: false
        }
    }
    triggerModalSoutienSco = () => {
        this.setState({modalSoutienSco: !this.state.modalSoutienSco})
    };
    triggerModalMDPH = () => {
        this.setState({modalMDPH: !this.state.modalMDPH})
    };
    triggerModalSAPAD = () => {
        this.setState({modalSAPAD: !this.state.modalSAPAD})
    };
    triggerModalMPR = () => {
        this.setState({modalMPR: !this.state.modalMPR})
    };
    triggerModalPsychiatre = () => {
        this.setState({modalPsychiatre: !this.state.modalPsychiatre})
    };
    triggerModalCMP = () => {
        this.setState({modalCMP: !this.state.modalCMP})
    };
    triggerModalCMPP = () => {
        this.setState({modalCMPP: !this.state.modalCMPP})
    };
    triggerModalUrPsy = () => {
        this.setState({modalUrPsy: !this.state.modalUrPsy})
    };

    triggerModalCAMPS = () => {
        this.setState({modalCAMPS: !this.state.modalCAMPS})
    };

    triggerModalSRPR = () => {
        this.setState({modalSRPR: !this.state.modalSRPR})
    };

    triggerModalUE = () => {
        this.setState({modalUE: !this.state.modalUE})
    };

    triggerModalKine = () => {
        this.setState({modalKine: !this.state.modalKine})
    };

    triggerModalErgo = () => {
        this.setState({modalErgo: !this.state.modalErgo})
    };

    triggerModalOrtho = () => {
        this.setState({modalOrtho: !this.state.modalOrtho})
    };
    triggerModalAuxVie = () => {
        this.setState({modalAuxVie: !this.state.modalAuxVie})
    };

    triggerModalIDE = () => {
        this.setState({modalIDE: !this.state.modalIDE})
    };

    triggerModalAidant = () => {
        this.setState({modalAidant: !this.state.modalAidant})
    };

    triggerModalSESSAD = () => {
        this.setState({modalSESSAD: !this.state.modalSESSAD})
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

    triggerModalPPS = () => {
        this.setState({modalPPS: !this.state.modalPPS})
    };

    triggerModalAESH = () => {
        this.setState({modalAESH: !this.state.modalAESH})
    };

    triggerModalULIS = () => {
        this.setState({modalULIS: !this.state.modalULIS})
    };

    triggerModalAFTC = () => {
        this.setState({modalAFTC: !this.state.modalAFTC})
    };

    triggerModalDeplac = () => {
        this.setState({modalDeplac: !this.state.modalDeplac})
    };

    triggerModalSport = () => {
        this.setState({modalSport: !this.state.modalSport})
    };

    triggerModalACPE = () => {
        this.setState({modalACPE: !this.state.modalACPE})
    };
    triggerModalIEM = () => {
        this.setState({modalIEM: !this.state.modalIEM})
    };

    triggerModalESAT = () => {
        this.setState({modalESAT: !this.state.modalESAT})
    };

    triggerModalAT = () => {
        this.setState({modalAT: !this.state.modalAT})
    };

    triggerModalCNED = () => {
        this.setState({modalCNED: !this.state.modalCNED})
    };

    triggerModalPsySco = () => {
        this.setState({modalPsySco: !this.state.modalPsySco})
    };

    triggerModalSEGPA = () => {
        this.setState({modalSEGPA: !this.state.modalSEGPA})
    };

    triggerModalSIPFP = () => {
        this.setState({modalSIPFP: !this.state.modalSIPFP})
    };

    triggerModalIME = () => {
        this.setState({modalIME: !this.state.modalIME})
    };
    triggerModalOTP = () => {
        this.setState({modalOTP: !this.state.modalOTP})
    };
    triggerModalPedia = () => {
        this.setState({modalPedia: !this.state.modalPedia})
    };

    triggerModalNP = () => {
        this.setState({modalNP: !this.state.modalNP})
    };

    triggerModalNC = () => {
        this.setState({modalNC: !this.state.modalNC})
    };

    triggerModalNeuroP = () => {
        this.setState({modalNeuroP: !this.state.modalNeuroP})
    };

    triggerModalMR = () => {
        this.setState({modalMR: !this.state.modalMR})
    };

    triggerModalPM = () => {
        this.setState({modalPM: !this.state.modalPM})
    };

    triggerModalMT = () => {
        this.setState({modalMT: !this.state.modalMT})
    };

    triggerModalMS = () => {
        this.setState({modalMS: !this.state.modalMS})
    };
    triggerModalEVC = () => {
        this.setState({modalEVC: !this.state.modalEVC})
    };
    triggerModalCMI = () => {
        this.setState({modalCMI: !this.state.modalCMI})
    };
    triggerModalPCH = () => {
        this.setState({modalPCH: !this.state.modalPCH})
    };
    triggerModalOri= () => {
        this.setState({modalOri: !this.state.modalOri})
    };
    triggerModalAAH= () => {
        this.setState({modalAAH: !this.state.modalAAH})
    };

    render() {
        return (
            <section className={'section'}>
                <Container fluid  className={'container-justify'}>
                    <Col xs='12' xl='12' className={'row-equipe'}>
                        <div className={'action-responsive'}>
                            À l'issue de la prise en charge initiale, même si le patient est stabilisé, le suivi médical
                            et la prise en charge rééducative nécessitent d'être poursuivis. En parallèle, un parcours
                            de vie se met en place.<br/>
                            Les dispositifs d'aide sont nombreux et il n'est pas toujours facile de s'y retrouver.<br/>
                            Nous vous présentons ci-dessous les principales personnes, dispositifs et structures dont
                            vous pouvez avoir besoin.<br/>
                            Des informations supplémentaires apparaissent en cliquant sur la case correspondante.
                        </div>
                    </Col>
                    <Row className={'justify-content-start'}>
                        <Col xs="12" xl="6">
                            <h2 className={'titre TCL'}>
                                Parcours médical
                            </h2><br/>
                                <Card className={'container-set'}>
                                    <Collapsible
                                        open={this.state.open21}
                                        onOpening={() => {
                                            // eslint-disable-next-line no-undef
                                            this.setState({open21: true});
                                            this.setState({open22: false});
                                            this.setState({open23: false});
                                            this.setState({open24: false});
                                        }}
                                        onClosing={() => {
                                            this.setState({open21: false});
                                        }}
                                        trigger="Services d'hospitalisation" className={'clp1'}>
                                        <div className="text-align-parcours">
                                            <a onClick={this.triggerModalMPR}   className={'link'}> MPR
                                                Pédiatrie </a><br/>
                                            <a onClick={this.triggerModalUE}   className={'link'}> Unité d'Eveil Pédiatrique </a><br/>
                                            <a onClick={this.triggerModalEVC}   className={'link'}> Unité
                                                EVC-EPR </a><br/>
                                            <Button color="link" className={'button-interface'} onClick={() => {
                                                this.setState({open21: false});
                                            }}><img src={close} alt="Close button"></img></Button>
                                        </div>
                                    </Collapsible>
                                    <Collapsible open={this.state.open22}
                                                 onOpening={() => {
                                                     // eslint-disable-next-line no-undef
                                                     this.setState({open21: false});
                                                     this.setState({open22: true});
                                                     this.setState({open23: false});
                                                 }}
                                                 onClosing={() =>
                                                     this.setState({open22: false})}
                                                 trigger="Rééducateurs" className={'clp2'}>
                                        <div className="text-align-parcours">
                                            <a onClick={this.triggerModalKine}  
                                               className={'link'}> Kinésithérapeute </a><br/>
                                            <a onClick={this.triggerModalErgo}  
                                               className={'link'}> Ergothérapeute </a><br/>
                                            <a onClick={this.triggerModalOrtho}  
                                               className={'link'}> Orthophoniste </a><br/>
                                            <a onClick={this.triggerModalOTP}  
                                               className={'link'}> Orthoptiste </a><br/>
                                            <a onClick={this.triggerModalPM}  
                                               className={'link'}> Psychomotricien </a><br/>
                                            <Button color="link" className={'button-interface'} onClick={() => {
                                                this.setState({open22: false});
                                            }}><img src={close} alt="Close button"></img></Button>
                                        </div>
                                    </Collapsible>
                                    <Collapsible
                                        open={this.state.open23}
                                        onOpening={() => {
                                            // eslint-disable-next-line no-undef
                                            this.setState({open21: false});
                                            this.setState({open22: false});
                                            this.setState({open23: true});
                                            this.setState({open24: false});
                                        }}
                                        onClosing={() => {
                                            this.setState({open23: false});
                                        }}
                                        trigger="Suivi médical" className={'clp3'}>
                                        <div className="text-align-parcours">
                                            <a onClick={this.triggerModalPedia}  
                                               className={'link'}> Pédiatre </a><br/>
                                            <a onClick={this.triggerModalNC}  
                                               className={'link'}> Neurochirurgien </a><br/>
                                            <a onClick={this.triggerModalMR}   className={'link'}> Médecin
                                                de MPR </a><br/>
                                            <a onClick={this.triggerModalNeuroP}  
                                               className={'link'}> Neuropédiatre </a><br/>
                                            <a onClick={this.triggerModalMT}   className={'link'}> Médecin
                                                traitant </a><br/>
                                            <a onClick={this.triggerModalMS}   className={'link'}> Médecin
                                                Scolaire </a><br/>
                                                <a onClick={this.triggerModalCAMPS} className={'link'}>
                                                    CAMPS
                                                </a><br/>
                                            <Button color="link" className={'button-interface'} onClick={() => {
                                                this.setState({open23: false});
                                            }}><img src={close} alt="Close button"></img></Button>
                                        </div>
                                    </Collapsible>
                                    <Collapsible
                                        open={this.state.open24}
                                        onOpening={() => {
                                            // eslint-disable-next-line no-undef
                                            this.setState({open21: false});
                                            this.setState({open22: false});
                                            this.setState({open23: false});
                                            this.setState({open24: true});

                                        }}
                                        onClosing={() => {
                                            this.setState({open24: false});
                                        }}
                                        trigger="Accompagnement psychiatrique et psychologique" className={'clp3'}>
                                        <div className="text-align-parcours">
                                            <a onClick={this.triggerModalPsychiatre}
                                               className={'link'}> Psychiatre </a><br/>
                                            <a onClick={this.triggerModalCMP}
                                               className={'link'}> CMP </a><br/>
                                            <a onClick={this.triggerModalCMPP}   className={'link'}> CMPP </a><br/>
                                            <a onClick={this.triggerModalUrPsy}
                                               className={'link'}> Urgences Psychiatriques </a><br/>
                                            <Button color="link" className={'button-interface'} onClick={() => {
                                                this.setState({open24: false});
                                            }}><img src={close} alt="Close button"></img></Button>
                                        </div>
                                    </Collapsible>
                                </Card>
                        </Col>
                            <Col xs="12" xl="6">
                                <h2 className={'titre TCL'}>
                                    Parcours de vie
                                </h2><br/>
                                <Card className={'container-set'}>
                                    <h3 className={'titre'}>Aide à domicile</h3>
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
                                                this.setState({open50: false});

                                            }}
                                            onClosing={() => {
                                                this.setState({open1: false});
                                            }}
                                            trigger="Aides humaines" className={'clp1'}>
                                            <div className="text-align-parcours">
                                                <a onClick={this.triggerModalAuxVie}  
                                                   className={'link'}> Auxilaire de vie </a><br/>
                                                <a onClick={this.triggerModalIDE}  
                                                   className={'link'}> Infirmier(e) </a><br/>
                                                <a onClick={this.triggerModalAidant}  
                                                   className={'link'}> Aidant </a><br/>
                                                <Button color="link" className={'button-interface'} onClick={() => {
                                                    this.setState({open1: false});
                                                }}><img src={close} alt="Close button"></img></Button>
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
                                                         this.setState({open50: false});

                                                     }}
                                                     onClosing={() =>
                                                         this.setState({open2: false})}
                                                     trigger="Services de coordination des soins" className={'clp2'}>
                                                <div className="text-align-parcours">
                                                    <a onClick={this.triggerModalSESSAD}
                                                       className={'link'}> SESSAD </a><br/>
                                                <Button color="link" className={'button-interface'} onClick={() => {
                                                    this.setState({open2: false});
                                                }}><img src={close} alt="Close button"></img></Button>
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
                                                this.setState({open50: false});

                                            }}
                                            onClosing={() => {
                                                this.setState({open3: false});
                                            }}
                                            trigger="Aides matérielles" className={'clp3'}>
                                            <div className="text-align-parcours">
                                                <a onClick={this.triggerModalAmenLog}  
                                                   className={'link'}> Aménagement du logement </a><br/>
                                                <a onClick={this.triggerModalVehic}  
                                                   className={'link'}> Aménagement du véhicule  </a><br/>
                                                <a onClick={this.triggerModalMM}   className={'link'}> Matériel
                                                    médical </a><br/>
                                                <Button color="link" className={'button-interface'} onClick={() => {
                                                    this.setState({open3: false});
                                                }}><img src={close} alt="Close button"></img></Button>
                                            </div>
                                        </Collapsible>
                                </Card>
                                <Card className={'container-set'}>
                                    <h3 className={'titre'}>Aide à la vie sociale</h3>
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
                                                this.setState({open50: false});

                                            }}
                                            onClosing={() => {
                                                this.setState({open4: false});
                                            }}
                                            trigger="Insertion sociale" className={'clp4'}>
                                            <div className="text-align-parcours">
                                                <a onClick={this.triggerModalDeplac}   className={'link'}> Aide aux
                                                    déplacements </a><br/>
                                                <a onClick={this.triggerModalSport}   className={'link'}> Sport,
                                                    loisirs adaptés </a><br/>
                                                <Button color="link" className={'button-interface'} onClick={() => {
                                                    this.setState({open4: false});
                                                }}><img src={close} alt="Close button"></img></Button>
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
                                                this.setState({open50: false});

                                            }}
                                            onClosing={() => {
                                                this.setState({open11: false});
                                            }}
                                            trigger="Associations de soutien" className={'clp5'}>
                                            <div className="text-align-parcours">
                                                <a onClick={this.triggerModalAFTC}   className={'link'}> AFTC </a><br/>
                                                <Button color="link" className={'button-interface'} onClick={() => {
                                                    this.setState({open11: false});
                                                }}><img src={close} alt="Close button"></img></Button>
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
                                                this.setState({open50: false});

                                            }}
                                            onClosing={() => {
                                                this.setState({open6: false});
                                            }}
                                            trigger="Établissements médico-sociaux" className={'clp6'}>
                                            <div className="text-align-parcours">
                                                <a onClick={this.triggerModalIME}   className={'link'}>IME </a><br/>
                                                <a onClick={this.triggerModalIEM}   className={'link'}> IEM </a><br/>
                                                <a onClick={this.triggerModalSIPFP}   className={'link'}> SIPFP </a><br/>
                                                <Button color="link" className={'button-interface'} onClick={() => {
                                                    this.setState({open6: false});
                                                }}><img src={close} alt="Close button"></img></Button>
                                            </div>
                                        </Collapsible>
                                    </Card>
                                <Card className={'container-set'}>
                                    <h3 className={'titre'}>Aide à la scolarité</h3>
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
                                            this.setState({open50: false});

                                        }}
                                        onClosing={() => {
                                            this.setState({open5: false});
                                        }}
                                        trigger="En milieu ordinaire" className={'clp5'}>
                                        <div className="text-align-parcours">
                                            <a onClick={this.triggerModalULIS}   className={'link'}> Classe ULIS </a><br/>
                                            <a onClick={this.triggerModalSEGPA}   className={'link'}> Classe SEGPA </a><br/>
                                            <a onClick={this.triggerModalACPE}   className={'link'}> Aménagement
                                                conditions de passation des examens </a><br/>
                                            <a onClick={this.triggerModalCNED}   className={'link'}> CNED </a><br/>
                                            <a onClick={this.triggerModalSoutienSco} href={"#"} className={'link'}> Soutien Scolaire </a><br/>
                                            <a onClick={this.triggerModalSAPAD} href={"#"} className={'link'}> SAPAD </a><br/>
                                            <Button color="link" className={'button-interface'} onClick={() => {
                                                this.setState({open5: false});
                                            }}><img src={close} alt="Close button"></img></Button>
                                        </div>
                                    </Collapsible>
                                        <Collapsible
                                            open={this.state.open50}
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
                                                this.setState({open11: false});
                                                this.setState({open12: false});
                                                this.setState({open50: true});
                                            }}
                                            onClosing={() => {
                                                this.setState({open50: false});
                                            }}
                                            trigger="Aménagement scolarité" className={'clp5'}>
                                            <div className="text-align-parcours">
                                                <a onClick={this.triggerModalPPS}   className={'link'}> PPS </a><br/>
                                                <a onClick={this.triggerModalAESH}   className={'link'}> AESH </a><br/>
                                                <a onClick={this.triggerModalAT}   className={'link'}> Aides
                                                    techniques </a><br/>
                                                <a onClick={this.triggerModalCNED}   className={'link'}> CNED </a><br/>
                                                <a onClick={this.triggerModalPsySco}   className={'link'}> Psychologue
                                                    scolaire </a><br/>
                                                <Button color="link" className={'button-interface'} onClick={() => {
                                                    this.setState({open50: false});
                                                }}><img src={close} alt="Close button"></img></Button>
                                            </div>
                                        </Collapsible>
                                </Card>
                                <Card className={'container-set'}>
                                    <h3 className={'titre'}>MDPH</h3>
                                    <div className="text-align-parcours">
                                        <p className={'clp5'}>
                                            <a onClick={this.triggerModalMDPH} className={'link divmdph'}>MDPH : son fonctionnement</a><br/>
                                        </p>
                                        <p className={'clp5'}>
                                            <a onClick={this.triggerModalCMI} className={'link divmdph'}>Carte Mobilité Inclusion (CMI) </a><br/>
                                        </p>
                                        <p className={'clp6'}>
                                            <a onClick={this.triggerModalPCH} className={'link divmdph'}> PCH</a><br/>
                                        </p>
                                        <p className={'clp6'}>
                                            <a onClick={this.triggerModalOri}className={'link divmdph'}> Orientation</a><br/>
                                        </p>
                                        <p className={'clp7'}>
                                            <a onClick={this.triggerModalAAH} className={'link divmdph'}> AAEH </a><br/>
                                        </p>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            Pour plus d'informations sur les aides et les allocations existantes :
                            <a href='https://www.service-public.fr/particuliers/vosdroits/N12230' className="sp">Service public -
                                Vos droits</a>
                        </Row>
                </Container>
                <Modal className={'tc_modal'} isOpen={this.state.modalAuxVie} fade={false} centered>
                    <ModalHeader>Auxiliaire de vie sociale</ModalHeader>
                    <ModalBody>
                        Personne qui vient à domicile pour aider à réaliser les activités de la vie quotidienne comme :  toilette, habillage, courses, repas, déplacements, participation à la vie sociale. Elle doit s’adapter aux capacités et à la pathologie de la personne pour favoriser son autonomie.<br/>
                        Pour qui : personne en situation de handicap, personne âgée en perte d’autonomie.<br/>
                        Comment : demande auprès d’un prestataire de services, ou d’une association d’aides à domicile.<br/>
                        Prise en charge : PCH pour les moins de 60 ans, APA pour les plus de 60 ans.<br/>
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
                <Modal className={'tc_modal'} isOpen={this.state.modalSESSAD} fade={false} centered>
                    <ModalHeader>Service d'Education Specialisée et de Soins à Domicile</ModalHeader>
                    <ModalBody>
                        Service mobile du secteur médico-social, il apporte aux familles conseils et accompagnement dans
                        le but de favoriser l'inclusion scolaire et l'autonomie. Il met en place des actions de soins,
                        de rééducation et d’enseignement dans les lieux de vie de l’élève handicapé.<br/>
                        Comment : décidé lors de l’élaboration du PPS par la CDAPH (MDPH)<br/>
                        Prise en charge : Sécurité sociale<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalSESSAD} className={'buttonSecondary'}>Fermer</Button>
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
                <Modal className={'tc_modal'} isOpen={this.state.modalPPS} fade={false} centered>
                    <ModalHeader>Plan Personnalisé de Scolarisation</ModalHeader>
                    <ModalBody>
                        Il s’agit d’un acte écrit qui sert à définir les besoins particuliers de l’élève dans sa
                        scolarisation. Par exemple en aménageant l’emploi du temps pour permettre de poursuivre la
                        rééducation, en demandant un accompagnement humain, du matériel pédagogique adapté…<br/>
                        Il est élaboré à l’aide d’une équipe pluridisciplinaire de la MDPH qui évalue les besoins.<br/>
                        Il peut concerner la scolarisation en maternelle, primaire ou secondaire.<br/>
                        Pour qui : élève en situation de handicap<br/>
                        Comment : la demande est faite auprès de la MDPH, par l’élève s’il est majeur et par les parents
                        s’il est mineur. Il est préférable d’en parler avec l'enseignant référent avant.<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalPPS} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalAESH} fade={false} centered>
                    <ModalHeader>Accompagnant d'Elèves en Situation de Handicap</ModalHeader>
                    <ModalBody>
                        C’est une personne chargée de l’accompagnement de l’élève en situation de handicap pour l’aider
                        à accomplir des gestes qu'il ne peut faire seul, faciliter le contact avec ses camarades de
                        classe, tout en veillant à l'encourager dans ses progrès en autonomie. Elle travaille en
                        collaboration avec l'enseignant. Il peut s’agir d’une aide individualisée en milieu ordinaire,
                        ou collective dans les classes ULIS par exemple.<br/>
                        Pour qui : élève en situation de handicap<br/>
                        Comment : la demande est faite auprès de la MDPH pour être inclus dans le PPS. Une fois que le
                        domaine d’activité et le quota d’heures est défini l’AESH est recruté par le rectorat<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalAESH} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalULIS} fade={false} centered>
                    <ModalHeader>Unité Localisée pour l'Inclusion Scolaire</ModalHeader>
                    <ModalBody>
                        Classes qui réunissent des élèves qui ont un même type de handicap ou des besoins éducatifs
                        proches. Accueil de 10 élèves maximum. Existe pour primaire, collège et lycée.<br/>
                        Pour qui : élève en situation de handicap dont la scolarisation en classe ordinaire n’est pas
                        adaptée<br/>
                        Comment : l’admission est décidée lors de l’élaboration du <a onClick={this.triggerModalPPS} href={"#"} className={'link'}> PPS </a> par la CDAPH (MDPH)<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalULIS} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalACPE} fade={false} centered>
                    <ModalHeader>Aménagement des conditions de passation des examens</ModalHeader>
                    <ModalBody>
                        Des dispositions particulières peuvent être demandées comme : utilisation de machine ou de matériel technique ou informatique, assistance (aide humaine), adaptation dans la présentation des sujets, temps de composition majorés.<br/><br/>
                        Ces aides sont organisés par l'éducation nationale.<br/><br/>
                        Les candidats peuvent également être autorisés à conserver les notes obtenues, à étaler leurs épreuves sur plusieurs sessions et, selon le règlement propre à chaque examen, peuvent prétendre à l'adaptation ou la dispense d'épreuves.

                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalACPE} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalAmenLog} fade={false} centered>
                    <ModalHeader>Aménagement du logement</ModalHeader>
                    <ModalBody>
                        Des aides financières peuvent être demandées si votre handicap nécessite une modification de votre logement. Il y a plusieurs possibilités de financement :
                        <ul>
                            <li>
                                via la <a href="https://www.service-public.fr/particuliers/vosdroits/F14202" target="_blank">PCH aide au logement</a> pour les moins de 60 ans<br/>
                                Comment :  à demander sur le dossier de la MDPH. Un ergothérapeute de la MDPH peut parfois venir évaluer la demande à domicile.
                            </li>
                            <li>
                                via l’APA pour les plus de 60 ans. Sous conditions de ressources.
                            </li>
                            <li>
                                via la caisse de retraite ou caisse de retraite complémentaire
                            </li>
                            <li>
                                via une déduction fiscale
                            </li>
                            <li>
                                via l’ANAH (Agence Nationale de l’Habitat). Vous pouvez vous rapprocher de l'antenne <a href="https://www.soliha.fr" target="_blank">SOLIAH</a> de votre département pour être aidé dans vos démarches.
                            </li>
                        </ul><br/>
                        Attention il est souvent nécessaire de déposer votre dossier d’aides financières avant de débuter les travaux.<br/><br/>
                        Si vous êtes locataire : vous devez demander un accord écrit du bailleur pour la réalisation de travaux d’aménagements ou de transformation du logement, les travaux ne sont pas à la charge du bailleur. Si vous êtes locataire d’un logement social : faire une demande de travaux auprès du bailleur social ; si les travaux ne sont pas possibles il doit vous proposer un autre logement adapté.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalAmenLog} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalVehic} fade={false} centered>
                    <ModalHeader>Aménagement du véhicule</ModalHeader>
                    <ModalBody>
                        Le handicap nécessite de modifier le poste de conduite <br/><br/>
                        Pour qui : personne titulaire du permis de conduire ET portant la mention restrictive d'un poste de conduite adapté.
                        <br/>
                        Prise en charge : PCH aménagement du véhicule, assurance, CPAM, AGEFIPH si le véhicule est utilisé pour le travail.
                        <br/>
                        Comment : demande sur le certificat MDPH pour obtenir la PCH. Demande des dossiers spécifiques pour les autres organismes.
                        <br/><br/>
                        Le handicap nécessite un aménagement de véhicule pour le passager. Par exemple : rampe d’accès, treuil). Seul certaines assurances prendront en charge ce type d’aménagement.<br/>
                        Prise en charge : PCH aménagement du véhicule ou certaines assurances.
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
                        CERAHTEC est une base de données sur les aides techniques destinées aux personnes handicapées et/ou âgées quel que soit le type de handicap moteur, sensoriel, psychique ou mental.<br/><br/>
                        En ce qui concerne l’appareillage, les fauteuils roulants c’est la MDPH qui finance avec la <a href="https://www.service-public.fr/particuliers/vosdroits/F14202" target="_blank">PCH.</a>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalMM} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalAT} fade={false} centered>
                    <ModalHeader>Aides techniques</ModalHeader>
                    <ModalBody>
                        Il s’agit d’outils scolaires adaptés : ciseaux, règle , tapis antidérapant etc…<br/>
                        Parmi les aides techniques de plus en plus utilisés on retrouve les outils numériques. Il peut s’agir d’ordinateur facilitant la prise de note, avec souris et/ou clavier adaptés<br/>
                        Dans le cadre du plan numérique gouvernementale pour l’éducation, des banques de ressources numériques pour l’École (BRNE) ont été développées et sont disponibles gratuitement pour les enseignants et leurs élèves, ce qui peut permettre d’accéder à des cours d’enseignement de différentes matières.<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalAT} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalCNED} fade={false} centered>
                    <ModalHeader>Centre National d'Enseignement à Distance</ModalHeader>
                    <ModalBody>
                        Le Centre national d’enseignement à distance assure le service public de l’enseignement à distance. Il scolarise les élèves qui ne peuvent être scolarisés totalement ou partiellement dans un établissement scolaire en raison de leur handicap.<br/>
                        L’intervention d’un enseignant à domicile rémunéré par le Cned est possible pour les élèves en situation de handicap.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalCNED} className={'buttonSecondary'}>Fermer</Button>
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
                <Modal className={'tc_modal'} isOpen={this.state.modalPsySco} fade={false} centered>
                    <ModalHeader>Psychologue scolaire</ModalHeader>
                    <ModalBody>
                        Le/la psychologue de l’éducation nationale apporte un soutien aux élèves en difficulté ou en situation de handicap. Il peut effectuer des entretiens individuels, des bilans psychologiques, des actions collectives d’informations, des ateliers d’orientation. En relation avec les équipes éducatives, il propose des outils et des méthodes adaptés à la situation de chaque élève et aide à l'élaboration progressive d’un projet d'orientation.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalPsySco} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalIME} fade={false} centered>
                    <ModalHeader>Institut Médico Educatif</ModalHeader>
                    <ModalBody>
                        Etablissement qui accueille les enfants handicapés, l’objectif est de dispenser une éducation et
                        un enseignement spécialisé pour favoriser l’intégration dans les différents domaines de la vie,
                        permettre une formation générale et professionnelle. Possible en externat et en internat.<br/>
                        Pour qui : enfants et adolescents handicapés présentant une déficience à prédominance
                        intellectuelle<br/>
                        Comment : demande faite par la famille après notification de la MDPH<br/>
                        Prise en charge : Sécurité sociale<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalIME} className={'buttonSecondary'}>Fermer</Button>
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
                                Pour qui : handicap avec taux d’incapacité permanente d’au moins 80%.
                                <br/>
                                Comment : à demander sur le dossier MDPH
                            </li>
                            <li>
                                Services de transport à la demande, spécifiques dans certaines villes ou départements (ex : Mobibus à Toulouse). Vous pouvez demander conseil à votre assistante sociale ou dans votre mairie.
                            </li>
                            <li>
                                Vous pouvez essayer la plateforme collaborative Jaccede (version site web et mobile) détaille l'accessibilité de nombreux lieux publiques et magasins.
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
                <Modal className={'tc_modal'} isOpen={this.state.modalIEM} fade={false} centered>
                    <ModalHeader>Institut d'Education Motrice</ModalHeader>
                    <ModalBody>
                        Etablissement qui prend en charge les enfants dont la déficience motrice nécessite le recours à
                        des moyens spécifiques pour le suivi médical, la rééducation, l’éducation spécialisée, la
                        formation générale et professionnelle. L'accueil se fait en externat ou en internat.<br/>
                        Pour qui : enfants ou adolescents présentant un handicap moteur, associé ou non à un handicap
                        cognitif, empêchant la scolarité en milieu ordinaire<br/>
                        Comment : l’admission est décidée lors de l’élaboration du <a onClick={this.triggerModalPPS} href={"#"} className={'link'}> PPS </a> par la CDAPH (MDPH)<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalIEM} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalSEGPA} fade={false} centered>
                    <ModalHeader>Section d'Enseignement Général et Professionnel Adapté</ModalHeader>
                    <ModalBody>
                        Classe qui accueille les jeunes de la 6e à la 3e ne maîtrisant pas toutes les connaissances et
                        compétences attendues en fin de primaire. Intégrée dans un collège ordinaire, avec un maximum de
                        16 élèves pour individualiser le parcours de chacun.<br/>
                        Comment : proposée par l’équipe pédagogique de l’établissement<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalSEGPA} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalSIPFP} fade={false} centered>
                    <ModalHeader>Section d'Initiation et de Première Formation Professionnelle</ModalHeader>
                    <ModalBody>
                        Section d’initiation et de première formation professionnelle SIPFP (ex IMPRO)
                        Il accueille des adolescents handicapés pour apporter un complément de formation générale et une formation professionnelle adaptée à leur handicap. Il les prépare à l’exercice d’une activité professionnelle.
                        .<br/>
                        Pour qui : personne en situation de handicap de 14 à 20 ans<br/>
                        Comment : demande à faire auprès de la MDPH<br/>
                        Prise en charge : Sécurité sociale<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalSIPFP} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalKine} fade={false} centered>
                    <ModalHeader>Kinésithérapeute</ModalHeader>
                    <ModalBody>
                        Prend en charge les troubles loco-moteurs, par exemple : renforcement musculaire, travail de la
                        marche, de l’équilibre, étirements contre la spasticité, verticalisation…<br/>
                        En SSR ou en libéral.<br/>
                        Pour qui : personne avec difficultés motrices<br/>
                        Comment : prescription médicale<br/>
                        Prise en charge : Sécurité sociale<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalKine} className={'buttonSecondary'} centered>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalErgo} fade={false} centered>
                    <ModalHeader>Ergothérapeute</ModalHeader>
                    <ModalBody>
                        Travaille surtout l’autonomie, cherche des adaptations techniques pour pallier les difficultés.
                        Aide également dans le choix du fauteuil roulant et les autres appareillages.<br/>
                        Peut intervenir à domicile pour évaluer et adapter l’environnement. Intervient aussi dans la
                        réadaptation professionnelle.<br/>
                        Comment : Prescription médicale en SSR, et sur demande du patient ou de la famille en
                        libéral<br/>
                        Prise en charge : non pris en charge par la Sécurité Sociale en libéral, possibilité de
                        financement par la Structures Médico-sociales & Lieux de vie pour les adultes et par l’AEEH (Allocation Education Enfant Handicapé)
                        pour les enfants. Certaines mutuelles peuvent financer aussi.<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalErgo} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalOrtho} fade={false} centered>
                    <ModalHeader>Orthophoniste</ModalHeader>
                    <ModalBody>
                        Rééducation des troubles du langage, des fonctions cognitives, de la communication et de la
                        déglutition.<br/>
                        La demande est faite par la personne Traumatisée Crânienne, sa famille ou son médecin.<br/>
                        Comment : en SSR ou en libéral. Sur Prescription médicale.<br/>
                        Prise en charge : Sécurité Sociale<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalOrtho} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalOTP} fade={false} centered>
                    <ModalHeader>Orthoptiste</ModalHeader>
                    <ModalBody>
                        Son rôle est l’évaluation des capacités visuelles du patient, et leur rééducation en essayant
                        d’améliorer l’équilibre et l’efficacité de la vision<br/>
                        Comment : SSR ou libéral. Sur prescription médicale<br/>
                        Prise en charge : Sécurité sociale<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalOTP} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalPM} fade={false} centered>
                    <ModalHeader>Psychomotricien</ModalHeader>
                    <ModalBody>
                        Concerne surtout les enfants. Travaille sur le schéma corporel, la communication, l’expression
                        corporelle, les émotions. Aide à la réinsertion psycho-sociale<br/>
                        Comment : en SSR, CMP, CMPP, CAMSP, ou en libéral. Séance individuelle ou en groupe.<br/>
                        Prise en charge : non remboursé par la Sécurité Sociale en libéral. Possibilité de faire une
                        demande de « prise en charge exceptionnelle » auprès de votre CPAM.<br/>
                        Ou financement possible par l’AEEH (Allocation Education Enfant Handicapé) ou certaines
                        mutuelles.<br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalPM} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalNeuroP} fade={false} centered>
                    <ModalHeader>Neuropédiatre</ModalHeader>
                    <ModalBody>
                        Pédiatre spécialisé dans les pathologies neurologiques
                    </ModalBody>
                        <ModalFooter>
                        <Button onClick={this.triggerModalNeuroP} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalCAMPS} fade={false} centered>
                    <ModalHeader>Centre d'Action Médico-Sociale Précoce</ModalHeader>
                    <ModalBody>
                        Il prend en charge les déficits et les difficultés de développement chez les enfants âgés de 0 à 6 ans. Il assure des actions de dépistage des déficits, de diagnostic, de prévention, et organise la rééducation.<br/>
                        L’équipe pluri professionnelle propose des consultations médicales, des séances de rééducation individuelle ou en groupe, des entretiens familiaux. L’équipe est habituellement composée de : assistante sociale, médecin, infirmier, orthophoniste, kinésithérapeute, éducateur spécialisé, psychologue.
                    </ModalBody>
                        <ModalFooter>
                        <Button onClick={this.triggerModalCAMPS} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalNC} fade={false} centered>
                    <ModalHeader>Neurochirurgien</ModalHeader>
                    <ModalBody>
                        Médecin chirurgien spécialisé dans la chirurgie du cerveau et du système nerveux. En cas de traumatisme crânien grave, en fonction de l’état du patient et des résultats de l’imagerie, il peut être amené à opérer un hématome cérébral en urgence. D’autres chirurgies peuvent être programmées sans urgence.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalNC} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalMR} fade={false} centered>
                    <ModalHeader>Médecin de MPR</ModalHeader>
                    <ModalBody>
                        Il coordonne le projet de rééducation et de réinsertion. En réajustant les objectifs en fonction de l’évolution, de l’état clinique, des avis des différents thérapeutes et du patient et son entourage. Il est aussi responsable des problèmes médicaux pendant l’hospitalisation.
                        Le médecin rééducateur travaille habituellement dans un centre de rééducation ou un <Button color="link" onClick={this.triggerModalMPR}>service de MPR</Button>. Après votre sortie d’hospitalisation il continuera à vous suivre en consultation et réaliser si besoin les injections de toxine botulique.

                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalMR} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalMS} fade={false} centered>
                    <ModalHeader>Médecin scolaire</ModalHeader>
                    <ModalBody>
                        Le médecin scolaire de l’établissement de l’enfant intervient pour les décisions relatives à l’adaptation de la scolarisation lorsqu’elle est nécessaire, à la mise en place d’un Plan d’Accueil Individualisé par exemple, en lien avec l’équipe éducative.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalMS} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalMT} fade={false} centered>
                    <ModalHeader>Médecin traitant</ModalHeader>
                    <ModalBody>
                        De la même manière que pour une personne qui n’a pas eu de traumatisme crânien il est important d’avoir un médecin généraliste proche de chez vous, qui vous connait et que vous avez déclaré comme médecin traitant auprès de la Sécurité Sociale. Il assure le suivi médical et est en lien avec les autres médecins (rééducateur, neurochirurgien, psychiatre…).
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalMT} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalMPR} fade={false} centered>
                    <ModalHeader>Service de MPR Pédiatrie</ModalHeader>
                    <ModalBody>
                        Service spécialisé qui prend en charge la rééducation et la réadaptation des enfants et adolescents. Une équipe pluridisciplinaire coordonne le programme de rééducation, fixe des objectifs en alliant la dimension médicale et rééducative aux aspects éducatifs, scolaires et psychologiques. Dans un service de MPR neurologique l’équipe est habituellement composée de kinésithérapeute, orthophoniste, assistante sociale, ergothérapeute, orthoptiste, psychomotricien, psychologue, neuropsychologue, médecin de MPR, éducateur/trice, instituteur/trice.                     </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalMPR} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalUE} fade={false} centered>
                    <ModalHeader>Unité d'Eveil Pédiatrique</ModalHeader>
                    <ModalBody>
                        Service qui accueille les enfants en phase d’éveil. Il s’agit souvent de traumatisés crâniens sévères qui ont vécus un long séjour en réanimation, qui sont maintenant plus stables sur le plan vital, mais restent en état de conscience altérée. Les complications médicales et les décès restent fréquents à ce stade. L’objectif du service est d’apporter un environnement propice à l’éveil, avec des stimulations visuelles (photos par exemple), auditives (voix des proches, musique), présence de l’entourage, etc…
                        <br/><br/>
                        Si l'enfant récupère un état de conscience suffisant il rejoindra un service de rééducation.
                        <br/>
                        Si l'enfant ne se réveille pas ou que son niveau de conscience reste altéré, l’orientation vers une Unité EVC-EPR (Etat Végétatif Chronique- Etat Pauci Relationnel) se discutera.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalUE} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalEVC} fade={false} centered>
                    <ModalHeader>Unité EVC-EPR</ModalHeader>
                    <ModalBody>
                        Service qui accueille les patients en Etat Végétatif Chronique ou en Etat Pauci Relationnel. Il s’agit d’hospitalisations au long cours. Les soins à apporter sont importants auprès de ces patients avec un état de conscience altéré, et le retour à domicile est rarement envisageable. Les services de ce type sont peu nombreux et malheureusement il n’est pas toujours possible d’en trouver à proximité du domicile.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalEVC} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalPedia} fade={false} centered>
                    <ModalHeader>Pédiatre</ModalHeader>
                    <ModalBody>
                        Médecin spécialiste dans la prise en charge des enfants et des adolescents
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalPedia} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalCMI} fade={false} centered>
                    <ModalHeader>Carte Mobilité Inclusion (CMI)</ModalHeader>
                    <ModalBody>
                        Elle permet une priorité d’accès dans les transports en commun, les espaces et salles d’attente, les établissements publics, accès aux places de stationnement pour personne à mobilité réduite.<br/>
                        Il existe 3 types de CMI : « invalidité », « priorité » et « stationnement ».<br/>
                        Pour qui : handicap avec taux d’incapacité permanente d’au moins 80%.<br/><br/>
                        Pour plus d’informations, cliquez <a href="https://www.service-public.fr/particuliers/vosdroits/F34049" target="_blank">ici</a>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalCMI} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalPCH} fade={false} centered>
                    <ModalHeader>PCH</ModalHeader>
                    <ModalBody>
                        Participation totale ou partielle pour financer des aides à domicile, et des aides techniques, par exemple pour l’aménagement du domicile ou de la voiture.<br/><br/>
                        Pour qui : personne avec difficulté grave ou absolue dans les activités essentielles de la vie quotidienne. Il faut avoir moins de 60 ans (ou > 60ans si exerce une activité professionnelle).<br/><br/>
                        Comment : demande faite sur le dossier MDPH qui décide du montant en fonction du degré d'autonomie, de l’âge, et du lieu de résidence . Financé par le Département.<br/><br/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalPCH} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalOri} fade={false} centered>
                    <ModalHeader>Orientation</ModalHeader>
                    <ModalBody>
                        Après examen du dossier MDPH, la CDAPH décidera de l'orientation de :
                        <ul>
                            <li>
                                la scloralisation et la formation pour l'enfant handicapé,
                            </li>
                            <li>
                                l'orientation professionnelle et la formation des adultes handicapés,
                            </li>
                            <li>
                                l'orientation en établissement médico-social.
                            </li>
                        </ul>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalOri} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalAAH} fade={false} centered>
                    <ModalHeader>Allocation d'éducation de l'enfant handicapé</ModalHeader>
                    <ModalBody>
                        Prestation destinée à compenser les frais d’éducation et de soins apportés à un enfant en situation de handicap. Cette aide est versée à la personne qui en assume la charge. Elle peut être complétée, dans certains cas, d’un complément d’allocation.                     </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalAAH} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalPsychiatre} fade={false} centered>
                    <ModalHeader>Psychiatre</ModalHeader>
                    <ModalBody>
                        Un suivi par un psychiatre peut être proposé pour aider le patient et son entourage sur le plan psychologique, et/ou pour prendre en charge des troubles du comportement, une dépression.                      </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalPsychiatre} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalCMP} fade={false} centered>
                    <ModalHeader>Centre Médico-Psychologique</ModalHeader>
                    <ModalBody>
                        Cette structure accueille les personnes en souffrance psychique, en consultation, visite à domicile ou pour des soins infirmiers. Elle dépend du secteur psychiatrique et est rattachée à un hôpital public. Il existe des CMP pour adultes et pour enfants. L’équipe du CMP est composé de psychiatre, pédiatre, psychologue, assistante sociale, psychomotricien etc…
                        <br/><br/>
                        Prise en charge : Sécurité Sociale
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalCMP} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalCMPP} fade={false} centered>
                    <ModalHeader>Centre Médico-Psycho-Pédagogique</ModalHeader>
                    <ModalBody>
                        Le CMPP s’adresse aux enfants et adolescents jusqu’à 20 ans qui éprouvent des difficultés d'apprentissage, des troubles psychomoteurs, du langage ou des troubles du comportement, en famille ou à l’école. Après une évaluation en consultation, des bilans complémentaires peuvent être proposés ; puis une prise en charge adaptée est discutée avec la famille et l’enfant, par exemple des séances de rééducation.
                        Comment : demande par la famille, ou proposée par un médecin, travailleur social, enseignant.
                       <br/><br/>
                        Prise en charge : Sécurité Sociale
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalCMPP} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalUrPsy} fade={false} centered>
                    <ModalHeader>Urgences Psychiatriques</ModalHeader>
                    <ModalBody>
                        En cas de situation grave qui met en danger la personne ou son entourage à court terme, vous devez appeler le 15 qui vous aidera à gérer la situation et vous indiquera le service le plus adapté.                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalUrPsy} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalSoutienSco} fade={false} centered>
                    <ModalHeader>Soutien scolaire</ModalHeader>
                    <ModalBody>
                        Le
                        <a onClick={this.triggerModalSESSAD}
                           className={'link'}> SESSAD </a> apporte un soutien scolaire. Des associations peuvent également proposer des cours de soutien scolaire. Certains contrats d’assurance prévoient une prise en charge de soutien scolaire en cas de problème de santé de l’enfant.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalSoutienSco} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalSAPAD} fade={false} centered>
                    <ModalHeader>Service d'Assistance Pédagogique à Domicile</ModalHeader>
                    <ModalBody>
                        Il s’agit d’un dispositif de l'Éducation nationale destiné à fournir une prise en charge pédagogique au domicile pour assurer la continuité de la scolarité pendant un problème de santé. Il va adapter la scolarité pour poursuivre les apprentissages, maintenir les liens avec la classe et les enseignants, éviter l’isolement. L’intervention peut être à domicile, à l’hôpital ou en centre de rééducation.
                        <br/><br/>
                        Pour qui : tout élève, enfants ou adolescents, dont la scolarité est interrompue pendant plus de 2 semaines suite à un problème de santé.
                        <br/><br/>
                        Comment : la demande peut être faite par : la famille, l'établissement scolaire, les services médicaux, les services sociaux. Elle se fait auprès des services départementaux de l’ Education Nationale.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalSAPAD} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
                <Modal className={'tc_modal'} isOpen={this.state.modalMDPH} fade={false} centered>
                    <ModalHeader>MDPH : son fonctionnement</ModalHeader>
                    <ModalBody>
                        Service public créé en 2005, les Maisons Départementales des Personnes Handicapées (MDPH) sont chargées de l’accueil et de l’accompagnement des personnes handicapées et de leurs proches. Il existe une MDPH dans chaque département, fonctionnant comme un guichet unique pour toutes les démarches liées aux diverses situations de handicap.
                        <br/><br/>
                        Pour les demandes d’attribution des aides et prestations, ou pour une orientation vers un établissement médico-social, il faut remplir le dossier unique de la MDPH. Il y a une partie administrative et un certificat médical qui doit être rempli par votre médecin. Le dossier est ensuite examiné par la Commission des Droits et de l’Autonomie des Personnes Handicapées (CDAPH) qui décide de l’orientation et de l’attribution de l’ensemble des aides et prestations.
                        <br/><br/>
                        Plus d'informations <a href="http://www.mdph.fr" target="_blank">ici.</a>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.triggerModalMDPH} className={'buttonSecondary'}>Fermer</Button>
                    </ModalFooter>
                </Modal>
            </section>
        );
    }
}