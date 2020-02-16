import React from 'react';
import './App.css';
import data from './char.json';

function showResult (selectedTags) {
  let jsonData = JSON.parse(JSON.stringify(data));//변수가 포인터로 되는것을 방지
  let temp = [];

  if(selectedTags.tags.indexOf("고급특별채용") === -1){ //고급 특별채용 태그가 선택 되지 않으면 6성캐릭 표시X
    jsonData = jsonData.splice(7);
  }

  jsonData.forEach(element => { //70개의 캐릭터들의 태그중 선태된 태그와 같은 태그가 있다면 push
    for(let i=0; i<selectedTags.tags.length; i++){//선택된 태그 수 만큼 반복
      let currentTagIndex = element.tag.indexOf(selectedTags.tags[i])
      if(currentTagIndex !== -1){//element의 태그와 선택된 태그에 공통된 태그가 있다면 실행
        console.log(selectedTags.tags[i]);
        if(temp[temp.length-1]  && temp[temp.length-1].name === element.name){//temp의 중복값 push 방지
          temp[temp.length-1].selectedTagsCount++; //일치한 태그 수 만큼 +된다
          temp[temp.length-1].tag[currentTagIndex] = '<span style="color:red">'+selectedTags.tags[i]+'</span>';//선택된 태그와 캐릭터 태그와 같으면 글자색 붉은색으로 설정
          continue;
        }
        temp.push(element);
        temp[temp.length-1].selectedTagsCount++; //일치한 태그 수 만큼 +된다
        temp[temp.length-1].tag[currentTagIndex] = '<span style="color:red">'+selectedTags.tags[i]+'</span>';//선택된 태그와 캐릭터 태그와 같으면 글자색 붉은색으로 설정
      }
    }
  });
  return temp;
}

function ShowOper(props) {
  let result = showResult(props);
  result.sort((a,b) => {
    return a.selectedTagsCount > b.selectedTagsCount ? -1 : 1;
  }); //result배열의 선택된 태그 값에 따라 내림차순으로 정렬
  return (
    <table className="table" border = "1">
      <tr>
        <th>태그 일치수</th>
        <th>레어도</th>
        <th>이름</th>
        <th>태그</th>
      </tr>
      {result.map( data => {
        return (
          <tr>
            <td>{data.selectedTagsCount}</td>
            <td className="rare">{data.rare}☆</td>
            <td>{data.name}</td>
            <td dangerouslySetInnerHTML={ {__html: data.tag}}/>
          </tr>
          )
      })}
    </table>
  );
}

export default ShowOper;