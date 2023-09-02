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
import BannerProfile from "../Assets/BannerProfile.png";
import { BorderColor } from '@mui/icons-material';

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
            <div className="aboutProfile-background-image-container">
                <img src={BannerProfile} alt="" />
            </div>
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
                                        padding: '4px',
                                    }}
                                >
                                    <label>Nombre</label>
                                    <TextField
                                        fullWidth
                                        required
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        sx={{
                                            borderRadius: '15px',
                                            backgroundColor: '#F2F3F4',
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'transparent',
                                                },
                                            },
                                            '& .MuiInputBase-input': {
                                                color: '#9A9796',
                                            },
                                        }}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        display: 'flex',
                                        padding: '4px',
                                        borderRadius: '8px',
                                    }}
                                >
                                    <div style={{ marginRight: '8px' }}>
                                        <label>Dirección</label>
                                        <TextField
                                            fullWidth
                                            required
                                            value={direccion}
                                            onChange={(e) => setDireccion(e.target.value)}
                                            sx={{
                                                borderRadius: '15px',
                                                backgroundColor: '#F2F3F4',
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: 'transparent',
                                                    },
                                                },
                                                '& .MuiInputBase-input': {
                                                    color: '#9A9796',
                                                },
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Barrio</label>
                                        <TextField
                                            fullWidth
                                            required
                                            value={barrio}
                                            onChange={(e) => setBarrio(e.target.value)}
                                            sx={{
                                                borderRadius: '15px',
                                                backgroundColor: '#F2F3F4',
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: 'transparent',
                                                    },
                                                },
                                                '& .MuiInputBase-input': {
                                                    color: '#9A9796',
                                                },
                                            }}
                                        />
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        padding: '4px',
                                        borderRadius: '8px',
                                    }}
                                >
                                    <label>Correo Electrónico</label>
                                    <TextField
                                        fullWidth
                                        required
                                        value={correo}
                                        onChange={(e) => setCorreo(e.target.value)}
                                        sx={{
                                            borderRadius: '15px',
                                            backgroundColor: '#F2F3F4',
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'transparent',
                                                },
                                            },
                                            '& .MuiInputBase-input': {
                                                color: '#9A9796',
                                            },
                                        }}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        display: 'flex',
                                        padding: '4px',
                                        borderRadius: '8px',
                                    }}
                                >
                                    <div style={{ marginRight: '8px' }}>
                                        <label>Teléfono</label>
                                        <TextField
                                            fullWidth
                                            required
                                            value={telefono}
                                            onChange={(e) => setTelefono(e.target.value)}
                                            sx={{
                                                borderRadius: '15px',
                                                backgroundColor: '#F2F3F4',
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: 'transparent',
                                                    },
                                                },
                                                '& .MuiInputBase-input': {
                                                    color: '#9A9796',
                                                },
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Fecha de nacimiento</label>
                                        <TextField
                                            fullWidth
                                            required
                                            value={edad}
                                            onChange={(e) => setEdad(e.target.value)}
                                            sx={{
                                                borderRadius: '15px',
                                                backgroundColor: '#F2F3F4',
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: 'transparent',
                                                    },
                                                },
                                                '& .MuiInputBase-input': {
                                                    color: '#9A9796',
                                                },
                                            }}
                                        />
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        padding: '4px',
                                        borderRadius: '8px',
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
                                        sx={{
                                            borderRadius: '15px',
                                            backgroundColor: '#F2F3F4',
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'transparent',
                                                },
                                            },
                                            '& .MuiInputBase-input': {
                                                color: '#9A9796',
                                            },
                                        }}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        padding: '4px',
                                        borderRadius: '8px',
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
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <button type='submit' disabled={!isFormValid()} className="secondary-button">Enviar</button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default FormSection;
