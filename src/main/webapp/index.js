function toggleDiv(){
    var mainContainerClasses = document.querySelector('.mainContainer').classList
    if(mainContainerClasses.contains('slideLeft')){
        mainContainerClasses.add('slideRight')
        mainContainerClasses.remove('slideLeft');
    }else {
        mainContainerClasses.add('slideLeft')
        mainContainerClasses.remove('slideRight');
    }


    var flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(el =>{
        // el.parentElement.parentElement.style.justifyContent='flex-start'
        // el.classList.add('slide')
    })
}