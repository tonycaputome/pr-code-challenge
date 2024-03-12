import { useCallback, useState } from "react";

const usePost = <T>(url: string, payload: T) => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const mutate = useCallback(async () => {
    setIsPending(true);
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload)
      });
      const json = res.json() as T;
      setData(json);
      setIsPending(false);
    } catch (e) {
      setError(error);
    }
  }, [url, payload, error]);

  return { response: data, mutate, error, isPending };
};

export default usePost;
