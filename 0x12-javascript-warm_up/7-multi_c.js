#!/usr/bin/node
const cFun = 'C is fun';
const x = process.argv[2];
for (let i = 0; i < x; i++) {
    console.log(cFun);
}
