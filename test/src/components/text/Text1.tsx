import React from 'react'
import { TextAlign } from '../../utils/types';
import { Typography } from '../mui';

export const Text1: React.FC<{
    text: string;
    align: TextAlign;
}> = ({ text, align }) => {
    return (
        <Typography variant={'h6'} fontWeight={400} align={align} margin={0} paddingY={'0.25rem'} gutterBottom>
            {text}
        </Typography>
    );
}