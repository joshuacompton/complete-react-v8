const Select = ({ options, defaultOption, value, stateSet, selectId }) => {
  let onChange = e => {
    stateSet(e.target.value)
  }

  let attributes = {
    className: 'search-input grayed-out-disable',
    id: selectId,
    name: selectId,
    disabled: options.length < 1,
  }

  if (value) {
    attributes['value'] = value
  }

  if (stateSet) {
    attributes['onChange'] = onChange
  }

  return (
    <label htmlFor={selectId}>
      {selectId}
      <select {...attributes}>
        <option>{defaultOption}</option>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

export default Select
