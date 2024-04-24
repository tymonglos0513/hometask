import React from 'react'
import { TextAlign } from '../../utils/types';
import { Typography } from '../mui';

export const Text2: React.FC<{
    text: string;
    align: TextAlign;
}> = ({ text, align }) => {
    return (
        <Typography variant={'body1'} fontWeight={400} align={align} margin={0} paddingY={'0.125rem'} gutterBottom>
            {text}
        </Typography>
    );
}