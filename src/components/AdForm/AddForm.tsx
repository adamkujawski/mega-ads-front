import React, {SyntheticEvent, useState} from "react";
import './AddForm.css'
import {Btn} from "../common/Btn";
import {geoCode} from "../../utils/geoCode"
import {apiUrl} from "../../config/api";

export const AddForm = () => {

    const [loading, setLoading] = useState(false)
    const [id, setId] = useState('');
    const [form, setForm] = useState({
        name: '',
        description: '',
        price: 0,
        url: '',
        address: '',
    });

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    }

    const saveAdd = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        try {

            const {lat, lon} = await geoCode(form.address);

            const res = await fetch(`${apiUrl}/ad`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                    lat,
                    lon,
                }),
            });

            const data = await res.json();

            setId(data.id);

            console.log(res);
            console.log(data)
        } finally {
            setLoading(false);
        }

    }

    if (loading) {
        return <h1>Trwa dodwanie ogłoszenia...</h1>
    }

    if(id){
        return  <h2>Twoje ogłoszenie "{form.name} zostało poprawnie dodane do serwisu pod ID: {id}"</h2>
    }

    return (
        <form action="" className="add-form" onSubmit={saveAdd}>
            <h1>Dodwanie Ogłoszenia</h1>
            <p>
                <label>
                    Nazwa: <br/>
                    <input
                        type="text"
                        name="name"
                        required maxLength={99}
                        value={form.name}
                        onChange={e => updateForm('name', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Opis: <br/>
                    <textarea
                        name="description"
                        maxLength={999}
                        value={form.description}
                        onChange={e => updateForm('description', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Cena: <br/>
                    <input
                        type="number"
                        name="price"
                        maxLength={99}
                        value={form.price}
                        onChange={e => updateForm('price', Number(e.target.value))}
                    />
                    <small>Pozostaw cenę 0, aby nie wyświetlać ceny w ogłoszeniu</small>
                </label>
            </p>
            <p>
                <label>
                    Adres URL: <br/>
                    <input
                        type="url"
                        name="url"
                        required maxLength={99}
                        value={form.url}
                        onChange={e => updateForm('url', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Adres Fizyczny na mapie: <br/>
                    <input
                        type="text"
                        name="name"
                        required maxLength={99}
                        value={form.address}
                        onChange={e => updateForm('address', e.target.value)}
                    />
                </label>
            </p>
            <Btn text="Zapisz"></Btn>
        </form>
    )
}