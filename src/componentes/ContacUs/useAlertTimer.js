import { useEffect } from "react";

const useAlertTimer = (setFormAlert,formAlert) =>{
    useEffect(() => {
        const timer = setTimeout(() => {
          setFormAlert("");
        }, 3000); 
    
        return () => clearTimeout(timer);
      }, [formAlert]);
}

export default useAlertTimer;