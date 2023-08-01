async function getData() {
	// 1 endpoint - API?
	// const endpoint = "http://localhosts:3000/api/posts"
	// const res = await fetch(endpoint)
	// if (!res.ok) {
	// 	throw new Error("Failed to fetch data")
	// }

	// const data = await res.json()
	// return data
	return {items: []}
}

export default async function BlogPage() {
	const data = await getData()
	const items = data && data.items ? [...data.items] : []
	return <main>
		<h1>Hello World</h1>
		<p>Posts</p>
		{data && items.map((item, idx) => {
			return <li key={`post-${idx}`}>{item.title}</li>
		})}
	</main>
}