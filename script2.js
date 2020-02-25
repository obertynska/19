window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    //timer


    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    let deadline = '08 March 2020';


    const getTimeRemaining = (deadline) => {
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaning = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaning % 60),
            minutes = Math.floor((timeRemaning / 60) % 60),
            hours = Math.floor(timeRemaning / 60 / 60);
        if (timeRemaning > 0) {
            return {hours, minutes, seconds};
        } else {
            return {hours: '0', minutes: '0', seconds: '0'};
        }

    };


    const updateClock = () => {

        let timer = getTimeRemaining(deadline);

        for (let key in timer) {
            if (timer[key] < 10) {
                timer[key] = "0" + timer[key];
            }
        }

        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;

    };
    updateClock();
    setInterval(updateClock, 1000);


//menu
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li');


/*    const toggleMenu = () => {
        let initialTranslate = -100;

        const showMenu = () => {

            initialTranslate++;
            let value = initialTranslate + '%';

            menu.style.transform = `translate(${value})`;

            if (initialTranslate > 99) {
                clearInterval(stop)
            }
        };

        let stop = setInterval(showMenu, 7);

    };*/
    const togglleMenu = () => {
        document.body.addEventListener('click', (event) =>{
            let target = event.target;
            console.log(target);
            if(target && target.closest('.menu')){
               menu.classList.add('active-menu');
            } else if ( target && (target.tagName === 'A' || !target.classList.contains('active-menu'))){
                menu.classList.remove('active-menu');
            }

        });
    };

    togglleMenu();

    /*const togMenu = () => {
        let initialTranslate = 100;

        const hideMenu = () => {

            initialTranslate--;
            let value = initialTranslate + '%';

            menu.style.transform = `translate(${value})`;

            if (initialTranslate < -100) {
                clearInterval(stop)
            }
        };

        let stop = setInterval(hideMenu, 7);
    };*/


    //pop up
    const popUp = document.querySelector('.popup'),
        popUpBtn = document.querySelectorAll('.popup-btn');



    const togglePopUp = () => {
        popUp.style.display = 'block';
        /*popUp.style.opacity = '0';

        let count = 0;
        const appear = () => {
            count++;
            popUp.style.opacity = `.${count}`;

            if (count > 8) {
                popUp.style.opacity = '1';
                clearInterval(stop);
            }
        };
        let stop = setInterval(appear, 35);*/
    };

    popUp.addEventListener('click', (event)=>{
        let target = event.target;

        if(target.classList.contains('popup-close')){
            popUp.style.display = 'none';
        }else{
            target = target.closest('.popup-content');
            if(!target){
                popUp.style.display = 'none';
            }
        }
    });


/*    let widthScreen = document.documentElement.offsetWidth;
    if (widthScreen > 768) {*/
     /*   btnMenu.addEventListener('click', toggleMenu);*/
       /* closeBtn.addEventListener('click', togMenu);*/
       /* menuItems.forEach((elem) => elem.addEventListener('click', togMenu));*/
        popUpBtn.forEach((elem) => {
            elem.addEventListener('click', togglePopUp)
        });

   /* } else{
       /!* btnMenu.addEventListener('click', () =>{
            menu.style.transform = `translate(100%)`;
        });*!/
        closeBtn.addEventListener('click', () =>{
            menu.style.transform = `translate(-100%)`;
        });
        menuItems.forEach((elem) => elem.addEventListener('click', ()=>{
            menu.style.transform = `translate(-100%)`;
        }));
        popUpBtn.forEach((elem) => {
            elem.addEventListener('click', ()=>{
                popUp.style.display = 'block';
            })
        });

    }*/


    //табы

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if(index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else{
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            };
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if (target){
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });

};
    tabs();
});