/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
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
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, backgroundColor }: MyLabelProps) => JSX.Element;
export default MyLabel;
