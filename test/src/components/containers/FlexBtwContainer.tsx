import React, { ReactNode } from 'react';
import { Box } from '../mui';

export const FlexBtwContainer: React.FC<{
    children: ReactNode;
}> = ({ children }) => {
    return (
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            {children}
        </Box>
    );
}