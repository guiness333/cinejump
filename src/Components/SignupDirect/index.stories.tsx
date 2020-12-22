import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react/types-6-0';

import {SignupDirect} from './index';

export default {
    title: 'Signup Redirect',
    component: SignupDirect,
};

const Template: Story<ComponentProps<typeof SignupDirect>> = () => (
    <SignupDirect />
);

export const FirstStory = Template.bind({});
FirstStory.args = {};