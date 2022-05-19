import React, {useEffect, useState} from "react";
import {AdEntity} from "types";

interface Props {
    id: string | undefined
}

export const SingleAd = (props: Props) => {

    const [data, setData] = useState<AdEntity | null>(null)

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/ad/${props.id}`);
            const data = await res.json();
            setData(data);
        })();

    }, []);

    if (data === null) return <p>Wczytwanie...</p>

    return (
        <>
            <h2>{data.name}</h2>
            <p>Opis: {data.description}</p>
            {data.price && <p>{data.price} zł</p>}
            <hr/>
            <p>Link: <a href={data.url} target="_blank" >Otwórz ogłoszenie</a></p>
        </>
    )

}