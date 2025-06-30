export function templateToJson (json, template) {
    for (var i = 0; i < template.childNodes.length; i++){
        if (template.childNodes[i].nodeName !== '#text' && template.childNodes[i].childNodes.length === 1){
            json[template.childNodes[i].id] = template.childNodes[i].innerHTML;
        }
        else if(template.childNodes[i].nodeName !== '#text' && template.childNodes[i].childNodes.length > 1){
            if(template.childNodes[i].id === "signal.attributes"){
                json[template.childNodes[i].id] = template.childNodes[i].innerHTML;
            }
            else{
                json[template.childNodes[i].childNodes[1].innerHTML] = {};
                templateToJson (json[template.childNodes[i].childNodes[1].innerHTML], template.childNodes[i]);
            }
        }
    }
    return json;
}