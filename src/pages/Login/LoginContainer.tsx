import styled from 'styled-components';

export const Container = styled('div')<{width: String}>`
    display: inline-block;
    width: ${props => String(props.width)};
    height: 800px;
    position: relative;
`;