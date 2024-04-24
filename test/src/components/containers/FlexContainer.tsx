import React, { ReactNode } from 'react';
import { Box } from '../mui';

export const FlexContainer: React.FC<{
    children: ReactNode;
}> = ({ children }) => {
    return (
        <Box display={'flex'} alignItems={'center'}>
            {children}
        </Box>
    );
}