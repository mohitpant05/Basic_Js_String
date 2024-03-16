// // b=33


// // console.log(b.toString(2))
// // x= Number.SAFE_INTEGER
// // console.log(x)


// // /* 
// // 1. toString()
// // 2. toExponential()
// // 3. toFixed();
// // 4. toPrecision();
// // 5. valueOf()
// // 6. Number()
// // 7. parseInt()
// // 8. parseFloat()
// // 9. x= Number.EPSILON etc

// // */

// // arr=[12,3,24,5,3,23,1,2,44,233]

// // console.log(x)
// // console.log(arr)


// // console.log(arr.filter(n => n%2===0).map(n=> n*2))

// // arr.sort(function(a,b){return a-b});
// // console.log(arr)



// d= new Date();
// da=Date.parse(d);
// ar=[1,90]
// dt = "hi I am beres"
// br= ar.toString()
// console.log(Math.round(Math.abs(-4.5)))
// console.log(Math.floor(Math.random()*101))

// for(let x in dt){
//     console.log(dt.charAt(x))
// }

// let text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
// const obje=JSON.parse(text)
// console.log(obje)

// // const a=new Date();
// // setInterval(min,1000);

// // function min(){
// //     t=d.getHours() + " "+d.getMinutes()+" "+ d.getSeconds();
// //     console.log(t);
// // }

// setInterval(function (){
//     d=new Date();
//     t=d.getHours() + " "+d.getMinutes()+" "+ d.getSeconds();
//     console.log(t);

// },1000);

// setTimeout(setInterval, 3000);





const p = new Promise((resolve,reject)=>{
    a= 1+3
    if(a===2){
        resolve('success')
    }
    else{
        reject('rejected')
    }
})

p.then((message)=>{
    console.log(message)
},(messe)=>{
    console.log(messe)
})


const myElement = "";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement = "Latitude: " + position.coords.latitude +
  " Longitude: " + position.coords.longitude;

  console.log(myElement);
}