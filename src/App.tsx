// import { useState } from "react"

import { useEffect, useState } from "react"
import QRCode from "react-qr-code"

function App() {
    const [url, setUrl] = useState("")

    useEffect(() => {
        // @ts-expect-error chrome is not defined
        chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
            setUrl(tabs[0].url)
        })
    }, [])

    return (
        <div className="grid size-[300px] place-items-center">
            <div className="size-fit rounded-xl bg-white p-4 shadow-xl shadow-indigo-300">
                {url && <QRCode className="size-[225px]" value={url} />}
            </div>
        </div>
    )
}

export default App
