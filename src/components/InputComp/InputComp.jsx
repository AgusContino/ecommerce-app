import './style.scss'

export default function InputComp(props) {

   const { name, label, value, onChange, type } = props

   return (

      <div className='inputComp'>

         <label htmlFor={name}>{label}</label>
         <input name={name} type={type} value={value} onChange={onChange}/>

      </div>

   )

}