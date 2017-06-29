import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const TourTabComponent = () => {
    return (
        <CSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionAppear={true} transitionAppearTimeout={500}>
            <div>国际</div>
        </CSSTransitionGroup>
    )
}

export default TourTabComponent;
