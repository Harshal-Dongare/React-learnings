import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
    const URL = "https://api.github.com/users";
    const [data, setData] = useState([]);

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setData(data);
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        getdata();
    }, []);

    return (
        <>
            <h2>fetch data example</h2>
            <h4>Github Users</h4>
            <section className="wrapper">
                {data?.map(({ avatar_url, login }, i) => {
                    return (
                        <div className="card" key={i}>
                            <img src={avatar_url} alt="" />
                            <div className="user-info">
                                <h5>{login}</h5>
                                <span>Profile</span>
                            </div>
                        </div>
                    );
                })}
            </section>
        </>
    );
};
export default FetchData;
