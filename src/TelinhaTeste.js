import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import firebase from './firebaseConnection';

const Telinha = () => {
  useEffect(async () => {
    
    saveData();
    //deleteData();
    //getData();
  }, []);

  const saveData = async () => {
    const data = {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA',
    };

    // Add a new document in collection "cities" with ID 'LA'
    const res = await firebase.firestore().collection('cities').doc().set(data);
  };

  const deleteData = async () => {
    const res = await firebase
      .firestore()
      .collection('cities')
      .doc('LA')
      .delete();
  };

  const getData = async () => {
    const citiesRef = firebase.firestore().collection('cities');
    const snapshot = await citiesRef.get();
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  };



  return (
    <View>
      <Text>Oi</Text>
    </View>
  );
};

export default Telinha;
