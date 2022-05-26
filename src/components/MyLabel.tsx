import './myLabel.css'

export interface MyLabelProps{
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

export const MyLabel = ({label= 'No label', size= 'normal', color='primary', allCaps= false}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`}>
        {allCaps ? label.toLocaleUpperCase() : label}
    </span>
  )
}

export default MyLabel

//customFontColor
//fontColor: #5517ac
//size: h1 por defecto