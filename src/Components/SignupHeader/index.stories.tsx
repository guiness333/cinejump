import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react/types-6-0';

import {SignupHeader} from './index';

export default {
    title: 'Signup Header',
    component: SignupHeader,
};

const Template: Story<ComponentProps<typeof SignupHeader>> = () => (
    <SignupHeader />
);

export const FirstStory = Template.bind({});
FirstStory.args = {};