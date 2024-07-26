"use client"
import { useActionState } from "react"
import { handleChange } from "../lib/actions"

export default function Page() {
    const [state, handleChangeAction] = useActionState(handleChange, {message:""})
    return <div className="column">
        <h3 className="is-size-3">settings</h3>
        <h3 className="is-size-5">Change password</h3>
        <div className="columns">
            <div className="column  is-two-fifths my-4">
                <form className="box my-3" action={handleChangeAction}>
                {state?.message && <p style={{color:'red'}}>{state.message}</p>}
                    <div className="field my-3">
                        <input
                            name="login"
                            type="text"
                            className="input is-dark"
                            placeholder="enter the new login"
                        />
                    </div> 
                     <div className="field my-3">
                        <input
                            name="password"
                            type="password"
                            className="input is-dark"
                            placeholder="enter the password"

                        />
                    </div>
                    <button className="button is-light">Change</button>
                </form>
            </div>
        </div>
    </div>
}

