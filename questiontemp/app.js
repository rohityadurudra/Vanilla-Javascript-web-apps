//traversing the dom

// const btns = document.querySelectorAll(".question-btn");


// btns.forEach(function(btn) {
//     btn.addEventListener("click",function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     });
// });

//using selectors

const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
    // console.log(question);
    const btns = question.querySelector(".question-btn");
    // console.log(btn);
    btns.addEventListener("click",function(){
        
        questions.forEach(function (item) {
            console.log(item);
            if(item !== question){
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    });
});
