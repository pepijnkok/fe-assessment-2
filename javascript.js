document.getElementById("increment").addEventListener("click", function(){
    if(document.getElementById('select').value != 10){
    document.getElementById('select').value++
    }
    

})
document.getElementById("decrease").addEventListener("click", function(){
    if(document.getElementById('select').value != 0){
    document.getElementById('select').value--
    }
})


document.addEventListener('DOMContentLoaded', () => {
    const expandsMore = document.querySelectorAll('[expand-more]')

    function expand() {
        const showContent = document.getElementById(this.dataset.target)
        if (showContent.classList.contains('expand-active')) {
            this.innerHTML=this.dataset.showtext
        } else {
            this.innerHTML=this.dataset.hidetext
        }
        showContent.classList.toggle('expand-active')
    }
    expandsMore.forEach(expandMore => {
expandMore.addEventListener('click', expand)
    })

})