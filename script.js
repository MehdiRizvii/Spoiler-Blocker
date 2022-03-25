hideText(document.body)

function hideText(element){
    if(element.hasChildNodes()){
        element.childNodes.forEach(hideText)
    } else if (element.nodeType === Text.TEXT_NODE){
        if (element.textContent.match(/cat/gi)){
            const newElement = document.createElement(('span'))
            newElement.innerHTML = element.textContent.replace(/(cat)/gi,
                '<span style="background-color: black; color: black;">$1</span>'
                )
            element.replaceWith(newElement)


          //  element.parentElement.style.color = 'black'
          //  element.parentElement.style.backgroundColor = 'black'

        }
       // element.textContent = element.textContent.replace(/cat/gi, '████')
    }
}