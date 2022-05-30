/// <reference types="react" />
import './myLabel.css';
export interface CustomFontColorProps {
    /**
    * Mesagge to show
    */
    label: string;
    /**
     * Size
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * color
     */
    color: 'primary' | 'secondary' | 'tertiary';
    allCaps: boolean;
}
export declare const CustomFontColor: ({ label, size, color, allCaps }: CustomFontColorProps) => JSX.Element;
export default CustomFontColor;
