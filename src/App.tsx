// import { useState } from "react"

import { useEffect, useState } from "react"
import QRCode from "react-qr-code"

function App() {
	const [url, setUrl] = useState("")

	useEffect(() => {
		// @ts-expect-error chrome is not defined
		chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
			setUrl(tabs[0].url)
		})
	}, [])

	return (
		<div className="grid place-items-center size-[300px] ">{url && <QRCode value={url} />}</div>
	)
}

export default App
