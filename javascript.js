document.getElementById("increment").addEventListener("click", function(){
    if(document.getElementById('select').value != 10){
    document.getElementById('select').value++
    }
    //Haalt de Id op uit de HTML, voegt er een click functie aantoe. Als de waarde van de select niet gelijk is aan 10 gaat hij per 1 value omhoog.
    

})
document.getElementById("decrease").addEventListener("click", function(){
    if(document.getElementById('select').value != 0){
    document.getElementById('select').value--
    }
})
 //Haalt de Id op uit de HTML, voegt er een click functie aantoe. Als de waarde van de select niet gelijk is aan 0 gaat hij per 1 value omlaag.


document.addEventListener('DOMContentLoaded', () => {
    const expandsMore = document.querySelectorAll('[expand-more]')
    //Als de gehele HTML pagina is geleden gebeurt dit event, hierna wordt er naar een attribuut 'expand-more' gezocht.

    function expand() {
        const showContent = document.getElementById(this.dataset.target)
        //Er wordt in de HTML gekeken voor een id dataset.target

        if (showContent.classList.contains('expand-active')) {
            this.innerHTML=this.dataset.showtext
        } 
        //Als de class van de showcontent element 'expand-active' bevat verandert deze naar showtext.
        
        else {
            this.innerHTML=this.dataset.hidetext
        }
        //Als dit niet waar is en de class expand active niet bevat wordt de text gehide.

        showContent.classList.toggle('expand-active')
        //Toggle de expand-active class
    }

    expandsMore.forEach(expandMore => {
expandMore.addEventListener('click', expand)
//Voor elke keer dat er geklikt wordt op het attribuut wordt de functie expand uitgevoerd.
    })

})

//Bron: Youtube(z.d.).Geraadpleegd op 27 juni 2020 van https://www.youtube.com/watch?v=kQW-MXriUIU