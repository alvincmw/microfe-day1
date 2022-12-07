import React, { createRef, useEffect } from 'react';
import { broadcaster, listenerCreator } from '../../lib/messaging';

const IFrame = (props) => {
    // Create ref
    const ref = createRef();

    useEffect(() => {
        // Subscribe listener 
        listenerCreator(ref.current.contentWindow, (ev) => {
            if(ev.data.type === 'container') {
                console.log(`${props.title}`, ev)
            }  
        });

        //Sending message 
        const _ref = ref && ref.current;
        if(_ref) {
            broadcaster(window, {type: 'child', name: props.title, value: 'Mounted'});
        }
    }, [ref, props.title]);

    useEffect(() => {
        // Add click event listener
        const _ref = ref && ref.current;
        _ref.addEventListener('click', (e) => 
        {
            broadcaster(window, {type: 'child', name: props.title, value: 'Clicked detected'})
        });
    });

    return (
        <iframe title="default" {...props} ref={ref} />
    );
}

export default IFrame;