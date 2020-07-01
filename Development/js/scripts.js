//EXERCISE 1

//question1
function logger(){
    let array = console.log(["Football", "BasketBall", "Baseball"]);
}
logger();


//Question 2
function hottestDays(){
    let initialValue = prompt("enter an initial value");
    
    while(true){
    let value = prompt("Enter value");
    let output = [];
    
    if(value > initialValue){
        output.push(value);
    }
     
    if(value == "quit"){
        break
    }
     
    console.log(output); 
 }
 
}
 

//Question 3
book =[50,40,60]
function getBookById(bookId){
    for(books of book){
        if(books == bookId){
            console.log("book found")
        }else{
            console.log("book not found")
        }
    } 
}
getBookById(50);




//EXERCISE 2
function shop(){
    while(true){
    let food = prompt("What food do you want")
    let amount = prompt("how much do you want")
    let price = prompt("Enter price")
    let quit = prompt("press quit to leave")

    console.log("Reciept")
    console.log("the food is " + food);
    console.log("the amount is " + amount);
    console.log("Total price is: " + price * amount);
    if(quit == "quit"){
        break
    }
    }
}



