let URL = "https://v6.exchangerate-api.com/v6/e6a68672d7256cb1a21e8105/latest/USD";

function truncate(num,decimalPlaces){
    let a = Math.pow(10,decimalPlaces);
    let b = (Math.floor(num*a))/a;
    return b;
}

document.querySelector("#convert").addEventListener('click', async function(){
    let first_c = document.querySelector("#first").value;
    let second_c = document.querySelector("#second").value;

    let first_amt = document.querySelector("#fc").value;


    let res = await fetch(URL);
    let data = await res.json();
    let curr=data.conversion_rates;
    console.log(data);

    let value = (first_amt/(curr[first_c]))*curr[second_c];
    let result = truncate(value,3);
    
    let output = `${first_amt}${first_c} is equal to ${result}${second_c} updated as on ${data.time_last_update_utc}.`

    document.querySelector("#result").innerHTML = output;
});