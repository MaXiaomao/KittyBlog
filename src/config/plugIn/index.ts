import {marked} from "marked"
import prismjs from "prismjs"
import "prismjs/themes/prism-coy.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.min"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

const randomNumber = function (min: number, max: number) {
	return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min)
}

const markedLinkPrism = (markdown: string) => {
	const renderer = new marked.Renderer()
	renderer.code = (code: string, lang: string) => {
		return `<pre class="language-${lang}"><code class="line-numbers language-${lang}">${code}</code></pre>`
	}
	marked.setOptions({
		renderer,
		highlight(code: string, lang: string) {
			console.log(prismjs.highlight(code, prismjs.languages[lang], lang))
			return prismjs.highlight(code, prismjs.languages[lang], lang)
		},
	})
	return marked(markdown)
}

export {randomNumber, markedLinkPrism}
