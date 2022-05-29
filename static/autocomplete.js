new autoComplete({
    data: {                              
      src: films,
    },
    selector: "#autoComplete",           
    threshold: 2,                        
    debounce: 100,                       
    searchEngine: "strict",              
    resultsList: {                       
        render: true,
        container: source => {
            source.setAttribute("id", "suggest_list");
        },
        destination: document.querySelector("#autoComplete"),
        position: "afterend",
        element: "ul"
    },
    maxResults: 5,                         
    highlight: true,                       
    resultItem: {                          
        content: (data, source) => {
            source.innerHTML = data.match;
        },
        element: "li"
    },
    noResults: () => {                     
        const result = document.createElement("li");
        result.setAttribute("class", "no_result");
        result.setAttribute("tabindex", "1");
        result.innerHTML = "No Results";
        document.querySelector("#autoComplete_list").appendChild(result);
    },
    onSelection: feedback => {             
        document.getElementById('autoComplete').value = feedback.selection.value;
    }
});


let cardContainers = [...document.querySelectorAll('.card-container')]
let first_buttons = [...document.querySelectorAll('.pre')]
let next_buttons = [...document.querySelectorAll('.nxt')]

cardContainers.forEach((item, i) => {
    let containerDim = item.getBoundingClientRect()
    let containerWid = containerDim.width

    next_buttons[i].addEventListener('click', () => {
        item.scrollLeft += containerWid - 100;
    })

    first_buttons[i].addEventListener('click', () => {
        item.scrollLeft -= containerWid + 100;
    })
})