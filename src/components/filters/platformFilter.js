import React from 'react';

const PlatformFilter = ({platforms, changeFilter}) => {

    const filterOptions = platforms.map((filter, index) => <option key={index} value={filter}>{filter}</option>)

    return (
        <select name="platformFilter" onChange={changeFilter}>
            <option value=''>All</option>
            {filterOptions}
        </select>
    );
}

export default PlatformFilter;