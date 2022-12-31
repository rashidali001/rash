let myvar;

function loading(){
    myvar = setTimeout(showpage, 1500);
}

function showpage(){
    let loader_icon = document.getElementById("loader");
    let main = document.getElementById("main");
    let body = document.getElementById("body");
    loader_icon.style.display = "none";
    main.style.display = "block";
    body.style.display = "block";
    let categories_info = document.getElementsByClassName("categories_info")[0];
    categories_info.style.display = "block";
    let textarea = document.getElementById("msg");
    textarea.value = "";
    let skill = document.getElementById("skill");
    skill.classList.toggle("active");
}

function skills(){
    let categories_info = document.getElementsByClassName("categories_info")[0];
    let education = document.getElementsByClassName("education")[0];
    let skill = document.getElementById("skill");
    let edu = document.getElementById("edu");


    if (categories_info.style.display == "block")
    {
        return;
    }
    education.style.display = "none";
    categories_info.style.display = "block";
    skill.classList.toggle("active");
    edu.classList.remove("active");
    
}

function education(){
    let categories_info = document.getElementsByClassName("categories_info")[0];
    let education = document.getElementsByClassName("education")[0];
    let edu = document.getElementById("edu");
    let skill = document.getElementById("skill");


    if (education.style.display == "block")
    {
        return;
    }
    categories_info.style.display = "none";
    education.style.display = "block";    
    edu.classList.toggle("active");
    skill.classList.remove("active");

    
}