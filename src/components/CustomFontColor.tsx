import './myLabel.css'

export interface CustomFontColorProps{
   /**
   * Mesagge to show
   */
  label: string,
  /**
   * Size 
   */
  size: 'normal'|'h1'|'h2'|'h3',

  /**
   * color 
   */

  color: 'primary' | 'secondary' | 'tertiary',

  allCaps: boolean

}

export const CustomFontColor = ({label= 'No label', size= 'h1', color='primary', allCaps= false}: CustomFontColorProps) => {
  return (
    <span className={`label ${size} text-${color}`}>
        {allCaps ? label.toLocaleUpperCase() : label}
    </span>
  )
}

export default CustomFontColor

//customFontColor
//fontColor: #5517ac
//size: h1 por defecto