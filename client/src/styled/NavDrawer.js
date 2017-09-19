import React from 'react';
import styled from 'styled-components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

const StayVisible = styled.div`
    positioni: absolute;
    margin-left: ${(props) => (props.open) ? `${props.width}px` : 'none'};
    transition: margin .2s;
`;  // const StayVisible


export const NavToggleButton = (props) => {
    return (
        <StayVisible
            {...props}
        >
            <FloatingActionButton
                onTouchTap={props.toggle}
            >
                <Menu/>
            </FloatingActionButton>
        </StayVisible>
    );  // return
};  // NavToggleButton