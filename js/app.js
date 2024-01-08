document.addEventListener('click', event => {
    const PageXSpan = event.pageX
    const PageYSpan = event.pageY
    const Size = Math.floor(Math.random() * 100)

    let SpanTag = document.createElement('span')
    SpanTag.className = 'snowflake'
    SpanTag.style.cssText = `top: ${PageYSpan}px; left: ${PageXSpan}px; width: ${Size}px; height: ${Size}px;`

    document.body.appendChild(SpanTag)

    setInterval(() => {
        SpanTag.remove()
    }, 2000)
})