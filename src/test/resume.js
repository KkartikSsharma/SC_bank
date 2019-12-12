import React, { Component } from 'react'
import Axios from 'axios';

export default class Resume extends Component {
    constructor(props) {
        super(props)
        this.fetchDataHandler()
        this.state = {
            cv: [],
            cv_extras: [],
            education: [],
            work: [],
            extra: [],
            trainings: [],
            achieve: [],
            skills: [],
            projects: []
        }

    }
    fetchDataHandler() {
        Axios.get("http://engineershub.org.in/engineers_hub_2/resume_download.php?operation=0&uid=23cfb2d1-4544-4e3c-add4-37e60551")
            .then(res => {
                this.setState({ cv: res.data.cv })
                this.setState({ skills: res.data.skills })
                this.setState({ projects: res.data.projects })
                this.setState({ cv_extras: res.data.cv_extras })
                var i, extra = [], trainings = [], education = [], work = [], achieve = []
                for (i = 0; i < this.state.cv_extras.length; i++) {
                    if (this.state.cv_extras[i].type == "Educations") {
                        education.push(this.state.cv_extras[i])
                        this.setState({ education: education })
                    }
                    if (this.state.cv_extras[i].type == "Work Experience") {
                        work.push(this.state.cv_extras[i])
                        this.setState({ work: work })
                    }
                    if (this.state.cv_extras[i].type == "Extracurricular Activities") {

                        extra.push(this.state.cv_extras[i])
                        this.setState({ extra: extra })
                    }
                    if (this.state.cv_extras[i].type == "Trainings and Certificates") {

                        trainings.push(this.state.cv_extras[i])
                        this.setState({ trainings: trainings })
                    }
                    if (this.state.cv_extras[i].type == "Achievements") {
                        achieve.push(this.state.cv_extras[i])
                        this.setState({ achieve: achieve })
                    }
                }
            }
            )
    }
    render() {
        return (
            <div style={{ fontFamily: "montserrat", padding: "100px" }}>
                <div className="col-sm-12 col-xs-12" style={{ padding: "0px" }}>
                    <div className="col-sm-5 col-xs-5" style={{ padding: "0px", margin: "0px", marginTop: "25px", fontWeight: "bold" }}>
                        <p style={{ fontSize: "50px", color: "#177acc", textAlign: "left", borderBottom: "3px solid black", width: "100%", marginRight: "0px" }}>{this.state.cv.name}</p>
                    </div>
                    <div className="col-sm-2 col-xs-2" style={{ padding: "0px", margin: "0px", width: "15em", borderRadius: "7.5em", border: "5px solid #177acc", height: "15em" }}>
                        <img src={this.state.cv.dp} style={{ height: "14.5em", width: "14.6em", borderRadius: "7.25em", paddingRight: "0.3em" }} />
                    </div>
                    <div className="col-sm-5 col-xs-5" style={{ padding: "0px", margin: "0px" }}>
                        <div style={{ color: "#177acc", textAlign: "left", borderBottom: "3px solid black", width: "108.5%", marginTop: "99px" }}></div>
                    </div>
                </div>
                <div className="col-sm-12 col-xs-12" style={{ padding: "0px" }}>
                    <div className="col-sm-5 col-xs-12" style={{ padding: "0px" }}>
                        <div className="col-sm-12 col-xs-12" style={{ fontSize: "30px", padding: "0", color: "#177acc", textAlign: "left", borderBottom: "3px solid black" }}>
                            Skills
                    </div>
                        <div className="col-sm-12 col-xs-12" style={{ padding: "0px", textAlign: "left", fontSize: "20px" }}>
                            {this.state.skills.map(i =>
                                <div style={{ padding: "10px", paddingLeft: "0px" }}>
                                    {i}
                                </div>)}
                        </div>
                    </div>

                    <div className="col-sm-5 col-xs-12 col-sm-offset-2" >
                       <div className="col-sm-12 col-xs-12" style={{ fontSize: "30px", padding: "0", color: "#177acc", textAlign: "left", borderBottom: "3px solid black" }}>
                       Education
                        </div> 
                        <div className="col-sm-12 col-xs-12" style={{textAlign:"left",padding:"0px",paddingTop:"10px"}}>
                            {this.state.education.map(i =>
                                <div>
                                    <div style={{ padding: "5px",paddingLeft:"0px",fontWeight:"bolder",fontSize:"25px" }}>{i.title}</div>
                                    <div style={{ padding: "5px",paddingLeft:"0px",fontWeight:"bold",fontSize:"15px"  }}>{i.institute}</div>
                                    
                                    <div  style={{ padding: "5px",paddingLeft:"0px"  }}>{i.to_time}</div>
                                </div>)}
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-xs-12" style={{ fontSize: "30px", padding: "0", marginTop: "50px", color: "#177acc", textAlign: "left", borderBottom: "3px solid black" }}>
                    Work Experience
                </div>
                <div>
                    {this.state.work.map(i =>
                        <div>
                            {}
                        </div>)}
                </div>
                <div className="col-sm-12 col-xs-12" style={{ fontSize: "30px", padding: "0", marginTop: "50px", color: "#177acc", textAlign: "left", borderBottom: "3px solid black" }}>
                    Projects
                </div>
                <div className="col-sm-12 col-xs-12" style={{ padding: "0px" }}>
                    {this.state.projects.map(i =>
                        <div className="col-sm-12 col-xs-12" style={{ padding: "0px" }}>
                            <div className="col-sm-2 col xs-12" style={{ padding: "10px", marginTop: "20px", paddingLeft: "0px", textAlign: "left" }}>
                                <img src={i.cover_link} style={{ width: "100px", height: "100px", boxShadow: "2px 2px rgba(0,0,0,0.4)" }} />
                            </div>
                            <div className="col-sm-10 col xs-12" style={{ padding: "0px", textAlign: "left" }}>
                                <div className="col-sm-12 col-xs-12" style={{ padding: "10px", fontSize: "25px", fontWeight: "bold" }}>
                                    {i.title}
                                </div>
                                <div className="col-sm-12 col-xs-12" style={{ padding: "10px", fontSize: "20px", fontWeight: "bold" }}>
                                    {i.category}
                                </div>
                                <div className="col-sm-12 col-xs-12" style={{ padding: "10px" }}>
                                    {i.description}
                                </div>
                            </div>
                        </div>)}

                </div>
                <div className="col-sm-12 col-xs-12" style={{ padding: "0px", marginTop: "30px" }}>
                    <div className="col-sm-5 col-xs-12" style={{ padding: "0px" }}>
                        <div className="col-sm-12 col-xs-12" style={{ fontSize: "30px", padding: "0", color: "#177acc", textAlign: "left", borderBottom: "3px solid black" }}>
                            Certificates
                    </div>
                        <div  className="col-sm-12 col-xs-12" style={{ textAlign: "left" ,padding:"0px",marginTop:"10px"}}>
                            {this.state.trainings.map(i =>
                                <div style={{marginBottom:"10px"}}>
                                    <div style={{ padding: "5px",paddingLeft:"0px",fontWeight:"bolder",fontSize:"25px" }}>{i.title}</div>
                                    <div style={{ padding: "5px",paddingLeft:"0px",fontWeight:"bold",fontSize:"15px"  }}>{i.institute}</div>
                                    <div style={{ padding: "5px",paddingLeft:"0px"  }}>{i.description}</div>
                                    <div style={{ padding: "5px",paddingLeft:"0px"  }}>{i.from_time}-{i.to_time}</div>
                                </div>)}
                        </div>
                    </div>


                    <div className="col-sm-5 col-xs-12 col-sm-offset-2" style={{ padding: "0px" }}>
                        <div className="col-sm-12 col-xs-12" style={{ fontSize: "30px", padding: "0", color: "#177acc", textAlign: "left", borderBottom: "3px solid black" }}>
                            Extra-Curricular Activities
                        </div>
                        <div className="col-sm-12 col-xs-12" style={{textAlign:"left",padding:"0px"}}>
                            {this.state.extra.map(i =>
                                <div>
                                    <div style={{ padding: "5px",paddingLeft:"0px",fontWeight:"bolder",fontSize:"25px" }}>{i.title}</div>
                                    <div style={{ padding: "5px",paddingLeft:"0px",fontWeight:"bold",fontSize:"15px"  }}>{i.institute}</div>
                                    <div  style={{ padding: "5px",paddingLeft:"0px"  }}>{i.description}</div>
                                    <div  style={{ padding: "5px",paddingLeft:"0px"  }}>{i.to_time}</div>
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}