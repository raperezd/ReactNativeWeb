import React from "react";
import { Text } from 'react-native';

const Span = props => (
     <Text {...props}>
        {props.children}
     </Text>
)

export default Span;