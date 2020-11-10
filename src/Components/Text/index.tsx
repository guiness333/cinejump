import styled from "styled-components";

export const TextContainter = styled("div")`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0 0 10px 10px;
  position: absolute;
  width: 718px;
  top: 303px;
  max-height: 150px;
`;
export const ProductionText = styled("h1")`
  background-color: red;
  position: absolute;
  overflow: hidden;
  width: 100%;
  text-align: center;
  font-size: 14px;
`
export const TitleText = styled("h1")`
  color: white;
  font-family: "Ubuntu light";
  font-size: 22px;
  padding-top: 20px;
  padding-left: 10px;
  margin-left: 10px;
  margin-bottom: 5px;
`;
export const CategoryText = styled("h1")<{color?: String}>`
    color: ${(props) => props.color};
    font-family: "Ubuntu Light";
    font-size: 18px;
    margin: 0 auto 10px auto;
    width: 1000px;
    
`;
export const DiscriptionText = styled("p")`
  color: white;
  margin-left: 20px;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

`;
