import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react/types-6-0';

import {LoginHeader} from './index';

export default {
    title: 'Login Header',
    component: LoginHeader,
};

const Template: Story<ComponentProps<typeof LoginHeader>> = () => (
    <LoginHeader />
);

export const FirstStory = Template.bind({});
FirstStory.args = {};