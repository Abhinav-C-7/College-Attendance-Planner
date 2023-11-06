const form = document.getElementById('myform');
form.addEventListener('submit', function (event) {
    event.preventDefault(); 


    let clsTaken = parseFloat(document.getElementById('cls-taken').value);
    let clsPresent = parseFloat(document.getElementById('cls-present').value);

    //const target = parseFloat(document.getElementById('target').value);
    
    let old_present = clsPresent;
    current_att= clsPresent/clsTaken;

    while(current_att < 0.75)
    {
        clsPresent = clsPresent+1;
        clsTaken = clsTaken + 1;
        current_att = clsPresent/clsTaken;
    }

    const required_class = clsPresent - old_present;
    const resultElement = document.getElementById('result');

    if(required_class === 0 )
    {
        resultElement.innerHTML = 'You already have above 75%  attendance';
    }
    else{

    // Display the result
    
    resultElement.innerHTML = `You have to attend ${required_class} more classes to reach 75% attendance`;
}});