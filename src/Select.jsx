const Select = ({ options, defaultOption, stateValue, stateSet, selectId }) => {
  return (
    <label htmlFor={selectId}>
      {selectId}
      <select
        id={selectId}
        value={stateValue}
        disabled={options.length < 1}
        onChange={e => {
          stateSet(e.target.value)
        }}
      >
        <option>{defaultOption}</option>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

export default Select
