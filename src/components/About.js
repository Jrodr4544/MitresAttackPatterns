import React from 'react'; 
import { Panel } from 'react-bootstrap';

const About = () => {
    return (
    <div className="App">
        <h1>
            About Page
        </h1>
        <Panel className="panelText">
          <Panel.Heading><h4>Mission Statement:</h4></Panel.Heading>
          <Panel.Body>
          
        <br></br>
            The mission for Mitre's Attack Patterns App is to provide user's with an interface to the Enterprise data repository. 
        <br></br>
        <br></br>
            MITRE ATT&CK™ is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. The ATT&CK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community.
        <br></br>
        <br></br>
            With the creation of ATT&CK, MITRE is fulfilling its mission to solve problems for a safer world — by bringing communities together to develop more effective cybersecurity. ATT&CK is open and available to any person or organization for use at no charge.
        <br></br>
        <br></br>
        <p>Please visit MITRE for more details: <a href="https://attack.mitre.org/">https://attack.mitre.org/</a></p>

          </Panel.Body>
        </Panel>
    </div>
    )
}

export default About;