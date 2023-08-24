import React, { useState, useEffect } from 'react';

function ImovelList({ contract }) {
    const [imoveis, setImoveis] = useState([]);

    useEffect(() => {
        async function fetchImoveis() {
            const imovelCount = await contract.nextImovelId();
            const fetchedImoveis = [];
            for (let i = 0; i < imovelCount; i++) {
                const imovel = await contract.imoveis(i);
                fetchedImoveis.push(imovel);
            }
            setImoveis(fetchedImoveis);
        }

        fetchImoveis();
    }, [contract]);

    return (
        <div>
            <h2>Imóveis</h2>
            <ul>
                {imoveis.map((imovel, index) => (
                    <li key={index}>
                        Preço: {imovel.preco.toString()} -
                        Aluguel por dia: {imovel.aluguelPorDia.toString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ImovelList;
