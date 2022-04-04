import {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonLabel,
    IonButtons
} from "@ionic/react"
import React from 'react';
import "./Header.css"

export const Header: React.FC = () => {
    return (
        <IonHeader translucent>
            <IonToolbar
                color="primary"
                className='dark'>
                <IonButtons slot='primary'>
                    <IonLabel>Dark Mode</IonLabel>
                    <IonToggle
                        id="themeToggle"
                        color='light'
                        onIonChange={ () => {
                            document.body.classList.toggle('dark');
                        }}/>
                </IonButtons>
                <IonTitle>Ionic Demo</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
};
