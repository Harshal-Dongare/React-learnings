import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (!response.ok) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                setData(data);
            } catch (error) {
                setIsError(true);
                console.log(error.message);
            }
            setIsLoading(false);
        };

        getData ();
    }, []);

    return { isLoading, isError, data };
};

export default useFetch;
