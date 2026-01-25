import { useEffect, useState } from "react";


export const useFetch = <T,>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    let isMounted = true; 

    setLoading(true);
    setError(null);

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (isMounted) setData(data);
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
      console.log("unsubscribe");
    };
  }, [endpoint]);

  return { data, loading, error };
};