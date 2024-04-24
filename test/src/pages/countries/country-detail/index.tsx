import React from 'react';
import { Container, Card, CardHeader, IconButton, CardMedia, CardContent } from '../../../components/mui'
import { NormalCountryFlag } from '../../../components/countryflag';
import { MenuIcon } from '../../../components/icon';
import { Link } from 'react-router-dom';
import { Text3, Text2, Text1 } from '../../../components/text';
import { useParams } from 'react-router-dom';
import { useGetCountryDetailById } from '../../../apis/country/hooks';


const CountryDetail: React.FC = () => {
    const { id } = useParams();
    const { data: country } = useGetCountryDetailById(id??"");
    return (
        <Container maxWidth="md" sx={{mt: 5}}>
            <Card sx={{ width: "100%" }}>
                <CardHeader
                avatar={
                    <NormalCountryFlag countryCode={country?.data.countrycode??""} />
                }
                action={
                    <Link to='/country'>    
                        <IconButton aria-label="settings">
                            <MenuIcon />
                        </IconButton>
                    </Link>
                }
                title={country?.data.name}
                subheader={country?.data.capital}
                />
                <CardMedia
                component="img"
                height="194"
                image="/buildings-647400_1280.jpg"
                alt="Paella dish"
                />
                <CardContent>
                    <Text3 text={"This is the brief introduction of the " + country?.data.name + " with population, languages, timezone, and currency."} align="left" />
                </CardContent>
                <CardContent>
                    <Text1 text="Population:" align="left" />
                    <Text2 text={"Total population of "  + country?.data.name+ " is over " + country?.data.population + "."} align="left" />
                    <Text1 text="Languages:" align="left" />
                    <Text2 text={country?.data.languages??""} align="left" />
                    <Text1 text="Timezone:" align="left" />
                    <Text2 text={"Timezone of " + country?.data.name + " is " + country?.data.timezone + "."} align="left" />
                    <Text1 text="Currency:" align="left" />
                    <Text2 text={"One of the most popular currency of " + country?.data.name + " is " + country?.data.currency + "."} align="left" />
                </CardContent>
            </Card>
        </Container>
    )
}

export default CountryDetail