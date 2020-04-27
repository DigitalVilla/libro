import React from 'react'

export default React.memo(function Filter(props) {
    const {
        options,
        filter,
        setFilter,
        category,
        setCategory,
        isAscending,
        setAscending

    } = props

    const handleChange = (event) => {
        const value = event.target.value

        switch (event.target.name) {
            case 'selectCategory':
                setFilter('')
                return setCategory(value)
            case 'inputFilter':
                return setFilter(value)
            case 'selectAscending':
                return setAscending(value === 'true')
            default:
                break;
        }
    };

    const handleReset = () => {
        setFilter('')
    }

    const styledCategory = category.split('_').map(el => el.substr(0, 1).toUpperCase() + el.substring(1)).join(' ')

    return (
        <div className="form-controller">
            <div class="customField with-clear-button">
                <label class="sr-only" htmlFor="input-filter">{`Enter term to filter "${styledCategory}":`}</label>
                <input id="input-filter"
                    name="inputFilter"
                    value={filter}
                    onChange={handleChange}
                    placeholder={`Filter "${styledCategory}"`}
                />
                <button onClick={handleReset} type="button" aria-label="clear text">x</button>
            </div>
            <div class="customSelect spacer" style={{minWidth: '170px'}}>
                <label class="sr-only" htmlFor="select-category">Select category</label>
                <select id="select-category" name="selectCategory" value={category} onChange={handleChange}>
                    {options.map((opt, i) => <option key={i} value={opt.key}>{opt.value}</option>)}
                </select>
            </div>
            <div class="customSelect" style={{minWidth: '80px'}}>
                <label class="sr-only" htmlFor="select-category">Select Sort order</label>
                <select id="select-category" name="selectAscending" value={isAscending} onChange={handleChange}>
                    <option value="true">Asc</option>
                    <option value="false">Des</option>
                </select>
            </div>
        </div>
    )
})