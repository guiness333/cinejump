import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react/types-6-0';

import {LoginForm} from './index';

export default {
    title: 'Login Form',
    component: LoginForm,
};

const Template: Story<ComponentProps<typeof LoginForm>> = () => (
    <LoginForm />
);

export const FirstStory = Template.bind({});
FirstStory.args = {};