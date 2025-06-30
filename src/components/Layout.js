import './Layout.css';
import ProductTemplates from './LayoutComponents/ProductTemplates';
import DeviceTemplates from './LayoutComponents/DeviceTemplates';
import DataObjectTemplates from './LayoutComponents/DataObjectTemplates';
import SignlTemplates from './LayoutComponents/SignalTemplates';
import { useState } from 'react';

function Layout(json) {
  const [listOfObjects, setListOfObjects] = useState();
  console.log("listOfObjects  json.Data",json.jsonData);
  console.log("listOfObjects  ",{listOfObjects});
  if(Object.keys(json.jsonData).length > 0){
    var fileForDeviceTemplates = [];
    var fileForDataObjectTemplates = [];
    var fileForSignalTemplates = [];
    // здесь происходит создание массива для получения данных для создания шаблонов устройства
    for (const [key, value] of Object.entries(json.jsonData)) {
      if(typeof(value) == typeof({})){
        fileForDeviceTemplates.push(value);
        for (const [key2, value2] of Object.entries(value)) {
          if(typeof(value2) == typeof({})){
            fileForDataObjectTemplates.push(value2);
            for (const [key3, value3] of Object.entries(value2)) {
              if(typeof(value3) == typeof({})){
                fileForSignalTemplates.push(value3)
              }
            }
          }
        }
      }
    }

  }
  return (
    <div className="row">
      {<ProductTemplates file={json}/>}
      {<DeviceTemplates file = {fileForDeviceTemplates} hideFiles={setListOfObjects}/>}
      {<DataObjectTemplates file={fileForDataObjectTemplates}/>}
      {<SignlTemplates file={fileForSignalTemplates}/>}
    </div>
  );
}

export default Layout;