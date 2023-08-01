import getDomain from "../lib/getDomain"
import BlogCard from "./card"

async function getData() {
	// 1 endpoint - API?
	const domain = getDomain()
	const endpoint = `${domain}/api/posts`
	// const res = await fetch(endpoint, {next: {revalidate: 10}}) // HTTP GET
	const res = await fetch(endpoint, {cache: "no-store"}) // HTTP GET
	if (!res.ok) {
		throw new Error("Failed to fetch data")
	}

	if (res.headers.get("content-type") !== "application/json") {
		return { items: [] }
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
		<p>Posts:</p>
		{data && items.map((item, idx) => {
			return <BlogCard title={item.title} key={`post-${idx}`}>{item.title}</BlogCard>
		})}
	</main>
}