import React, { useState } from 'react';

function RentImovel({ contract }) {
    const [id, setId] = useState('');
    const [dias, setDias] = useState('');

    async function handleAlugar() {
        try {
            const imovel = await contract.imoveis(id);
            const totalValue = dias * imovel.aluguelPorDia;
            await contract.alugarImovel(id, dias, { value: totalValue });
            alert('Imóvel alugado com sucesso!');
        } catch (error) {
            console.error("Erro ao alugar imóvel:", error);
        }
    }

    return (
        <div>
            <h2>Alugar Imóvel</h2>
            <input
                type="text"
                placeholder="ID do Imóvel"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Dias de aluguel"
                value={dias}
                onChange={(e) => setDias(e.target.value)}
            />
            <button onClick={handleAlugar}>Alugar</button>
        </div>
    );
}

export default RentImovel;
