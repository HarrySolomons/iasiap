import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Home() {

    let [code, setCode] = useState("");
    let navigate = useNavigate();

    return <>
        <h1>If you have a code, enter it below:</h1>
        <label>
            <input value={code}
                onChange={e => setCode(e.target.value)} />
            <br/><br/>
            <button type="button" class="counter"
                onClick={() => navigate(code)}>Submit
            </button>
        </label>
        <p class="invisible">Cu + Sn</p>
    </>
}