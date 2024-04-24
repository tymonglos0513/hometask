import React from 'react';
import { FlexCenterContainer } from '../../components/containers';
import { Button, Container } from '../../components/mui'
import { Title } from '../../components/text';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <FlexCenterContainer>
            <Container maxWidth="md" sx={{mt: 5}}>
                <Title title='Welcome! Please click this button' align='center' />
                <Link to='/country'>
                    <Button variant='contained'>
                        Go my task
                    </Button>
                </Link>
            </Container>
        </FlexCenterContainer>
    )
}

export default Dashboard