import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { errorMessage } from '../utils';

const firebaseConfig = {
    apiKey: 'AIzaSyAC-kwxN4-DMdg6VwWD0VCPQf4xYvkG9Yc',
    authDomain: 'uzbeksteel-47a8d.firebaseapp.com',
    projectId: 'uzbeksteel-47a8d',
    storageBucket: 'uzbeksteel-47a8d.appspot.com',
    messagingSenderId: '979531037941',
    appId: '1:979531037941:web:ebcf0c0b917e106ce359bc',
    measurementId: 'G-9C5307SX0F',
};

export const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

export const requestForToken = async (): Promise<string | void> => {
    try {
        const permission = await Notification.requestPermission();

        if (permission === 'granted') {
            const token = await getToken(messaging, {
                vapidKey: 'BGS67z63d_SDdc9OBKuBtx4WcX0qng8623XqQwBby5l5G8J4yCn7Hy4NcuSRs5XNsO28D24LOHK732d-_N2mu7o',
            });
            return token;
        }
    } catch (error) {
        errorMessage('An error occurred while retrieving token. ');
    }
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });
