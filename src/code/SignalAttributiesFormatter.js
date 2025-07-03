export function signalAttributesFormatter(xmlText) {
  let result = [];
  // Создаем временный элемент для парсинга XML
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(`<root>${xmlText}</root>`, 'text/xml');
  // Получаем все элементы item верхнего уровня
  const items = xmlDoc.querySelectorAll('root > item');
  items.forEach(item => {
    const line = {
      id: item.getAttribute('id'),
      value: item.getAttribute('value'),
      type: item.getAttribute('type'),
      item1:{},
      item2:{}
    };
    console.log("item", item);
    const elements = item.querySelectorAll('item');
    line.item1.id=elements[0].getAttribute('id');
    line.item1.value=elements[0].innerHTML;
    line.item2.id=elements[1].getAttribute('id');
    line.item2.value=elements[1].innerHTML;
    result.push(line);
  });
  return result;
}