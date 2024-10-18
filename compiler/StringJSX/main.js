// Tokenizer: splits input into tokens
// Parser: validates tokens, creates Abstract Syntax Tree

const stringToJsx = (htmlString) => {
    if(htmlString[0] != '<' || htmlString[htmlString.length-1] != '>'){
        htmlString = '<>' + htmlString + '</>'
    }
    
    let output = {}

    let openingElementMatch;
    let closingElementMatch;
    while((openingElementMatch = /<[A-Za-z]*>/.exec("<p>asdfasdf</p>")) || (closingElementMatch = /<\/[A-Za-z]*>/.exec("<p>asdfasdf</p>"))){
        if(openingElementMatch?.index < closingElementMatch?.index){
            //opening html element occurs first
        }
        else{
            //closign html element occurs second
        }
    }

    return htmlString;
}

if(process.argv.length <= 2){
    console.error('Expected at least one argument');
    process.exit(1);
}
console.info(stringToJsx(process.argv[2]))

