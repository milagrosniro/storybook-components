import {CustomFontColor} from '../../components/CustomFontColor'
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/CustomFontColor',
    component: CustomFontColor,
    argTypes: {
        size: {control: 'select', options: ['normal', 'h1', 'h2', 'h3']},
        color: {control: 'color', options: ['primary', 'secondary', 'tertiary']}
    }
} as ComponentMeta<typeof CustomFontColor>

const Template : ComponentStory<typeof CustomFontColor> = (args) => <CustomFontColor {...args} /> 

export const Basic = Template.bind({})
Basic.args = {
    
    allCaps: false
};
export const AllCaps = Template.bind({});
AllCaps.args={
    
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