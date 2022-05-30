import {MyLabel} from '../../components/MyLabel'
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: {control: 'select', options: ['normal', 'h1', 'h2', 'h3']},
        color: {control: 'select', options: ['primary', 'secondary', 'tertiary']}
    }
} as ComponentMeta<typeof MyLabel>

const Template : ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} /> 

export const Basic = Template.bind({})
Basic.args = {
    size:'normal',
    allCaps: false
};
export const AllCaps = Template.bind({});
AllCaps.args={
    size: 'normal',
    allCaps: true
}
export const Secondary = Template.bind({});
Secondary.args ={
    size: 'normal',
    color: 'secondary' //priimary | secondary | tertiary
}
export const Tertiary = Template.bind({});

Tertiary.args={
    size:'normal',
    color: 'tertiary'
}

export const CustomBackgroundColor = Template.bind({});

CustomBackgroundColor.args={
    size:'normal',
    color: 'tertiary',
    backgroundColor: 'red'
}