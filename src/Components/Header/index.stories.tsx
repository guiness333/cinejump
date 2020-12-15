import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react/types-6-0';

import Header from './index';

export default {
    title: 'Header',
    component: Header,
};

const Template: Story<ComponentProps<typeof Header>> = () => (
    <Header />
);

export const FirstStory = Template.bind({});
FirstStory.args = {};