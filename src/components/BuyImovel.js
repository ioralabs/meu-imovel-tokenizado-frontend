import React, { useState } from 'react';

function BuyImovel({ contract }) {
    const [id, setId] = useState('');
    const [priceToPay, setPriceToPay] = useState('');

    async function handleComprar() {
        try {
            const imovelPrice = await contract.imoveis(id).preco;

            // Ensure that the user is paying at least the required price
            if (parseFloat(priceToPay) < parseFloat(imovelPrice)) {
                alert('The price you entered is less than the required amount.');
                return;
            }

            await contract.comprarImovel(id, { value: priceToPay });
            alert('Imóvel comprado com sucesso!');
        } catch (error) {
            console.error("Erro ao comprar imóvel:", error);
        }
    }

    return (
        <div>
            <h2>Comprar Imóvel</h2>
            <input
                type="text"
                placeholder="ID do Imóvel"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Preço a Pagar"
                value={priceToPay}
                onChange={(e) => setPriceToPay(e.target.value)}
            />
            <button onClick={handleComprar}>Comprar</button>
        </div>
    );
}

export default BuyImovel;
