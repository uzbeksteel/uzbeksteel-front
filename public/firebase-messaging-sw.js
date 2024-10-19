importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: 'AIzaSyAC-kwxN4-DMdg6VwWD0VCPQf4xYvkG9Yc',
    authDomain: 'uzbeksteel-47a8d.firebaseapp.com',
    projectId: 'uzbeksteel-47a8d',
    storageBucket: 'uzbeksteel-47a8d.appspot.com',
    messagingSenderId: '979531037941',
    appId: '1:979531037941:web:ebcf0c0b917e106ce359bc',
    measurementId: 'G-9C5307SX0F',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
