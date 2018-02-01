import React, { Component } from 'react';

import Collapsible from '../components/collapsible/Collapsible';
import Form from '../components/form/Form';
import Span from '../components/span/Span';
import Grid from '../components/grid/Grid';
import Control from '../components/control/Control';
import ExtendedText from '../components/extendedText/ExtendedText';

class FirstForm extends React.Component {
    render() {
        return (
           <Form> 
                <Collapsible expanded={true} bgColor='#fff' title='Office supplies request' type='title'>
                    <Grid onItemSelected={(item) => navigate('DetailView', { ...item })} />
                    <Control label='If you are requesting an asset replacement, please write down the reason' />
                    <Control label={<Span>Replacement reason</Span>} fontSize={12} bold={true}>
                        <ExtendedText></ExtendedText>
                    </Control>
                </Collapsible>
           </Form>
        );
    }
}

export default FirstForm; 
