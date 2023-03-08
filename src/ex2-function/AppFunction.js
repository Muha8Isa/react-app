import React from "react";

// rsf

function Header(){

    return (
        <>
        Header
        </>
    );
}

function Footer(){

    return (
        <>
        Footer
        </>
    );
}

function Content(){

    return ( // jsx
        <>
        Content: <br/>
         <Welcome name = "Test" message=" Welcome to my first React App"/>
         <br/>
         <Welcome name = "ABC" message=" Welcome to my first React App"/>
        </>
    );
}


function Welcome(props){

    return(
        <div>
        Hi {props.name}, {props.message}
        </div> // Braces {} are used when a JavaScript code will be written inside HTML. 
    );
}

function AppFunction(){
    return(
        <>
        <Header/>
        <br/>
        <Content/>
        <br/>
        <Footer/>
        </>
    );
}

export default AppFunction;