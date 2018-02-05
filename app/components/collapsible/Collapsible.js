import React from 'react';
import { AccordionItem, AccordionToggle, AccordionContent } from 'framework7-react';
import './Collapsible.scss';

export default class Collapsible extends React.Component {
    render() {
        return (
            <AccordionItem expanded={this.props.expanded}>
                <AccordionToggle>
                    <span className='m-accordion-title'>{this.props.title}</span><i className="m-icon f7-icons">chevron_down</i></AccordionToggle>
                <AccordionContent className="bz-accordion--content">
                    {this.props.children}
                </AccordionContent>
            </AccordionItem> 
        );
    }
}