
// Kanya west api https://api.kanye.rest/ 

const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data));
}


const displayQuote = quote => {
    
    const blockquote = document.getElementById("quote"); 
    console.log(quote); 
    blockquote.innerText = quote.quote; 
}