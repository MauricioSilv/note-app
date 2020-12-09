import styled from 'styled-components';


export const Container = styled.div`
`;
export const  Header = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 18px 0px 18px;
`;

export const Title = styled.h2`
  font-family: roboto;
  color: #7D7D7D;
`; 
export const BreadCrumb = styled.div`
  /* margin-left: 30px; */
`;
export const TextBread = styled.p`
  max-width: 40px;
  margin-left: 30px;
  font-family: roboto;
  font-size: 14px;
  color: #333;
  `;
export const TextMark = styled.div`
  border: 1px solid #409232;
`;

export const LineBread = styled.div`
  margin-top: -14px;
  width: 100%;
  border: 1px solid #eee;
`; 

export const TitlePublicNotes = styled.p`
  margin-top: 40px;
  margin-left: 20px;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Roboto Slab';
  color: #7d7d7d;
  text-transform: uppercase;
`;