import React, { useState } from 'react';
import {
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    FormGroup,
    Container,
    Grid,
    Paper,
} from '@mui/material';
import Navbar from '../Components/Navbar';
import "./Styles/FormSection.css";
import Footer from '../Components/Footer';

const FormSection = () => {
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [barrio, setBarrio] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [edad, setEdad] = useState('');
    const [aceptaInformacion, setAceptaInformacion] = useState(false);
    const [tuAporte, setTuAporte] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes enviar los datos a la API o realizar las acciones necesarias
        console.log({
            nombre,
            direccion,
            barrio,
            correo,
            telefono,
            edad,
            aceptaInformacion,
            tuAporte,
        });
    };

    const isFormValid = () => {
        return (
            nombre &&
            direccion &&
            barrio &&
            correo &&
            telefono &&
            edad &&
            aceptaInformacion &&
            tuAporte
        );
    };

    return (
        <div className='formSection-container'>
            <Navbar />
            <div className='formSection-container_form'>
                <h1 className='primary-title'> TE INVITAMOS A APORTAR EN EL DESARROLLO DE NUESTRA TUNJA QUE MERECE MÁS!</h1>
                <p className='primary-text'>Sumate al aporte de ideas que reflejaran una visión conjunta para construir lograr que TUNJA SEA MÁS.</p>
                <Container maxWidth="sm">
                    <form onSubmit={handleFormSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        padding: '8px',
                                        borderRadius: '8px',
                                        background: '#f2f2f2',
                                    }}
                                >
                                    <label>Nombre</label>
                                    <TextField
                                        fullWidth
                                        required
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        display: 'flex',
                                        padding: '8px',
                                        borderRadius: '8px',
                                        background: '#f2f2f2',
                                    }}
                                >
                                    <div style={{ marginRight: '8px' }}>
                                        <label>Dirección</label>
                                        <TextField
                                            fullWidth
                                            required
                                            value={direccion}
                                            onChange={(e) => setDireccion(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label>Barrio</label>
                                        <TextField
                                            fullWidth
                                            required
                                            value={barrio}
                                            onChange={(e) => setBarrio(e.target.value)}
                                        />
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        padding: '8px',
                                        borderRadius: '8px',
                                        background: '#f2f2f2',
                                    }}
                                >
                                    <label>Correo Electrónico</label>
                                    <TextField
                                        fullWidth
                                        required
                                        value={correo}
                                        onChange={(e) => setCorreo(e.target.value)}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        display: 'flex',
                                        padding: '8px',
                                        borderRadius: '8px',
                                        background: '#f2f2f2',
                                    }}
                                >
                                    <div style={{ marginRight: '8px' }}>
                                        <label>Teléfono</label>
                                        <TextField
                                            fullWidth
                                            required
                                            value={telefono}
                                            onChange={(e) => setTelefono(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label>Edad</label>
                                        <TextField
                                            fullWidth
                                            required
                                            value={edad}
                                            onChange={(e) => setEdad(e.target.value)}
                                        />
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        padding: '8px',
                                        borderRadius: '8px',
                                        background: '#f2f2f2',
                                    }}
                                >
                                    <label>Tu aporte</label>
                                    <TextField
                                        multiline
                                        rows={4}
                                        fullWidth
                                        required
                                        value={tuAporte}
                                        onChange={(e) => setTuAporte(e.target.value)}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        padding: '8px',
                                        borderRadius: '8px',
                                        background: '#f2f2f2',
                                    }}
                                >
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={aceptaInformacion}
                                                    onChange={(e) => setAceptaInformacion(e.target.checked)}
                                                    required
                                                />
                                            }
                                            label="Acepto recibir información acerca de la campaña según los datos registrados en este formulario."
                                        />
                                    </FormGroup>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <button  type='submit' disabled={!isFormValid()} className="secondary-button">Enviar</button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </div>
            <Footer/>                                
        </div>
    );
};

export default FormSection;
