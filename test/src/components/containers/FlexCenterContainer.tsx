import React, { ReactNode } from 'react';
import { Box } from '../mui';

export const FlexCenterContainer: React.FC<{
    children: ReactNode;
}> = ({ children }) => {
    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
            {children}
        </Box>
    );
}