const quotes=[
    'When you have eliminated the impossible, whatever remains, however important',
    'There is nothing more deceptive than an obvious fact.', 
    'I ought to know by this time that when a fact appears to be opposed ',
    'I never make exceptions. An exception disproves the rule.', 
    'What one man can invent another can discover.', 
    'Nothing clears up a case so much as stating it to another person.', 
    'Education never ends, Watson. It is a series of lessons, with the great life value'
];

let words=[];
let wordsIndex=0;
let startTime=Date.now();

const quoteElement=document.getElementById('quote')
const messageElement=document.getElementById('message')
const typedValueElement=document.getElementById('typed-value')

document.getElementById('start').addEventListener('click',function(){
    const quoteIndex=Math.floor(Math.random() * quotes.length)
    const quote=quotes[quoteIndex];
    words=quote.split('');

    wordsIndex=0;

    const spanwords=words.map(function(word){
        return `<span>${word}</span>` })

        quoteElement.innerHTML=spanwords.join('')
        quoteElement.childNodes[0].className='highlight';

        messageElement.innerText=''

        typedValueElement.value=''
        typedValueElement.focus();

        startTime=new Date().getTime
   
})

typedValueElement.addEventListener('inpur',(e)=>{
    const currentWord=words[wordsIndex];
    const typedValue=typedValueElement.value;

    if(typedValue===currentWord && wordsIndex===words.length-1){
        const elaspedTime=new Date.getTime()-startTime;

        const message=`CONGRATULATION! You finised in ${elaspedTime/1000} seconds.`;
        messageElement.innerText=message;
    }else if(typedValue.endWith(' ') && typedValue.trim()===currentWord){
        typedValueElement.value='';

        wordsIndex++;

        for(const wordElement of quoteElement.childNodes){
            wordElement.className='';
        }
        quoteElement.chiledNodes[wordsIndex].className='highlight';
    }else if(currentWord.startsWith(typedValue)){
        typedValueElement.className='';
    }else{
        typedValueElement.className='error'
    }
})




