import getDomain from "../lib/getDomain"

async function getData() {
	// 1 endpoint - API?
	const domain = getDomain()
	const endpoint = `${domain}/api/posts`
	const res = await fetch(endpoint)
	if (!res.ok) {
		throw new Error("Failed to fetch data")
	}

	const data = await res.json()
	return data
}

export default async function BlogPage() {
	const data = await getData()
	const items = data && data.items ? [...data.items] : []
	console.log("process.env", process.env.NEXT_PUBLIC_VERCEL_URL)
	return <main>
		<h1>Hello World</h1>
		<p>Posts</p>
		{data && items.map((item, idx) => {
			return <li key={`post-${idx}`}>{item.title}</li>
		})}
	</main>
}