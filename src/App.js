import {Outlet} from 'react-router-dom'
import NavBar from './components/navBar';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

function App() {
  const [language,setLanguage] = useState('ar-eg')
  const {i18n} = useTranslation();
    useEffect(()=> {
        const lang = language
        console.log(lang)
        i18n.changeLanguage(lang)
    },[])
  return (
    <div className="App" style={{direction:language==='ar-eg'?'rtl':"ltr"}}>
       <NavBar/>
       <Outlet/>
    </div>
  );
}

export default App;
