import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react/types-6-0';

import {Footer} from './index';

export default {
    title: 'Footer',
    component: Footer,
};

const Template: Story<ComponentProps<typeof Footer>> = () => (
    <Footer />
);

export const FirstStory = Template.bind({});
FirstStory.args = {};