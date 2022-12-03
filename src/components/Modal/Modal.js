import React from 'react';
import { Transition } from "react-transition-group";
import './Modal.css';

const modal = (props) => {
    const getModalVisibilityClass = (transitionState) => {
        let modalVisibilityClass = null;

        switch (transitionState) {
            case 'exiting':
                modalVisibilityClass = 'modal--closed'
                break;
            case 'entering':
                modalVisibilityClass = 'modal--opened'
                break;
        }

        return modalVisibilityClass;
    }

    return (
        <Transition
            in={props.show}
            timeout={300}
            mountOnEnter
            unmountOnExit
        >
            {
                transitionState => {
                    return (
                        <div className={`modal ${getModalVisibilityClass(transitionState)}`}>
                            <h1>A Modal</h1>
                            <button className="Button" onClick={props.closed}>Dismiss</button>
                        </div>
                    )
                }
            }
        </Transition>

    );
}

export default modal;