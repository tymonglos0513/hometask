import React, { ReactNode } from 'react';
import { Box } from '../mui';

export const GridContainer: React.FC<{
    children: ReactNode;
}> = ({ children }) => {
    return (
        <Box display={'grid'} gridTemplateColumns={'1fr 1fr'} gap={'1.5rem'}>
            {children}
        </Box>
    );
}