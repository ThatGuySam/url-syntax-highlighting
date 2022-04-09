// https://github.com/github/linguist/blob/master/vendor/README.md

const grammarIndexUrl = 'https://cdn.jsdelivr.net/gh/github/linguist/vendor/README.md'

const seperator = '```'

;(async () => {

    const response = await fetch( grammarIndexUrl )
        .catch( fetchError => console.error )
        
    const markdownContent = await response.text()

    const languageNames = markdownContent
        .replaceAll('*', '')
        .replaceAll('-', '')
        .split(/\r?\n/)
        .slice( 8, -1 )
        .map( rawLine => {
            const [ name ] = rawLine.trim().split(':')
            return name.trim()
        })
        
    console.log( 'total languages', languageNames.length )
       
    const languageExamples = languageNames.map( name => {
    	return `
### ${ name }
${ seperator }${ name }
https://vumbnail.com/W2EMHNhyEnQ.jpg
${ seperator }
${ seperator }${ name }
https://vumbnail.com/youtube/W2EMHNhyEnQ.jpg
${ seperator }
${ seperator }${ name }
https://vumbnail.com:3000/W2EMHNhyEnQ_word_with-dash.jpg?query=string&object[property]=value&object.property=value
${ seperator }
${ seperator }${ name }
https://canary.vumbnail.com:3000/W2EMHNhyEnQ_word_with-dash.jpg?query=string&object[property]=value&object.property=value
${ seperator }
        `
    }).join('<br><br><br>')
    
    console.log( 'languageExamples', languageExamples )
    
})()
