var request = new XMLHttpRequest();
const outputID = document.getElementById('output')
const ul=document.createElement('ul')
const ulist=document.createElement('ul')
var header2 = document.createElement('h2')
header2.innerHTML= 'User emails from XMLHttpRequest:';
outputID.appendChild(header2)
var header2=document.createElement('h2')
header2.innerHTML= 'User usernames from fetch:';
outputID.appendChild(header2)
var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.onload = function (e) {
    if (request.status = 200) {
        var info = JSON.parse(this.response);
        process(info)
    }
};

request.send()
function process(info) {
    let emails = []
    info.forEach(function(user) {
        emails.push(user.email)
    })
emails.sort()
emails.forEach( email =>{
    let li = createNode('li');
    li.innerHTML = email;
    append (ulist, li);

})

}
outputID.appendChild(ulist)
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then(function (info){
    let users = info 
    let usernames = []
    users.forEach(function(user) {
        usernames.push(user.username)
    }
    )
    function Names (num1, num2) {
        const len1 = num1.length
        const len2 = num2.length
        return len1-len2
    }
    usernames.sort(Names)
    usernames.forEach(username => {
        let li = createNode('li')
        li.innerHTML = username
        append (ul,li);
        return ul;
    })
})
function createNode(element) {
    return document.createElement(element);
}

function append(origin,ch) {
    return origin.appendChild(ch);
}


outputID.appendChild(ul)

