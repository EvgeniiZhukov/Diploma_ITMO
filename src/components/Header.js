 import './Header.css'
 import {templateToJson} from '../code/TemplateProcessor.js'
//  import { test } from '../code/test.js';


function Header({onFileLoaded}) {

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
            var templateJson = {};
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(e.target.result, "text/xml");
            const template = xmlDoc.documentElement.getElementsByTagName('item')[0];
            templateJson = templateToJson(templateJson, template);
            // var json={};
            // var x = test(json, xmlDoc.documentElement.getElementsByTagName('item')[0]);
            onFileLoaded(templateJson);
    };  
    reader.readAsText(file)
  
  }
  return (
    <div>
      <header>
        <h1>Редактор шаблонов</h1>
        <div>
          <input 
            type="file" 
            accept=".wpt" 
            onChange={handleFileUpload}
          />
        </div>
      </header>
      <p></p>
    </div>
  );
}

export default Header;