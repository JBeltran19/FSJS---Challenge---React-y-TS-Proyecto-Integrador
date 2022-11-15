const d = document;

export default function searchFilter(input,selector){
    d.addEventListener('keyup',e=>{
        if(e.target.matches(input)){
            d.querySelectorAll(selector).forEach((ele)=> 
            ele.textContent.toLowerCase().includes(e.target.value)
            ?ele.classList.remove('filter')
            :ele.classList.add('filter')
            )
        };
    });
}