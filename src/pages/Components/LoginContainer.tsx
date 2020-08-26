import styled from 'styled-components';

export const Container = styled('div')<{width: String}>`
    width: ${props => String(props.width)};
    height: 1000px;
    position: relative;
    float: left;
`;