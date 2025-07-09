'use client';

import { useState } from "react";

export function Button(){
    const [nome, setNome] = useState("Tobias");

    function handleChangeName() {
        setNome("Tobias B. Pereira");
    }

    return (
        <button className="border-1 rounded-2xl bg-black text-white hover:bg-gray-800" onClick={handleChangeName} type="submit">
            <h3>Nome: {nome}</h3>
            <span className="text-2xl font-bold m-3">Change Name</span>
        </button>
    );
}