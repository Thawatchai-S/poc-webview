import { IonList, IonItem, IonInput, IonContent, IonButton } from '@ionic/react'
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import testService from '../../../../service/test.service'
import { LoginFormProps } from '../../../../types/login-form'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'

const LoginForm = () => {
    const { t } = useTranslation()
    const history = useHistory();
    const { handleSubmit, control, reset, formState:{ errors, validatingFields } } = useForm<LoginFormProps>({
        defaultValues: {
            agentId: '',
            password: '',
        },
        mode: 'onChange',
    })
    const onSubmit: SubmitHandler<LoginFormProps> = async (data) => {
        try {
            console.log(data);
            history.push('/pin-page')
            const testServiceInstance = await testService.testENV(data);
            console.log('testServiceInstance', testServiceInstance)
            reset({
                agentId: '',
                password: '',
            })
        } catch (error) {
            console.error('Error:', error); 
        }
    }

    return (
        <div className='content'>
            <form className='form-content' onSubmit={handleSubmit(onSubmit)}>
                <IonList lines="full" color='light' inset={true}>
                    <IonItem>
                        <Controller
                            name="agentId"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <IonInput {...field} placeholder={t('Agent ID')}></IonInput>}
                        />
                        {errors.agentId && <span style={{ color: 'red' }}>{t('Agent ID is required')}</span>}
                    </IonItem>
                    <IonItem>
                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <IonInput {...field} type='password' placeholder={t('Password')}></IonInput>}
                        />
                        {errors.password && <span style={{ color: 'red' }}>{t('Password is required')}</span>}
                    </IonItem>
                </IonList>
                <IonButton style={{ marginLeft: '16px', marginRight: '16px' }} expand="full" type='submit' color='primary'>
                    {t('Login')}
                </IonButton>
            </form>
        </div>
    )
}

export default LoginForm