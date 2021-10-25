import "./SortSelection.css";

function SortSelection(props) {
    return <select onChange={e => props.onSelectSortingOption(e.target.value)} >
        {
            props.options.map(([optionValue, optionName], i) =>
                <option key={i} value={optionValue}>{optionName}</option>
            )
        }
    </select>
}

export default SortSelection;