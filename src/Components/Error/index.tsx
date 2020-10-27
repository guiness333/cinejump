import React from "react";
import {ErrorMessage} from './styles';
export const Error = (props: any) => {
return <ErrorMessage>{props.text}</ErrorMessage>;
};
