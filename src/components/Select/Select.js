

const Select = ({ set, options }) => {

    const handleSelect = (e) => {
        set(e.target.value)
    }

    return (
        <select onChange={handleSelect}>
            {
                options.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)
            }
        </select>
    )
}

export default Select