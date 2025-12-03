
const homesection=document.getElementById('hero-section');
const homeBTN=document.getElementById('home-btn');
const aboutsection=document.getElementById('about');
const aboutBTN=document.getElementById('about-btn');
const portfoliosection=document.getElementById('portfolio');
const portfolioBTN=document.getElementById('portfolio-btn');
const contactsection=document.getElementById('contact');
const contactBTN=document.getElementById('contact-btn');

 // Home button
homeBTN.addEventListener('click',(e) => {
    // remove active from other buttons
    if(aboutBTN.classList.contains('active-btn')){
        aboutBTN.classList.remove('active-btn');
        aboutsection.classList.remove('active');
    }else if(portfolioBTN.classList.contains('active-btn')){
        portfolioBTN.classList.remove('active-btn');
        portfoliosection.classList.remove('active');
    }
    else if(contactBTN.classList.contains('active-btn')){
        contactBTN.classList.remove('active-btn');
        contactsection.classList.remove('active');
    }

    // add active-btn class to button
    if(homeBTN.classList.contains('active-btn')){
        // do nothing
    }
    else{
        homeBTN.classList.add('active-btn');
        homesection.classList.add('active')
    }
})

// About button
aboutBTN.addEventListener('click',(e) => {
    // remove active from other buttons
    if(homeBTN.classList.contains('active-btn')){
        homeBTN.classList.remove('active-btn');
        homesection.classList.remove('active');
    }
    else if(portfolioBTN.classList.contains('active-btn')){
        portfolioBTN.classList.remove('active-btn');
        portfoliosection.classList.remove('active');
    }
    else if(contactBTN.classList.contains('active-btn')){
        contactBTN.classList.remove('active-btn');
        contactsection.classList.remove('active');
    }
        

    // add active-btn class to button
    if(aboutBTN.classList.contains('active-btn')){
        // do nothing
    }
    else{
        aboutBTN.classList.add('active-btn');
    }
    // add active class to section
    if(!aboutsection.classList.contains('active')){
        aboutsection.classList.add('active');
    }
    else{
            // do not add another active class
        }
})

// Portfolio button
portfolioBTN.addEventListener('click',(e) => {
    // remove active from other buttons
    if(homeBTN.classList.contains('active-btn')){
        homeBTN.classList.remove('active-btn');
        homesection.classList.remove('active');
    }
    else if(aboutBTN.classList.contains('active-btn')){
        aboutBTN.classList.remove('active-btn');
        aboutsection.classList.remove('active');
    }
    else if(contactBTN.classList.contains('active-btn')){
        contactBTN.classList.remove('active-btn');
        contactsection.classList.remove('active');
    }

    // add active-btn class to button
    if(portfolioBTN.classList.contains('active-btn')){
        // do nothing
    }
    else{
        portfolioBTN.classList.add('active-btn');
    }
    // add active class to section
    if(!portfoliosection.classList.contains('active')){
        portfoliosection.classList.add('active');
    }
    else{
        // do not add another active class
        }
})

// Contact button
contactBTN.addEventListener('click',(e) => {
    // remove active from other buttons
    if(homeBTN.classList.contains('active-btn')){
        homeBTN.classList.remove('active-btn');
        homesection.classList.remove('active');
    }
    else if(aboutBTN.classList.contains('active-btn')){
        aboutBTN.classList.remove('active-btn');
        aboutsection.classList.remove('active');
    }else if(portfolioBTN.classList.contains('active-btn')){
        portfolioBTN.classList.remove('active-btn');
        portfoliosection.classList.remove('active');
    }

    // add active-btn class to button
    if(contactBTN.classList.contains('active-btn')){
        // do nothing
    }
    else{
        contactBTN.classList.add('active-btn');
    }
    // add active class to section
    if(!contactsection.classList.contains('active')){
        contactsection.classList.add('active');
    }
    else{
        // do not add another active class
        }
    })
