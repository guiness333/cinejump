import styled from 'styled-components';

export const Container = styled('div')<{width: String; height?: String}>`
    width: ${props => String(props.width)};
    height: ${props => String(props.height)}px;
    position: relative;
    float: left;
`;