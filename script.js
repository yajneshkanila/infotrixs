document.addEventListener('DOMContentLoaded',getDailyQuote);
async function getDailyQuote(){
    const quoteElement = document.getElementById('quote');
    try{
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        quoteElement.textContent = `"${data.content}"-${data.author}`;
    }catch(error){
        console.error('Error fetching todays quote:',error);
    }
}

async function searchQuotes(){
    const authorInput = document.getElementById('authorInput');
    const searchResultsElement = document.getElementById('searchResults');
    try{
        const response = await fetch(`https://api.quotable.io/quotes?author=${authorInput.value}`);
        const data = await response.json();
        
        if(data.results.length > 0){
            const results = data.results.map(quote => `"${quote.content}"-${quote.author}`);
            searchResultsElement.innerHTML = results.join('<br>');
        }else{
            searchResultsElement.textContent = 'Unfortunately, we have no quotes on record for the author you searched for.';
        }
    }catch(error){
        console.error('Error searching quotes:',error);
    }
}

