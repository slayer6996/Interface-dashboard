function solve() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    GiveAnswer(a, b, c);
}

function GiveAnswer(a, b, c) {
    let d = Math.sqrt((b * b) - (4 * a * c));
    console.log(d);
    let ans1 = (-b - d) / (2 * a);
    let ans2 = (-b + d) / (2 * a);
    console.log(ans1, ans2);
    if(((b*b)-(4*a*c))<0)
    {
        imans();
        console.log('ima');
    }
    else{
    printAns(ans1, ans2);
    }
}

function imans()
{
    let ans=document.createTextNode("Roots are imaginary");
    let ansbox=document.createElement('h4');
    ansbox.style.color='white';
    ansbox.setAttribute('id','ansbox');
    ansbox.appendChild(ans);
    document.getElementById('answer').appendChild(ans);
}
s
function printAns(ans1, ans2) {
    let x1=document.createTextNode('x1 is '+ans1 + ' and x2 is '+ans2);
   // let x2=document.createTextNode('x2 is '+ans2);
    let ansbox1=document.createElement('h4');
    ansbox1.style.color='white';
  //  let ansbox2=document.createElement('h4');
    ansbox1.setAttribute('id', 'ans1');
   // ansbox2.setAttribute('id', 'ans2');
    ansbox1.appendChild(x1);
   // ansbox2.appendChild(x2);
    document.getElementById('answer').appendChild(ansbox1);
    //document.getElementById('answer').appendChild(ansbox2);
}

