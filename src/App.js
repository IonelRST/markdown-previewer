import { marked } from 'marked'
import './App.css'
import React, { useState } from 'react'

// Allows line breaks with the return button
marked.setOptions({
  breaks: true
})

// Set a function to be used by the marked Renderer, the bit that takes markdown and translates it to html, and create a callback for links to return the link in a diffrent format then the default.
const renderer = new marked.Renderer()

function App () {
  const [markdown, setMarkdown] = useState(placeholder)

  const handleChange = event => {
    setMarkdown(event.target.value)
  }

  return (
    <div>
      <h1 className='title'>React Markdown Previewer</h1>
      <div className='wrapper'>
        <div className='editor-wrap'>
          <div className='toolbar'>Editor </div>
          <textarea
            id='editor'
            value={markdown}
            onChange={handleChange}
            type='text'
          />
        </div>
        <div className='preview-wrap'>
          <div className='toolbar'>Previewer</div>
          <div
            id='preview'
            dangerouslySetInnerHTML={{
              __html: marked(markdown, { renderer: renderer })
            }}
          />
        </div>
      </div>
    </div>
  )
}

const placeholder = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links](https://ionelfuioaga.com), and
> Block Quotes!
And if you want to get really crazy, even tables:
Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

export default App
