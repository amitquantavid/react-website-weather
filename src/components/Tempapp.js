import React, { useState } from 'react'

function Tempapp() {
    const [value, setValues] = useState({
        input: "",
        details: null

    });
    const { input, details } = value;

    const handleClick = async () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=f5c321888ea2086923f6100f0674af9b`
        await fetch(url).then(async (data) => {
            let resJson = await data.json();
            setValues({ ...value, details: resJson.main });
        }).catch((error) => {
            console.log(error);
        })
    }


    return (
        <>
            <div className="box mt-5">
                <div className="inputData">

                    <input
                        type="search"
                        value={input}
                        className="inputField"
                        onChange={(event) => setValues({ ...value, input: event.target.value })}
                    />
                    <button className="btn btn-primary" onClick={handleClick}>Submit</button>

                </div>
                {
                    !details ? (
                        <p className="error">No Data found</p>
                    ) : (
                            <div>
                                <div className="info mt-3">
                                    <h2 className="location"><i className="fas fa-street-view"></i>{input}</h2>
                                    <h1 className="temp mt-3">
                                        {details.temp}
                                    </h1>
                                    <h3 className="tempmin_max mt-3">
                                        Min: {details.temp_min} | Max: {details.temp_max}
                                    </h3>
                                </div>
                            </div>
                        )
                }



            </div>
        </>
    )
}

export default Tempapp
