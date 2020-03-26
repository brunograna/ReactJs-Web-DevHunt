import React, {useEffect, useState} from "react";

function DevForm({onSubmit}) {
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            (position => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            }),
            (error) => {
                console.log(error);
            },
            {
                timeout: 30000,
            }
        )
    }, []);

    async function handleSubmit(e){
        e.preventDefault();
        const data = {github_username, techs, latitude, longitude};

        await onSubmit(data);

        setGithubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input
                    type="text"
                    name="github_username"
                    id="github_username"
                    required
                    value={github_username}
                    onChange={e => setGithubUsername(e.target.value)}
                />
            </div>
            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input
                    type="text"
                    name="techs"
                    id="techs"
                    required
                    value={techs}
                    onChange={e => {setTechs(e.target.value)}}
                />
            </div>
            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input type="number"
                           name="latitude"
                           id="latitude"
                           required
                           onChange={e => setLatitude(e.target.value)}
                           value={latitude}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        type="number"
                        name="longitude"
                        id="longitude"
                        required
                        onChange={e => setLongitude(e.target.value)}
                        value={longitude}
                    />
                </div>
            </div>
            <button type="submit">Salvar</button>
        </form>
    );
}

export default DevForm;