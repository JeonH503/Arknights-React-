import React from 'react';
import './App.css';
import data from './char.json';

function showResult (selectedTags) {
  let jsonData = JSON.parse(JSON.stringify(data));//변수가 포인터로 되는것을 방지
  let temp = [];
  jsonData.forEach(element => {
    for(let i=0; i<selectedTags.tags.length; i++){
      let currentTagIndex = element.tag.indexOf(selectedTags.tags[i])
      if(currentTagIndex !== -1){
        if(temp[temp.length-1]  && temp[temp.length-1].name === element.name){
          temp[temp.length-1].tag[currentTagIndex] = '<span style="color:red">'+selectedTags.tags[i]+'</span>';
          continue;
        }
        temp.push(element);
        temp[temp.length-1].tag[currentTagIndex] = '<span style="color:red">'+selectedTags.tags[i]+'</span>';
      }
    }
  });
  return temp;
}

let result = [];
function ShowOper(props) {
  result = showResult(props);
  return (
    <div>
      {result.map( data => {
        return (
          <div>
            <p>{data.name}</p>
            <p dangerouslySetInnerHTML={ {__html: data.tag}}/>
          </div>
          )
      })}
    </div>
  );
}

export default ShowOper;