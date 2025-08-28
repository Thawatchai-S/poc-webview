import { IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonLabel, IonLoading, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react'
import { IonSegmentCustomEvent, SegmentChangeEventDetail } from '@ionic/core';
import IconCompany from '/assets/images/icon-company.svg';
import React, { useEffect, useRef, useState } from 'react'
import pkg from '../../../../package.json'
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { Browser } from '@capacitor/browser';
import testService from '../../../service/test.service';

const PinPage = () => {
  const { i18n, t } = useTranslation();
  const [pin, setPin] = useState<string[]>(['', '', '', '']);
  const inputsRef = useRef<(HTMLIonInputElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const history = useHistory();

  const changeLanguage = (value: IonSegmentCustomEvent<SegmentChangeEventDetail>) => {
    i18n.changeLanguage(`${value.detail.value}` || 'th');
  }

  const removeAccount = async () => {
    try {
      await testService.removeAccount();
    } catch (error) {
      
    }
  }

  const handleChange = async (value: string, index: number) => {
    // Move to next input
    if (value !== '') {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      console.log('next');
      setTimeout(async () => {
        await inputsRef.current[index + 1]?.setFocus();
      }, 200);
    }
    else {
      const newPin = [...pin];
      newPin[index + 1] = value;
      setPin(newPin);
      // setTimeout(async () => {
      //   await inputsRef.current[index]?.setFocus();
      // }, 200);
    }
  };

  useEffect(() => {
    console.log(pin.join('').length);
    if (pin.join('').length === 4) {
      console.log('PIN:', pin.join(''));
      // Call your API or perform any action with the PIN
      // For example, you can navigate to another page or show a success message
      // history.push('/home');
      // Or show a success message
      // alert(`PIN entered: ${pin.join('')}`);
      // Clear the pin after submission
      setTimeout(() => {
        inputsRef.current[0]?.setFocus();
        buttonRef.current?.click();
      }, 500);
      setTimeout(async () => {
        setPin(['', '', '', '']);
        history.push('/home');
        // await Browser.open({ url: 'http://localhost:3000/quote-craft/landing-mobile' });
      }, 3000);
    }
  }, [pin]);

  return (
    <IonPage>
      <button ref={buttonRef} hidden id="open-loading"></button>
      <IonLoading spinner={'crescent'} cssClass={'loading-layout'} animated={true} showBackdrop={true} translucent={false} trigger="open-loading" duration={3000} />
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
      <IonContent fullscreen>
        <div className='flex flex-col items-center mt-[30px] gap-[10px]'>
          <div className='font-[600] text-[20px]'>
            {t('PIN Code')}
          </div>
          <div>
            {t('PIN Detail')}
          </div>
          <div className='pin-layout'>
            {pin.map((digit, i) => (
              <IonInput
                ref={(el: HTMLIonInputElement | null) => {
                  if (el !== null) {
                    inputsRef.current[i] = el;
                  } else {
                    inputsRef.current[i] = null;
                  }
                }}
                key={i}
                type='password'
                maxlength={1}
                value={digit}
                onIonInput={async (e) => {
                  if (e.target.value !== '') {
                    await handleChange(`${e.target.value}`, i)
                  } else {
                    await handleChange(`${e.target.value}`, i - 1)
                  }
                }}
                className="pin-input"
                // inputMode="decimal"
                fill='outline'
              />
            ))}
          </div>
          <div>
            {t('Forget Password')}? <a href='/login-page' onClick={()=> removeAccount()}>{t('Login')}</a>
          </div>
        </div>
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

export default PinPage