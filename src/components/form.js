import React from "react";
import { useState } from "react";

const Form = ({onCreate}) => {
    const initialState = {
        "nama" : "",
        "hobby" : "",
        "alamat" : ""
    }
    // const [name, setName] = useState("");

    const [data, setData] = useState(initialState)
    const {nama, hobby, alamat} = data

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        onCreate(data)
        setData(initialState)
    };

    const eventHandler = (e) => {
        setData({...data, [e.target.name]: e.target.value});
        // console.log(name);
    };
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="">Nama</label>
                <input onChange={eventHandler} type="text" value={nama} name="nama" />
                <label htmlFor="">hobi</label>
                <input onChange={eventHandler} type="text" value={hobby} name="hobby"/>
                <label htmlFor="">Alamat</label>
                <input onChange={eventHandler} type="text" value={alamat} name="alamat"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Form;
