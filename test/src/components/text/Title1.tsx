import React from 'react'
import { TextAlign } from '../../utils/types';
import { Typography } from '../mui';

export const Title1: React.FC<{
    title: string;
    align: TextAlign;
}> = ({ title, align }) => {
    return (
        <Typography variant={'h4'} fontWeight={700} align={align} marginY={0} paddingY={'0.5rem'} gutterBottom>
            {title}
        </Typography>
    );
}