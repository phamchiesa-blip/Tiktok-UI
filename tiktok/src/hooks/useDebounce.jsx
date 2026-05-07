import { useState, useEffect } from "react"

// Tự tạo hook 
const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState();
  
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
  
    return debounceValue;
}

export default useDebounce