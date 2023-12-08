// Change image function fades in the succesful sign in swish GIF, using a delau to properly time the sequence
function changeImage(){
    fadeOut(sideImg);
    setTimeout(()=>{
        sideImg.src="./images/./finalSucess.gif";
        fadeIn(sideImg);
    },125);
}

// Change image function fades in the unsuccesful sign in miss GIF, using a delau to properly time the sequence
function changeImageError(){
    fadeOut(sideImg);
    setTimeout(()=>{
        sideImg.src="./images/./finalUnsucess.gif";
        fadeIn(sideImg);
    },125);
}

// The check submit function extracts user input data from text entered into the forms with getElementID.  This extracted sign in data is then assigned to multiple vars, which is then passed through if statements to determine which image to display based on the situation
function checkSubmit(){
    //Variables that extract input data using 'document.getElementById'
    var email = document.getElementById("emailInput");
    var pswd = document.getElementById("pswdInput");
    var emailHeader = document.getElementById("emailHeader");
    var pswdHeader = document.getElementById("pswdHeader");
    var errorFlag = false;
    var errorImage = document.getElementById("errorImage");

    //Error flag for false email and password inputs. True = red text, red input box and errorFlag is true.  Else = regular black text and regular transparent input box
    if (!email.value){
        emailHeader.style.color = '#a6172c';
        email.style.backgroundColor =  '#FFCCCB';
        errorFlag = true;
    }
    else{
        emailHeader.style.color = 'black';
        email.style.backgroundColor =  'transparent';
    }

    if (!pswd.value){
        pswdHeader.style.color = '#a6172c';
        pswd.style.backgroundColor =  '#FFCCCB';
        errorFlag = true;
    }
    else{
        pswdHeader.style.color = 'black';
        pswd.style.backgroundColor =  'transparent';
    }

    //Error flag if statement -- True = display error image, or elseif statement to determine what constitutes the right email/password and what to display based on situation.
    if(errorFlag){
        errorImage.style.display = 'inline-block';
        fadeIn(errorImage);
    }
    else{
        //If email and password are these valid parameters:
        if(email.value=='nba@gmail.com' && pswd.value=='slamdunk'){
            //Change to successful image
            changeImage();
            errorImage.style.opacity = 0;
            emailHeader.style.color = '#265d2c';
            email.style.backgroundColor =  '#deffe2';
            pswdHeader.style.color = '#265d2c';
            pswd.style.backgroundColor =  '#deffe2';
        }
        else{
            //Change to unsuccessful image
            changeImageError();
            if(errorImage.style.opacity > 0){
                fadeOut(errorImage);
            }
            if(email.value!='nba@gmail.com'){
                emailHeader.style.color = '#a6172c';
                email.style.backgroundColor =  '#FFCCCB';
            }
            if(pswd.value!='slamdunk'){
                pswdHeader.style.color = '#a6172c';
                pswd.style.backgroundColor =  '#FFCCCB';
            }
        }

    }
}

//Fade in/fade out functions for each image, so change from one state to another isn't instant
function fadeIn(el){
    el.style.opacity = 0;
    var tick = function () {
        el.style.opacity = +el.style.opacity + 0.025;
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

function fadeOut(el){
        el.style.opacity = 1;
        var tick = function () {
            el.style.opacity = +el.style.opacity - 0.025;
            if (+el.style.opacity > 0) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
            }
        };
        tick(); 
}
