export function jsonToScreen (json) {
    for (const [key, value] of Object.entries(json)) {
        console.log(value);
        console.log(`${key}: ${value}`);
        if(typeof(value) == typeof({})){
            jsonToScreen(value);
        }
    }
}
