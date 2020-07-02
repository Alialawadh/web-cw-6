// logger

let friends =["ali","bader","jasem"];

function logger(array1){
   for(let friend of array1){
   console.log(friend) 
   }
}

logger(friends);


// hottestDays()


 


function hottestDays(hot , number){
    for(weather of hot){
        if ( weather > number){
        console.log(weather);
        }
    }
}

let array2 = [9,5,10];
hottestDays(array2 , 2);


// getBookById(bookId, books)

let array3 = [
    {book1: "game", id: 2}, 
    {book1: "harry", id: 3}, 
    {book1: "stephen", id: 4}, 
    {book1: "hello", id: 8}
 ];
 

function getBookById(bookId, books){
     
    

    for(book of array3){

        if (book.id == bookId){
            console.log(book.book1);
            break;
        } 
        else {
            console.log("undefined");
        }
    }
 
 
}

    getBookById(2 , array3);



    // السوال الثاني    

   
    let input = prompt("ادخل السلعه");



    let array43 = []



     while ( input != "انتهيت") {
        
        let input2 = prompt("الكميه");
    
        let input3 = prompt("السعر");

        array43.push({name1: input  , quantity: input2 , price: input3});

        input = prompt("ادخل السلعه");
      }

      let total = 0;
      
      for(bill of array43){
          if (input == "انتهيت"){
              total = total + parseInt(bill.price) * parseInt(bill.quantity);
          }
      }

     
      console.log(total);
 
 