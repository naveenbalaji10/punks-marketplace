import './App.css';
import Header from './components/Header';
import punk from '../src/assets/owner/punkhead.png'


import { useEffect, useState } from 'react'
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {

  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x71f0C800b6a76B545F4cC1B9b5F1701f3d32996E&order_direction=asc');
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    return getNfts()
  }, [])

  return (
    <div className="App">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
      )
      }

    </div>
  );
}

export default App;
