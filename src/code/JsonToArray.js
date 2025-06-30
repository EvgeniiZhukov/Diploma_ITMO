//Переводит json в массив для более простого вывода в компонентах
export function jsonToArray (json) {
    const array = [];
    // console.log("JSON TO ARRAY: ",json);
    for (const [key, value] of Object.entries(json)) {
        // console.log("JSON TO ARRAY TYPE:",typeof(value));
        // console.log('(typeof(value) == Object):', (typeof(value) == 'object'))
        
        if(typeof(value) !== 'object'){
            array.push([key, value]);
        }
        // if(typeof(value) == 'object'){
        //     array.push(jsonToArray (value));
        // }
    }
    return array;
}
