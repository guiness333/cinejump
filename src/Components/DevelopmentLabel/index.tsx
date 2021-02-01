import React from "react";
import { ProductionText } from '../Text/index';
export function DevelopmentLabel() {
  return (
    <>
      {process.env.REACT_APP_IS_PRODUCTION === 'false' && 
      <ProductionText>Ambiente de Desenvolvimento</ProductionText>
      }
    </>
  );
}