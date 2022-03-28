import React from 'react';
import './App.css';
import {IonApp, IonCol, IonContent, IonGrid, IonPage, setupIonicReact} from "@ionic/react";
import { Header } from "./ components/Header";
import { Post } from "./ components/Post";
import './index.css';

// Required to get the app working!!!
setupIonicReact()

function App() {
    const introM = "Founded in 1829 on an isthmus between Lake Monona " +
        "and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.";
  return (
    <IonApp className="App">
        <IonPage>
            <IonContent fullscreen>
                <Header/>
                <IonGrid>
                    <IonCol>
                        <Post imgUrl="./mock.jpg"
                              title="Madison, WI"
                              introduction={ introM } />
                    </IonCol>
                    <IonCol>
                        <Post imgUrl="./mock.jpg"
                              title="Madison, WI"
                              introduction={ introM } />
                    </IonCol>
                </IonGrid>
            </IonContent>
        </IonPage>
    </IonApp>
  );
};

export default App;
