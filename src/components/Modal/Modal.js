import React from 'react';
import { Transition, CSSTransition } from "react-transition-group";
import './Modal.css';

const animationTiming = {
    enter: 400,
    exit: 1000
};

const modal = (props) => {
    // const getModalVisibilityClass = (transitionState) => {
    //     let modalVisibilityClass = null;

    //     switch (transitionState) {
    //         case 'exiting':
    //             modalVisibilityClass = 'modal--closed'
    //             break;
    //         case 'entering':
    //             modalVisibilityClass = 'modal--opened'
    //             break;
    //     }

    //     return modalVisibilityClass;
    // }

    return (
        // <Transition
        //     in={props.show}
        //     timeout={animationTiming}
        //     mountOnEnter
        //     unmountOnExit
        // >
        //     {
        //         transitionState => {
        //             return (
        //                 <div className={`modal ${getModalVisibilityClass(transitionState)}`}>
        //                     <h1>A Modal</h1>
        //                     <button className="Button" onClick={props.closed}>Dismiss</button>
        //                 </div>
        //             )
        //         }
        //     }
        // </Transition>

        // This is the easiest way to use transitions! 
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={props.show}
            timeout={animationTiming}
            classNames={{
                enter: '',
                enterActive: 'modal--opened',
                exit: '',
                exitActive: 'modal--closed'
            }}
        >
            <div className='modal'>
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        </CSSTransition>

    );
}

export default modal;