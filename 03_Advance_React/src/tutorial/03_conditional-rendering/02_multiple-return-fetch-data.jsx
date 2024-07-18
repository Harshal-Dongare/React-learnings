import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [iserror, setIsError] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    // throw new Error(data.message);
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                const data = await response.json();
                setUser(data);
            } catch (error) {
                setIsError(true);
                // console.log(error);
            }
            setIsLoading(false);
        };
        fetchUserData();
    }, []);

    // Always keep loading state first and then error state
    if (isLoading) return <h2>Fetching User Data... </h2>;
    if (iserror) return <h2>Error occurred While Fetching Data</h2>;

    return (
        <div>
            <img
                style={{ width: "150px", borderRadius: "25px" }}
                src={user.avatar_url}
                alt={user.name}
            />
            <h2>{user.name}</h2>
            <h4>Working at {user.company}</h4>
            <p>{user.bio}</p>
        </div>
    );
};
export default MultipleReturnsFetchData;
