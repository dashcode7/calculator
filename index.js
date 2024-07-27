let operators = document.querySelectorAll(".signs");
let num1=0;
let num2=0;
let op="";
let res;
operators.forEach(x =>{
    x.addEventListener('click',function(e){
        if(e.target.name =="clr"){
            num1=0;
            num2=0;
            document.getElementById('userInput').value='';
            document.getElementById('userInput').focus();
            op="";
            return;
        }
        if(op =="")
            {
            num1 = +document.getElementById('userInput').value;
            document.getElementById('userInput').value='';
            document.getElementById('userInput').focus();
             op=x.name;
        }
        else
        {
            num2 =+document.getElementById('userInput').value;
            calculate(num1,num2,op);
            op=x.name;
            if(op =="res"){
                showresult();
            }
       
        }

    })
})
function showresult(){
    document.getElementById('userInput').value = +res;
    num1=0;
    num2=0;
    op="";
}

function calculate(one,two=0,op){
    switch(op){
        case 'add':
            res = one+two;
            break;
        case 'sub':
            res=one-two;
            break;
        case 'mul':
            res=one*two;
            break;
        case 'div':
            res = one/two;
            break;
        case 'mod':
            res=one%two;
            break;
        case 'sq':
            res=Math.sqrt(one).toFixed(2)
            break;
        case 'pow':
            res = Math.pow(one,two)
            break;
    }
}