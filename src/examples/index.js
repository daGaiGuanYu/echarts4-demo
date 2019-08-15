import lineOption1 from './line/option1';
import lineOption2 from './line/option2';
import lineOption3 from './line/option3';

const list = [];
list.push(lineOption1);
list.push(lineOption2);
list.push(lineOption3);

const result = {};
list.forEach( item => {
  if(result[item.typeName])
    result[item.typeName].push(item);
  else
    result[item.typeName] = [item];
});

export default result;
