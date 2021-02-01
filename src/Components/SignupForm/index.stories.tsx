import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react/types-6-0';

import {SignupForm} from './index';

export default {
    title: 'Signup Form',
    component: SignupForm,
};

const Template: Story<ComponentProps<typeof SignupForm>> = () => (
    <SignupForm />
);

export const FirstStory = Template.bind({});
FirstStory.args = {};