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
export const TrailerContainer = styled("div")`
    padding-top: 10px;
    margin-right: auto;
    margin-left: auto;
    background-color: #80BCB8;
    width: 100%;
    display: inline-block;
`;
export const Videos = styled("div")`
    display: flex;
    margin: 0 auto;
    width: 1010px;
    scrollbar-track-color: #80BCB8;
    scrollbar-color: #80BCB8;
    overflow-x: scroll;
`;
export const Trailers = styled("div")`
    margin: 50px;
`;
export const VideosContainer = styled("div")`

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
