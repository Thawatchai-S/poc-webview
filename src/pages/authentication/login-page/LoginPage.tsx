import { IonContent, IonFooter, IonHeader, IonIcon, IonLabel, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react'
import { IonSegmentCustomEvent, SegmentChangeEventDetail } from '@ionic/core';
import IconCompany from '/assets/images/icon-company.svg';
import pkg from '../../../../package.json'
import { useTranslation } from 'react-i18next';
import LoginForm from './components/LoginForm';
import { useEffect, useState } from 'react';
import testService from '../../../service/test.service';
import { useHistory } from 'react-router';

const LoginPage = () => {
  const { i18n } = useTranslation();
  const [acc, setAcc] = useState();
  const history = useHistory();

  const changeLanguage = (value: IonSegmentCustomEvent<SegmentChangeEventDetail>) => {
    i18n.changeLanguage(`${value.detail.value}` || 'th');
  }

  const getAccount = async () => {
    try {
      const data = await testService.getAccount();
      setAcc(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (acc) {
      history.push('/pin-page');
    }
  }, [acc]);

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className='ion-title'>
            <div className="title">
              <IonIcon icon={IconCompany}></IonIcon>
              <div>Quotecraft</div>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color={'tint'}>
        <LoginForm />
      </IonContent>
      <IonFooter>
        <IonToolbar style={{ padding: '0px 10px' }} color="primary">
          <IonSegment onIonChange={changeLanguage} mode='ios' slot='start' value={i18n.language}>
            <IonSegmentButton value="th">
              <IonLabel>th</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="en">
              <IonLabel>en</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          <IonTitle slot='end'>
            {pkg.version}
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  )
}

export default LoginPage