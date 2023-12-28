import { createSignal } from "solid-js";

const [from, setFrom] = createSignal('');
const [state, setState] = createSignal<'idle' | 'error' | 'success'>('idle');
export const Main = () => {

    return <>{state() === 'error' ? <div style={{
        display: 'grid',
        "background-color": 'red',
        height: '50%',
        width: '100%',
        "place-content": 'center',
        "place-items": 'center',
    }}>
        <h1>ERROR WYJEBAŁO SERWERY!!1!1!1!1one!one!1!1</h1>
        <img width="300" height="200" src="error.png" />

    </div> : state() === 'idle' ? <form style={{
        display: 'grid',
        padding: '2rem',
        "align-items": 'center',
        "justify-items": 'center',
        height: '100%',
        width: '100%',
        gap: '1rem',
        "background-color": 'black',
        color: 'white'
    }}
    onSubmit={(e) => {
        e.preventDefault();
        console.log('submit', from());
        // @ts-ignore
        if(e.target[2].value === 'debica') {
            setState('error');
        } 
        // @ts-ignore
        else if (e.target[2].value === 'jodlowa') {
            setState('success');
        }
    }}
    >
            <input type="text" placeholder="Zawodnik 1" />
            <input type="text" placeholder="Zawodnik 2" />
            <label>Skont żeś jes</label>
            <select onChange={(e) => {
                setFrom(e.target.value);
            }}>
                <option value="jodlowa">JODŁOWA 💪</option>
                <option value="debica">dembica 🫠</option>
            </select>
            <button type="submit">Wyślij</button>
    </form> : <div><h1>Zgłoszenie przyjęto 😊</h1> <img src="success.png" /></div>}</>
}