import React from 'react';

const NameList = (props) => {

    const names = ["Moe Isa", "Isa Moe"];

    const getLastName = (name) => {
        let lastName = name.split(" ")[1];
        return <b>{lastName}</b> // To write javaScript inside HTML we use {}
    }

    return (
        <ul>
            {
                props.names.map((name) => {
                    const row = <li>{name} - {getLastName(name)} - {name.toUpperCase()}</li>
                    return row;
                })
            }
        </ul>
    );
};

export default NameList;