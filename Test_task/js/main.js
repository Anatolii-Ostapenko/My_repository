let takeClassForm = document.getElementsByClassName("form")[0];
let takeTagHeader = document.getElementsByTagName("header")[0];
let taketagI = document.getElementsByTagName("i")[0];
let takeClassToggle = document.getElementsByClassName("toggle")[0];
document.getElementsByClassName("toggle")[0].addEventListener("click", function(e){expandOrShrink(), toggleChangeName(e)});

function toggleChangeName(e){
    let name = document.getElementsByClassName("state")[0];
    if (name.innerHTML === "Expend") {
        name.innerHTML = "Shrink";
    } else {
        name.innerHTML = "Expend";
    }
}
function expandOrShrink(){
    let title = document.getElementsByClassName("title")[0];
    let button = document.getElementsByClassName("submit-form")[0];
    if (title.style.display === "none") {
        title.style.display = "block";
        button.style.display = "block";
        stateShrink();
    } else {
        title.style.display = "none";
        button.style.display = "none";
        stateExpand()
    }
}
function stateShrink(){
    takeClassForm.style.padding = '10px';
    takeClassForm.style.marginTop = '70px';
    takeClassForm.style.border = '1px solid #3B9D6C';
    if (window.matchMedia("(min-width: 767px)").matches) {
        takeClassForm.style.width = '60vw';
    }else{
        takeClassForm.style.width = '90vw';
    }
    if (window.matchMedia("(min-width: 1919px)").matches) {
        takeClassForm.style.width = '30vw';
    }else{
        takeClassForm.style.width = '90vw';
    }
    takeClassForm.style.height = 'auto';
    takeClassForm.style.backgroundColor = '#FFFFFF';
    takeTagHeader.style.margin = '10px 0';
    taketagI.style.visibility = 'visible';
    takeClassToggle.style.borderRadius = '5px';
    document.getElementsByTagName("textarea")[0].style.height = '150px';
}
function stateExpand(){
    takeClassForm.style.padding = '0px';
    takeClassForm.style.marginTop = '0px';
    takeClassForm.style.border = 'none';

    takeClassForm.style.width = '100vw';
    takeClassForm.style.height = '99vh';
    takeClassForm.style.backgroundColor = '#3B9D6C';
    takeTagHeader.style.margin = '0';
    taketagI.style.visibility = 'hidden';
    takeClassToggle.style.borderRadius = '0px';
    document.getElementsByTagName("textarea")[0].style.height = '93vh';
}