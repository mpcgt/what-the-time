export function what_time() {
    'use strict';

        const date = new Date();                    
        const hour = date.getHours();
        const minutes = date.getMinutes();

    console.log(`The time is ${hour}:${minutes}.`);
}