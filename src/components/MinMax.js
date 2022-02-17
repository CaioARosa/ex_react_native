import React from "react";
import {Text} from 'react-native'
import estilo from "./estilo";

export default props =>
    <Text style={estilo.txtG}>
      O texto {props.max} é maior que o valor {props.min}
    </Text>

