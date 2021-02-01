import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react/types-6-0';

import {Error} from './index';

export default {
    title: 'Error Message',
    component: Error,
};

const Template: Story<ComponentProps<typeof Error>> = (args) => (
    <Error {...args}/>
);

export const FirstStory = Template.bind({});
FirstStory.args = {text:'Error Message Example'};