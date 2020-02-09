import React from 'react';
import './App.css';
import data from './char.json';

function showResult (selectedTags) {
  let temp = [];
  data.forEach(element => {
    for(let i=0; i<selectedTags.tags.length; i++){
      let currentTagIndex = element.tag.indexOf(selectedTags.tags[i])
      if(currentTagIndex !== -1){
        if(temp[temp.length-1]  && temp[temp.length-1].name === element.name){
          continue;
        }
        temp.push(element);
        temp[temp.length-1].selectedTags = selectedTags.tags;
      }
    }
  });
  return temp;
}

function ShowOper(props) {
  let result = showResult(props);
  console.log(result);
  return (
    <div>
      {result.map( data => {
        return (
          <div>
            <p>{data.name}</p>
            <p>{data.tag}</p>
          </div>
          )
      })}
    </div>
  );
}

export default ShowOper;