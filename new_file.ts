type MyObject = {
    readonly account_number:"123" ;
}
function accept_account_number(a : MyObject)
{
        console.log (a.account_number)
}
accept_account_number(  {account_number : "123"});
console.log( 'added in new_branch adding ');
console.log('anotherline')