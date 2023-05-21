import PropTypes from 'prop-types';

import { Dropdown } from "./Filter.styled";


const Filter = ({ setFilterValue }) => {
    const options = ['Show All', 'Follow', 'Following' ];
    const defaultOption = options[0];
    
    const onFilterChange = (e) => {
        setFilterValue(e.value);
    };

    return(
        <Dropdown options={options} onChange={onFilterChange} value={defaultOption} placeholder="Select an option" />
    );
};

export default Filter;

Filter.propTypes = {
    setFilterValue: PropTypes.func.isRequired,
};