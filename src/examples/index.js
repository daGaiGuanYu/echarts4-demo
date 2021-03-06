import lineOption1 from './line/option1';
import lineOption2 from './line/option2';
import lineOption3 from './line/option3';
import lineOption4 from './line/option4';

import barOption1 from './bar/option1';
import barOption2 from './bar/option2';
import barOption3 from './bar/option3';
import barOption4 from './bar/option4';
import barOption5 from './bar/option5';

import mapOption1 from './map/option1';
import mapOption2 from './map/option2';
import mapOption3 from './map/option3';

const list = [];
list.push(lineOption1);
list.push(lineOption2);
list.push(lineOption4);
list.push(lineOption3);

list.push(barOption1);
list.push(barOption5);
list.push(barOption3);
list.push(barOption2);
list.push(barOption4);

list.push(mapOption1);
list.push(mapOption3);
list.push(mapOption2);

const result = {};
list.forEach( item => {
  if(result[item.typeName])
    result[item.typeName].push(item);
  else
    result[item.typeName] = [item];
});

export default result;
