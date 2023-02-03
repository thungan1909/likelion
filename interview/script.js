function checkEvenNumbers (num) 
{
    if (num%2===0)  console.log(num);
}
console.log(checkEvenNumbers(4));

function checkOddNumbers (num) 
{
    // if (num%2!==0) return true;
    // return false;
    return (num%2!==0);
}
console.log(checkOddNumbers(5));

function findMax(n1, n2, n3)
{
    max = n1;
    if (n2 > max)
    {
        max = n2;
    } 
    if (n3 > max)
    {
        max = n3;
    }
    return max;
}
function findMax(n1, n2, n3)
{
    return Math.max(n1,n2,n3);
}

function findMaxInArray(arr)
{
    max = arr[0];
    for(let i = 1; i < arr.length; i++)
    {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
let _array = [2,5,10,8,1,9];
console.log(findMaxInArray(_array));

function reserveNewString (str)
{
    //tách ra thành mảng
    str = str.split('');
    //reverse: đảo trong mảng
    str = str.reverse( );
    //join:
    str = str.join('');
}
console.log(reserveNewString("Hello"));

function strToArray (str) 
{
    return str.split(', ');
}
console.log(strToArray(' HTTJS, jJJS, MMSI'));


// function joinWithCharacter (arr, charactor) 
// {
//   str= "";
//     // for (let i; i< arr.length; i++)
//     // {
//         str = arr[i].join(charactor);
//     // }
//     return str;
// }
// console.log(joinWithCharacter(["ajsjj", "SDc", "dsca"], "-"));


function Increase() {
    for (let i = 1 ; i <= 100; i++)
    {
        console.log(i);
    }
}
Increase();

function getEvenNumbers(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
       checkEvenNumbers(arr[i]);
       
    }
}
getEvenNumbers([1,4,5,2,8,10]);


function getRandNumbers (min, max, length) 
{
    let arr;
    for (let i = 0; i< length; i++)
    {
        arr[i] =   Math.random() * (max - min) + min;
    }
}
getRandNumbers(3,10,5);


function getMostFavorite(sports)
{
    // let max = sports[0].like;
    // let maxS = sports[0];
    let arr = [];
    for (let i = 0 ; i < sports.length; i++) 
    {
        if(sports[i].like > 5 ) 
            {   
                // max = sports[i].like;
                // maxS = sports[i];
                arr.push(sports[i]);
            }
    }
    return arr;
}
const sports = [
    {
        name: 'Bóng rổ',
        like: 6,
    },
    {
        name: 'Bóng đá',
        like: 4,
    },
    {
        name: 'Bóng chuyển',
        like: 9,
    }
    
]


function getTotal (orders) 
{
    const initialValue = 0;
    const sumWithInitial = orders.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      initialValue
    );
    return sumWithInitial;
}
const orders = [
    {
        name: 'Bóng rổ',
        price: 6,
    },
    {
        name: 'Bóng đá',
        price: 4,
    },
    {
        name: 'Bóng chuyển',
        price: 9,
    }
    
]
console.log(getTotal(orders));

var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  
  
  
 
function calculatorRating (watchList) 
{
    len = watchList.length;
    const initialValue = 0;
    let arr = watchList.filter(watchList => watchList["Director"] === "Christopher Nolan");
    const sumWithInitial = arr.reduce(
            (accumulator, currentValue) => accumulator + parseFloat(currentValue.imdbRating),
            initialValue    );
    return sumWithInitial/arr.len;
   
}
console.log(calculatorRating(watchList));


function flatArr (userData) 
{

    let arr = [];
    //dung concat va spread
}


// Get posts by userId
// Get posts which have post title length < 30
// Check post body if its length > 250, truncate them (...)


function getPost (posts, userId) 
{
    return posts.filter(posts => posts["userId"] === userId);
}
getPost(posts, 10);

