
const Filter = ({category , setCategory}) => {
  return (
    <div>
      <select  value={category} onChange={(e) => setCategory(e.target.value)} >
        <option value="All">All</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="beauty">Beauty</option>
      </select>
    </div>
  )
}

export default Filter
