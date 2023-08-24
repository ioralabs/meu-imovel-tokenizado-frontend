import React, { useState } from 'react';

function AddImovel({ contract }) {
    const [preco, setPreco] = useState('');
    const [aluguelPorDia, setAluguelPorDia] = useState('');

    async function handleListar() {
        try {
            await contract.listarImovel(preco, aluguelPorDia);
            alert('Imóvel listado com sucesso!');
        } catch (error) {
            console.error("Erro ao listar imóvel:", error);
        }
    }

    return (
        <div>
            <h2>Listar Imóvel</h2>
            <input
                type="text"
                placeholder="Preço"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
            />
            <input
                type="text"
                placeholder="Aluguel por dia"
                value={aluguelPorDia}
                onChange={(e) => setAluguelPorDia(e.target.value)}
            />
            <button onClick={handleListar}>Listar</button>
        </div>
    );
}

export default AddImovel;
