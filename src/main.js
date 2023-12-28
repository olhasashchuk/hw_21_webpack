import { getRandomImage } from "./random.js";
import { toDoList } from "./todolist.js";

document.addEventListener('DOMContentLoaded', ()=> {
    toDoList ( {
        form: document.querySelector('.js--form'),
        addTaskButton: document.querySelector('.form__btn'),
        listTasks: document.querySelector('.js--todos-wrapper'),
    })
})

document.addEventListener ('DOMContentLoaded', ()=>{
   document.querySelector(".random").addEventListener('click', getRandomImage);
});



