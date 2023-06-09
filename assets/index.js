//Получаем элемен кнопки на странице и сохраняем его в переменной 'button'
const button = document.querySelector('.button'); //кнопка

// Привязываем обработчик события "click" к кнопке "Отправить", который будет выполняться при нажатии на кнопку
button.addEventListener('click', () =>{
// получаем значение поля ввода "Имя" и сохраняем его в переменную "name"
    const name = document.getElementById('display-name').value;
   
    // получаем значение поля ввода "Аватар" и сохраняем его в переменную "avatar"
    const avatar = document.querySelector('.display-avatar').value;
   
   // получаем значение поля ввода "Комментарий" и сохраняем его в переменную "comment"
   const comment = document.getElementById('msg_input').value;
   
   //Получаем элемент с классом "userDate__avatar" и сохраняем его в переменной avatarImg
const avatarImg =  document.querySelector('.userDate__avatar');

//Получаем элемент с классом "userDate__Name" и сохраняем его в переменной nameParagraph
const nameParagraph = document.querySelector('.userDate__Name');

//Получаем элемент с классом "userDate__comment" и сохраняем его в переменной commentParagraph
const commentParagraph = document.querySelector('.userDate__comment')

//Устанавливаем содержимое элемента "avatarImg" в виде изображения с URL, указанным в переменной avatar
avatarImg.innerHTML = `<img srl = "${avatar}">`;

//Устанавливаем содержимое элемента "nameParagraph" в виде значения переменной name
nameParagraph.innerText = name;

//Устанавливаем значение атрибута "src" элемента "avatarImg" равным значению переменной avatar 
avatarImg.src = avatar;

//Устанавливаем содержимое элемента "commentParagraph" в виде значения переменной comment, прошедшего проверку на спам
commentParagraph.innerText = checkSpam(comment);

// При нажатии на кнопку очищаются поля для ввода
document.getElementById("display-name").value = "";
document.getElementById('msg_input').value = "";
document.querySelector('.display-avatar').value = "";

});

// Функции для проверки комментария на наличие слова ViAgRA и замены его на ***
function checkSpam(comment){
    const censoredComment = comment.replace(/ViAgRA/gi, "***");
    return censoredComment;
}
// Функция для проверки комментария на наличие ххх и замены его на  ***
function checkSpam(comment){
    const censoredComment = comment.replace(/xxx/gi, "***");
    return censoredComment;
}

 




 