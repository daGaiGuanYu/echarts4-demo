import lineOption1 from './line/option1';

const list = [];
list.push(lineOption1);

const result = {};
list.forEach( item => {
  if(result[item.typeName])
    result[item.typeName].push(item);
  else
    result[item.typeName] = [item];
});

export default result;
