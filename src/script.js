let $searchBtn = document.querySelector('.searchBtn');
let $closeBtn = document.querySelector('.closeBtn');
let $searchBox = document.querySelector('.searchBox');

/**
 * @param {"CLOSE" | "OPEN"} type
 * CLOSE or OPEN
 */
const toggleSearch = (type) => {
    const isOpen = type === "OPEN";
    $searchBox.classList[isOpen ? "add" : "remove"]('active');
    $closeBtn.classList[isOpen ? "add" : "remove"]('active');
    $searchBox.classList[isOpen ? "add" : "remove"]('active');
}


$searchBtn.onclick = function(){
    toggleSearch("OPEN")
}

$closeBtn.onclick = function(){
    toggleSearch("CLOSE")
}