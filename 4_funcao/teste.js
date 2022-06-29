function f1() { console.log(this === global) }
f1()

document.getElementsByTagName('body') [0].onclick = f1

function f2() { console.log(this === document) }
f2()

document.getElementsByTagName('body') [0].onclick = f2