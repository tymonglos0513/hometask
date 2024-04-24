import React from 'react'
import { useTheme } from '../../themes';
import { TextAlign } from '../../utils/types';
import { Typography } from '../mui';

export const Text3: React.FC<{
    text: string;
    align: TextAlign;
}> = ({ text, align }) => {
    const theme = useTheme();
    return (
        <Typography variant={'body2'} color={theme.palette.primary.dark} fontWeight={400} align={align} margin={0} paddingY={'0.125rem'} gutterBottom>
            {text}
        </Typography>
    );
}