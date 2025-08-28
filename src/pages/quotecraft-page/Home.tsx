import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonLoading, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { menuController } from '@ionic/core/components';
import ExploreContainer from './components/ExploreContainer';
import IconCompany from '/assets/images/icon-company.svg';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import testService from '../../service/test.service';

const Home: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      buttonRef.current?.click();
    }, 500);
  }, []);

  return (
    <>
      {/* <IonMenu color='primary' contentId="main-content" menuId="first-menu">
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle slot='start'>
              <div className="title">
                <IonIcon icon={IconCompany}></IonIcon>
                <div>Quotecraft</div>
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonButton
            color={'primary'}
            expand="full"
            onClick={async () => {
              history.push('/login-page');
              await testService.removeAccount()
              menuController.close('first-menu');
            }}
          >
            {t('Logout')}
          </IonButton>
        </IonContent>
      </IonMenu> */}
      <IonPage id="main-content">
        {/* <IonHeader translucent={false}>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle slot='' className='ion-title'>
              <div className="title">
                <IonIcon icon={IconCompany}></IonIcon>
                <div>Quotecraft</div>
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonContent fullscreen>
          <button ref={buttonRef} hidden id="open-loading"></button>
          <IonLoading animated={true} showBackdrop={true} translucent={false} trigger="open-loading" duration={3000} />
          <ExploreContainer />
        </IonContent>
        {/* <IonFooter translucent={false}>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle slot='' className='ion-title'>
              <div className="title">
                <IonIcon icon={IconCompany}></IonIcon>
                <div>Quotecraft</div>
              </div>
            </IonTitle>
          </IonToolbar>
        </IonFooter> */}
      </IonPage>
    </>
  );
};

export default Home;
