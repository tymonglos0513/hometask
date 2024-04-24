import React from 'react'
import { TextAlign } from '../../utils/types';
import { Typography } from '../mui';

export const Title: React.FC<{
    title: string;
    align: TextAlign;
}> = ({ title, align }) => {
    return (
        <Typography variant='h3' align={align} marginBottom={'3rem'} gutterBottom>
            {title}
        </Typography>
    );
}