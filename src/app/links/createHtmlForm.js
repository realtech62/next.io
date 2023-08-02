export default function LinksCreateHtmlForm() {
	return <>
		<form action="/api/links" method="POST">
			<input type="text" name="url" placeholder="Your url to shorten" className="dark:bg-slate-800 dark:text-white px-2" defaultValue="https://github.com/realtech62/next.io"/>
			<button type="submit">Shorten</button>
		</form>
	</>
}