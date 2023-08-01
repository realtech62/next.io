'use client'

import { useEffect } from "react"

export default function Error({error, reset}) {
	useEffect(() => {
		console.log("error is", error)
	}, [error])

	const retryRequestHandler = () => {
		reset()
	}

	return <div>
		<h2>OpenAI is not working. Try again!</h2>
		<button onClick={retryRequestHandler}>Try again</button>
	</div>
}