import styled from 'styled-components';

export const MoviesRow = styled("div")<{scroll: String}>`
    margin-right: auto;
    margin-left: auto;
    width: 1010px;
    overflow: scroll;
    overflow-y: hidden;
    overflow-x: ${(props) => String(props.scroll)};
    display: flex;

`;
export const MoviesColumn = styled("div")`
    display: inline-block;
`;
export const MovieItem = styled("img")<{width: Number; height: Number; align?: String; Title?: String}>`
    display: ${(props) => String(props.align)};
    width: ${(props) => Number(props.width)}px;
    height: ${(props) => Number(props.height)}px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
`;
