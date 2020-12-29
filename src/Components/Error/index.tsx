import React from "react";
import {ErrorMessage} from './styles';
export const Error = (props: any) => {
return <ErrorMessage data-testid='errorMessage'>{props.text}</ErrorMessage>;
};
