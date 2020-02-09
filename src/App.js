import React,{useState} from 'react';
import ShowOper from './ShowOper';
import './App.css';

function App() {
  const [selectedTags, setSelectedTags] = useState([]);

  const activeEvent = (e) => {
    let tagIndexNo = selectedTags.indexOf(e.target.classList[0]);
    let tags = [...selectedTags];
    if(tagIndexNo < 0){
      if(selectedTags.length !== 5) { //선택된 태그가 5가 이상일시 선택되지 않는다.
        setSelectedTags([...selectedTags, e.target.classList[0]]);
        e.target.classList.toggle("clicked");
      }
    } else {
      tags.splice(tagIndexNo,1);
      setSelectedTags(tags);
      e.target.classList.toggle("clicked");
    }
  }

  return (
    <div className="App">
      <div className="selectMenu">
        <div className="charRare">
          <p className="신입" onClick={activeEvent}>신입</p>
          <p className="특별채용" onClick={activeEvent}>특별채용</p>
          <p className="고급특별채용" onClick={activeEvent}>고급특별채용</p>
        </div>

        <div className="position">
          <p className="근거리" onClick={activeEvent}>근거리</p>
          <p className="원거리" onClick={activeEvent}>원거리</p>
        </div>

        <div className="class">
          <p className="가드" onClick={activeEvent}>가드</p>
          <p className="디펜더" onClick={activeEvent}>디펜더</p>
          <p className="메딕" onClick={activeEvent}>메딕</p>
          <p className="뱅가드" onClick={activeEvent}>뱅가드</p>
          <p className="서포터" onClick={activeEvent}>서포터</p>
          <p className="스나이퍼" onClick={activeEvent}>스나이퍼</p>
          <p className="스페셜리스트" onClick={activeEvent}>스페셜리스트</p>
          <p className="캐스터" onClick={activeEvent}>캐스터</p>
        </div>

        <div className="skill">
          <p className="감속" onClick={activeEvent}>감속</p>
          <p className="강제이동" onClick={activeEvent}>강제이동</p>
          <p className="누커" onClick={activeEvent}>누커</p>
          <p className="디버프" onClick={activeEvent}>디버프</p>
          <p className="딜러" onClick={activeEvent}>딜러</p>
          <p className="방어형" onClick={activeEvent}>방어형</p>
          <p className="범위공격" onClick={activeEvent}>범위공격</p>
          <p className="생존형" onClick={activeEvent}>생존형</p>
          <p className="서포트" onClick={activeEvent}>서포트</p>
          <p className="소환" onClick={activeEvent}>소환</p>
          <p className="제어형" onClick={activeEvent}>제어형</p>
          <p className="코스트+" onClick={activeEvent}>코스트+</p>
          <p className="힐링" onClick={activeEvent}>힐링</p>
        </div>
      </div>
      {selectedTags.map( tag => (
        <span key={tag}>{tag}</span>
      ))}
      <ShowOper tags = {selectedTags}/>
    </div>
  );
}

export default App;