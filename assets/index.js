const displayName = document.querySelector('.display-name');
const displayAvatar = document.querySelector('.display-avatar');
const displayComment = document.querySelector('.display-comment');
const userDateName = document.querySelector('.userDate__Name');
const userDateAvatar = document.querySelector('.userDate__avatar');
const userDateComment = document.querySelector('.userDate__comment');
const send = document.querySelector('.button'); //кнопка
// console.log(displayName);
// console.log(displayAvatar);
// console.log(displayComment);
// console.log(userDateAvatar);
// console.log(userDateComment);
// console.log(send);

const userName = displayName.textContent;
const avatar = displayAvatar.textContent;
const comment = displayComment.textContent;
// console.log(userName);
// console.log(avatar);
// console.log(comment);
send.addEventListener('click', () =>{
    document.querySelector('.userDate__Name').innerHTML = userName;
    userDateComment=comment;
});

console.log (userDateName);