  
import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import MemberCard from "./components/MemberCard";
import styled from 'styled-components';

const CardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px;
`;

function App() {
  const [members, setMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState();

  const addMember = member => {
    setMembers([...members, member]);
  };

  const editMember = (updates) => {
    if(typeof updates === 'object') {
      let target = members.indexOf(memberToEdit);
      members[target] = {...memberToEdit, ...updates};
      setMembers([...members]);
      setMemberToEdit();
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>FORM STUFF</h1>
        {(() => {
          if(memberToEdit) return <Form setter={editMember} memberToEdit={memberToEdit} />;
          else return <Form setter={addMember} />;
        })()}
        <CardsDiv>
          {members.map(member => {
            return <MemberCard key={member.email} member={member} setEdit={setMemberToEdit} />;
          })}
        </CardsDiv>
      </header>
    </div>
  );
}

export default App;
