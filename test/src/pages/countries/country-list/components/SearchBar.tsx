import React from 'react';
import { Paper, InputBase, IconButton } from '../../../../components/mui';
import { SearchIcon } from '../../../../components/icon';

interface Props {
    handleSearch: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

const SearchBar: React.FC<Props> = (props: Props) => {
    const { handleSearch } = props
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                onChange={handleSearch}
                placeholder="Search Countries"
                inputProps={{ 'aria-label': 'search countries' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar