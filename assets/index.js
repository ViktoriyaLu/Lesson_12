
const button = document.querySelector('.button'); //кнопка

button.addEventListener('click', () =>{
    document.querySelector('.userDate__Name').innerText = document.getElementById('display-name').value;
    document.querySelector('.userDate__avatar').innerText = document.getElementById('link_input').value;
    document.querySelector('.userDate__comment').innerText = document.getElementById('msg_input').value;
    userDateComment=comment;
});

// console.log (userDateComment);
 
// Все слова с заглавной буквы
// function ( ) {
//     capitalize(userName)
// }

// Это задание куда пристроить?

const comment1 = checkSpam('buy ViAgRA now'); //результат buy *** now
const comment2 = checkSpam('free xxx'); //результат free ***
const comment3 = checkSpam("innocent rabbit") ; //результат innocent rabbit
 
const str1 = 'buy ViAgRA now';
const n = str1.replace( /ViAgRA/g, '***');
console.log(n);
const str2 = 'buy ViAgRA now';
const m = str2.replace( /xxx/g, '***');
console.log(m);
const str3 = 'buy ViAgRA now';
const p = str1.replace( /ViAgRA/g, '***');
console.log(p);