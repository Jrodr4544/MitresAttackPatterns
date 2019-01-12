import React from 'react';

const DatasourceFilter = ({datasources, changeFilter}) => {
    // debugger
    const filterOptions = datasources.map((filter, index) => <option key={index} value={filter}>{filter}</option>)

    return (
            <select name="datasourceFilter" onChange={changeFilter}> {/* defaultValue='all'> */}
                <option value=''>All</option>
                {filterOptions}
            </select>
    );
}

export default DatasourceFilter;