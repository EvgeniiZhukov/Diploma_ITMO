export function jsonToScreen (json) {
    for (const [key, value] of Object.entries(json)) {
        // ProductTemplates();
        // show(container, value);
        // <ProductTemplates text="Т001" color='red'/>
      
      // Примеры действий с элементом:
        console.log(value);
        console.log(`${key}: ${value}`);
        if(typeof(value) == typeof({})){
            jsonToScreen(value);
        }
    }
}
