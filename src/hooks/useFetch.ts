import { useState, useEffect } from "react";
import { API_BASE_URL } from "../config";

const useFetch = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        if (!response.ok) throw new Error(response.statusText);
        const json = (await response.json()) as T;
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (error) {
        setError(`${error} Could not Fetch Data`);
        setIsPending(false);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, isPending, error };
};

export default useFetch;
