import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import 'bootstrap/dist/css/bootstrap.min.css';

import ImovelList from './components/ImovelList';
import AddImovel from './components/AddImovel';
import BuyImovel from './components/BuyImovel';
import RentImovel from './components/RentImovel';
import ImovelMarketplaceAbi from './contracts/imovel_marketplace.json'

function App() {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const CONTRACT_ADDRESS = "0x0BA03b6CFcb3842BF30b4be2AB10aC3148D21004";

  useEffect(() => {
    if (window.ethereum) {
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(web3Provider);
    } else {
      alert('Por favor, instale o MetaMask!');
    }
}, []);

  useEffect(() => {
    if (provider) {
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, ImovelMarketplaceAbi, signer);
      setContract(contractInstance);
    }
  }, [provider]);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Mercado de Imóveis</h1>
      {contract && (
        <div>
          <AddImovel contract={contract} />
          <BuyImovel contract={contract} />
          <RentImovel contract={contract} />
          <ImovelList contract={contract} />
        </div>
      )}
    </div>
  );
}

export default App;