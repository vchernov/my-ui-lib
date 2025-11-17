import type {Meta, StoryObj} from '@storybook/react-vite';
import {LoadingBar} from './LoadingBar';

const meta: Meta<typeof LoadingBar> = {
    title: 'Components/LoadingBar',
    component: LoadingBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoadingBar>;

export const Default: Story = {};
