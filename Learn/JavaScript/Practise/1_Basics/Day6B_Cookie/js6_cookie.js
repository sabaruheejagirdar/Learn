// document.cookie = 'username=Clement; secure; samesite=strict;';
document.cookie = 'course=abc';
console.log(document.cookie);

// To fetch the cookie

// const username  = document
//     .cookie
//     .split('; ')
//     .find(cookie => cookie.startsWith('username='))
//     .split('=')[1];

// console.log(username);

localStorage.setItem('user','Saba');
localStorage.setItem('course','Algorithm');
console.log(localStorage.getItem('user'));
localStorage.removeItem('course');
localStorage.clear();