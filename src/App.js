import logo from './logo.svg';
import {useEffect, useState} from 'react'
import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';
function App() {
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(null);
  const [bitcoinData, setBitcoinData] = useState(null);
  const [sort, setSort] = useState("idx");

  const sortData = () => {
    if (sort == "alpha") {
      setBitcoinData((data) => [...data.sort(comparisonAlpha)]);
    } else if (sort == "rate") {
      setBitcoinData((data) => [...data.sort(comparisonRate)]);
    }
  }

  const loadAPI = () => { 
    setLoading(true);
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Failed to retrieve API data. Please check your internet connection.');
      })
      .then(data => {
        setTime(data.time);
        setBitcoinData(Object.values(data.bpi))
        sortData();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  const comparisonAlpha = (a, b) => {
    if (a.code < b.code) {
      return -1
    }
    if (a.code > b.code) {
      return 1
    }
    return 0;
  }

  const comparisonRate = (a, b) => {
    if (a.rate_float < b.rate_float) {
      return -1
    }
    if (a.rate_float > b.rate_float) {
      return 1
    }
    return 0;
  }

  useEffect(() => {
    loadAPI();
  }, [])

  const handleUpdate = () => { 
    loadAPI();
  }

  useEffect(() => {
    sortData();
  }, [sort])

  return (
    <div className="bg-black w-screen lg:px-12 px-8 pt-8 pb-8 min-h-screen overflow-hidden">
      <Header />
      <Summary data={bitcoinData} time={time}  loading={loading} />
      <Dashboard data={bitcoinData} time={time} loading={loading} handleUpdate={handleUpdate} sort={sort} setSort={setSort} />
      <Footer />
    </div>
  );
}

export default App;
