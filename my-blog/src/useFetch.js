import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => { // custom hooks need to start with "use-something"
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(url)
                .then(res => {
                   if(!res.ok){
                     throw Error("Could not fetch the data for that resource");
                   }
                    return res.json();
                })
                    .then((dataParam) => {
                        console.log(dataParam);
                        setData(dataParam);
                        setIsPending(false); //until the page renders for the first
                    })
                        .catch((err) => {
                            setError(err.message);
                        })
    }, [url]); // whenever url changes, it runs this function again to get new data
    return {data, isPending, error};
}

export default useFetch;