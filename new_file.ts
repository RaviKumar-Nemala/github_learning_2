type MyObject = {
    readonly account_number:"123" ;
}
function accept_account_number(a : MyObject)
{
        console.log (a.account_number)
}
accept_account_number(  {account_number : "123"});
let b = 10;
console.log('anotherline')