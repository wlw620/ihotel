import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const HomeTabComponent = () => {
    return (
        <CSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionAppear={true} transitionAppearTimeout={500}>
            <section className="flex idx_con">
                <div className="hotel">
                    <div className="idx_citysug">
                        <form action="/hotelwxqb/0101/nlist/" id="find" method="get">
                            <ul className="m_lst idx_city_hotel">
                                <li className="item myposi">
                                    <div className="flex city_selector" data-cityname="" data-cityid="">延安东路西藏中路公交站</div>
                                    <span className="my-posi">
                                        <i className="ic ic_posi posi"></i>我的附近</span>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </section>
        </CSSTransitionGroup>
    )
}

export default HomeTabComponent;
