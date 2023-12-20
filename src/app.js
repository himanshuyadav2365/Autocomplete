const data=["apple","banana","chikoo","pineapple","appricot"]

console.log(data)
let search=document.getElementById("search")
let suggestionbox=document.querySelector(".suggestion")

search.addEventListener("input",debounce(getSuggestion,1000))
suggestionbox.addEventListener("click",handleClick)

function handleClick(e){
    console.log(e.target.tagName)
    if(e.target.tagName=="P" ) {
        search.value=e.target.innerText
        removeSuggestionlist()
    }
}

function debounce(fn,delay){
    
    let timerID=null
    return function(value){
        let ctx=this
        let args=arguments
        clearTimeout(timerID)
        timerID=setTimeout(()=>{
            return fn.apply(ctx,args)
        },delay)
    }
}

function removeSuggestionlist(){
    suggestionbox.innerHTML=""
}

function getSuggestion(e){
    let value=e.target.value

    if(value){
        const suggestion=data.filter((fruit)=>{
            return fruit.substring(0,value.length)==value
        })
        console.log(suggestion)
        addSuggestionToDom(suggestion)
    }
    else{
        removeSuggestionlist()
    }
}

const addSuggestionToDom=(list)=>{

    let suggestionbox=document.querySelector(".suggestion")
    suggestionbox.innerHTML=""
    let suggestionNodes=list.map((item)=>{
         let node=document.createElement("p")
         node.innerText=item
         suggestionbox.append(node)
         return 
    })

    // suggestionbox.append(suggestionNodes)
}


