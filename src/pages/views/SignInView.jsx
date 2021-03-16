import React, { useState } from 'react'
import SignIn from "../../components/SignIn"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"



export default function SignInView() {

    const [key, setKey] = useState('signInEmployee');
    return (
    <Tabs  defaultActiveKey="profile" id="uncontrolled-tab-example"  activeKey={key} onSelect={(k) => setKey(k)} style={{ marginTop:20, width:500, textAlign:"center"}}>
        <Tab eventKey="signInEmployee" title="For Employee">
            <SignIn/>
        </Tab>
        <Tab eventKey="signInHR" title="For HR">
            <SignIn/>
        </Tab>
    </Tabs>
        
    )
}


