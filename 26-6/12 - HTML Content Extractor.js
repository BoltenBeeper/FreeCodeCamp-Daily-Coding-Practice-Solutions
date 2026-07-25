// Create a new string using filter method.
function extractContent(html) {
  let insideTag = false

  // Filter out any characters inside "<>" including the "<>".
  let insideText = html.split("").filter((char) => {
    if (char == "<") {
      insideTag = true
      return false
    } else if (char == ">") {
      insideTag = false
      return false
    } else if (insideTag === false) {
      return true
    }
  })
  .join("")

  console.log(insideText)
  return insideText;
}

extractContent('<div class="container"><h1 id="title">Welcome to <strong>My</strong> Website.</h1><p>This is a <a href="https://example.com" target="_blank">link</a> to something <em>really</em> <span class="highlight">important</span>.</p><ul><li>Item <strong>one</strong></li><li>Item <em>two</em></li><li>Item three</li></ul><img src="pic.jpg" alt="A picture"/><p class="footer">Contact us at <a href="mailto:hello@example.com">hello@example.com</a> for <span>more <strong>info</strong></span>.</p></div>')