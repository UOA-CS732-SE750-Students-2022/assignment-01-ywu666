import {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonToggle,
    IonLabel, IonItem, IonButtons
} from "@ionic/react"
import React, {useEffect, useState} from 'react';
import "./Header.css"

export const Header: React.FC = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(prefersDark);

    return (
        <IonHeader translucent>
            <IonToolbar color="primary" className='dark'>
                <IonButtons slot='primary'>
                    <IonLabel>Dark Mode</IonLabel>
                    <IonToggle
                        id="themeToggle"
                        color='light'
                        onIonChange={ (e) => {
                            console.log(e.detail.checked);
                            document.body.classList.toggle('dark');
                            console.log(document.body.classList);
                        }}/>
                </IonButtons>
                <IonTitle>Ionic Demo</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
};
