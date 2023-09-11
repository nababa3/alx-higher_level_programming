#!/usr/bin/node
const sqru = process.argv[2];
if (isNaN(sqru)) {
    console.log('Missing size');
} else {
    for (let x = 0; x < sqru; x++) {
        console.log('X'.repeat(sqru));
    }
}
