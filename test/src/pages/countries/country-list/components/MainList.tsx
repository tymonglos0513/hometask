import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '../../../../components/mui';
import { NormalCountryFlag } from '../../../../components/countryflag';
import { Country } from '../../../../utils/types';
import { Link } from 'react-router-dom';

interface Props {
    countries: Country[],
}

const MainList: React.FC<Props> = (props: Props) => {
    const { countries } = props
    return (
        <>
            <List>
                {
                    countries.map((country, index) => {
                        return (
                            <Link to={"/country/" + country.id} style={{textDecoration: 'none'}} key={index}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                    <ListItemIcon>
                                        <NormalCountryFlag countryCode={country.countrycode} />
                                    </ListItemIcon>
                                    <ListItemText primary={country.name} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        )
                    })
                }
            </List>
        </>
    )
}

export default MainList