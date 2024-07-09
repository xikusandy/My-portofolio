document.addEventListener('DOMContentLoaded',function(){
    var dropdown =document.querySelector('.dropdown');
    var button =document.querySelector('.dropbtn');
    var content = dropdown.querySelector('.dropdown-content');
    var background =document.querySelector(".background_image");


    button.addEventListener('click',function(){
        content.classList.toggle('show')
        //dropdown.style.filter ="blur(0px)"
        //background.style.filter = "blur(5px)"
    });
    window .addEventListener('click',function(e){
        if(!dropdown.contains(e.target)){
            content.classList.remove('show');
            //background.style.filter = "blur(0px)"
        }
     
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        skill.addEventListener('mouseover', () => {
            skill.style.transform = 'scale(1.1)';
        });

        skill.addEventListener('mouseout', () => {
            skill.style.transform = 'scale(1)';
        });
    });
});
