import React from 'react';

import { configure, shallow  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MissionSpaceX from './MissionsSpaceX';
import Years from '../components/Years/Years';
import {Missions} from '../components/Missions/Missions';
import { Route } from 'react-router-dom';

configure({adapter: new Adapter()});

describe('<MissionSpaceX />', () => {
    let wrapper;
    let pathMap = {};
    beforeEach(() => {
        wrapper = shallow(<MissionSpaceX />);
        pathMap = wrapper.find(Route).reduce((pathMap, route) => {
            const routeProps = route.props();
            pathMap[routeProps.path] = routeProps.component;
            return pathMap;
          }, {});
    });

    it('should render <Years /> element', () => {
        expect(wrapper.find(Years)).toHaveLength(1);
    });

    it('should render <Missions /> element for "/missions" route', () => {
        expect(pathMap['/missions']).toBe(Missions);
    });
});