import React from 'react';
import styled from 'styled-components';

const MemberDiv = styled.div`
  border: 1px solid white;
  padding: 5px;
  margin: 5px;
  width: 30%;
  
`;

export default function MemberCard(props) {
  let member = props.member;
  let setEdit = props.setEdit;

  return (
      <MemberDiv>
          <h2>{member.username}</h2>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
        <button onClick={() => setEdit(member)}>Edit</button>
      </MemberDiv>
  );
}