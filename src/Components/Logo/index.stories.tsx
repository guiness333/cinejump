import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react/types-6-0';

import {Logo} from './index';

export default {
    title: 'Logo',
    component: Logo,
};

const Template: Story<ComponentProps<typeof Logo>> = (args) => (
    <Logo {...args}/>
);

export const FirstStory = Template.bind({});
FirstStory.args = {color: '#000'};