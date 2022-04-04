import {
    IonCardTitle,
    IonCardContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle
} from "@ionic/react"
import React from 'react';
import "./Header.css"

const postStyle = {
    width: 'fit-content',
    height: 'fic-content',
}

interface PostProps {
    title: string;
    introduction: string;
    imgUrl: string;
}

export const Post: React.FC<PostProps>  = (props: PostProps) => {
    const {
        title,
        introduction,
        imgUrl
    } = props;

    return (
        <>
        <IonCard mode='ios'
                 style={ postStyle }
                 className="postCard">
            <img style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'contain',
                }}
                 src={ imgUrl }/>
                <IonCardHeader>
                    <IonCardSubtitle>Destination</IonCardSubtitle>
                    <IonCardTitle>
                        { title }
                    </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    { introduction }
                </IonCardContent>
        </IonCard>
        </>
    )
};
