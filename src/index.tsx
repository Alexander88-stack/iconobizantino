import { FirebaseDatasource, FirebaseHelper } from '@entropic-bond/firebase';
import { JsonDataSource, Store } from 'entropic-bond';
import React from 'react';
import { render } from 'react-dom'
import { App } from './app';
import mockData from '../mock-data/mock-data.json'
import { Product } from './product/product';

// Store.useDataSource( new JsonDataSource( mockData as {} ) )

// const firebaseConfig = {
// 	apiKey: "AIzaSyDWV0VxLbWaSUQ4SX9dCcROHLTAbv5VC8c",
// 	authDomain: "iconobizantino.firebaseapp.com",
// 	projectId: "iconobizantino",
// 	storageBucket: "iconobizantino.appspot.com",
// 	messagingSenderId: "731571708081",
// 	appId: "1:731571708081:web:b5b0f4a06df0fb70430290",
// 	measurementId: "G-9D28NVNKX7"
// }

FirebaseHelper.setFirebaseConfig({
	apiKey: "AIzaSyDWV0VxLbWaSUQ4SX9dCcROHLTAbv5VC8c",
	authDomain: "iconobizantino.firebaseapp.com",
	projectId: "iconobizantino",
	storageBucket: "iconobizantino.appspot.com",
	messagingSenderId: "731571708081",
	appId: "1:731571708081:web:b5b0f4a06df0fb70430290",
})
Store.useDataSource( new FirebaseDatasource() )

new Product()

render(<App/>, document.getElementsByTagName('App')[0]);

