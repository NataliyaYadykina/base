showMsg(getName());

function showMsg(name) {
    let msg = 'Hello, ' + name + '!';
    alert(msg)
}

function getName(){
    let name = prompt('What is your first name?', 'Name');
    return name
}