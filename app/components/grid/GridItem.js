import React, { Component } from 'react';

import { ListItem, ListItemSwipeoutActions, ListItemSwipeoutButton } from 'framework7-react';

const GridItem = props => (
    <ListItem key={props.id.toString()}
        media={`<img width='35' src='${props.images[0].uri}'>`}
        /* innerStartSlot={<div className='item-title'>
            <div class="col">{props.productName}</div>
            <div class="col">{props.deliverTime}</div>
        </div>}  */
        title={props.productName}
        swipeout link={`/DetailView/${props.id}`} onSwipeoutDeleted={props.deleteRow}>
        <ListItemSwipeoutActions>
            <ListItemSwipeoutButton delete>Delete</ListItemSwipeoutButton>
        </ListItemSwipeoutActions>
    </ListItem>
);
export default GridItem;
