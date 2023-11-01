import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let getData = async () => {
      let response = await fetch(url);
      let finalData = await response.json();
      setData(finalData);
      setLoading(false);
    };
    setTimeout(()=>{
        getData();
    }, 1000)
    
  }, [url]);

  return { data, loading };
};
