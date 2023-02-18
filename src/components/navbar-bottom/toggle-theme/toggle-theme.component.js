import React, { useContext, useState } from "react"
import { useEffect } from "react";
import { ThemeContext } from "../../theme-provider/theme-provider.component";
import "./toggle-theme.component.css";

function ToggleTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "dark")
  const [isThemePicked, setIsThemePicked] = useState(false);
  const state = useContext(ThemeContext)
  useEffect(() => {
    if(isThemePicked) return;
    setTheme(state.theme.type)
    setIsThemePicked(true);
  }, [isThemePicked])
  console.log(state.theme.type)
	return (
    <div className="theme-switch-box">
		  <div className="theme-switch">
			  <input type="checkbox" id="switch" onChange={() => { 
          state.setTheme(state.theme.type);
          setIsThemePicked(false)
          //console.log('*****', state.theme.type)
          //setTheme(state.theme.type)
          }} />
			  <label htmlFor="switch"></label>
		  </div>
			<p>Dark/Light</p>
    </div>
	)
}

function useLocalStorage(key, initVal) {
  const [storageVal, setStorageVal] = useState(() => {
    if (typeof window === 'undefined') return initVal;
    
    try {
      const currentVal = window.localStorage.getItem(key);
      return currentVal ? JSON.parse(currentVal) : initVal;
    } catch (err) {
      console.log(err)
      return initVal;
    }
  })
  
  const setVal = (val) => {
    try {
      // let the value be a function so it uses same API as useState
      const valueToStore = val instanceof Function ? val(storageVal) : val;
      setStorageVal(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (err) {
      console.log(err)
    }
  }
  return [storageVal, setVal]
}
export default ToggleTheme