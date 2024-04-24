import React from 'react';
import ReactCountryFlag from 'react-country-flag';

interface Props {
    countryCode: string
}

const NormalCountryFlag: React.FC<Props> = (props: Props) => {

    const { countryCode } = props;

    return (
        <ReactCountryFlag countryCode={countryCode} svg />
    )
}

export default NormalCountryFlag