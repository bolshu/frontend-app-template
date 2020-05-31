import './style.css';

const printHelloWorld = (str: string) => {
  console.log(str);
};

const delayed = setTimeout(() => { 
  printHelloWorld("Hello World!");
}, 400);

let timer: any;

timer = setTimeout(() => {
  console.log("timer");
});

clearTimeout(timer);

timer = delayed;

console.log(timer);

console.log("compile");

// const num11 = 6;
 