import { useState } from 'react';
import styles from './RegisterForm.module.css';
import Input from '../input/input';
import Button from '../buttons/button';
import { type RegistrationFormType, registrationSchema } from '../../../utils/schemas/registrationSchemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<RegistrationFormType>({
    resolver: zodResolver(registrationSchema),
    mode: 'onChange',
      defaultValues: {
          email: "",
          password: "",
          name: "",
          birthDate: ""
      }
  });

  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    console.log('Форма отправлена', e)
  };

  return (
      <div className={styles.registrationForm}>
          <h1 className="registration__title">Создайте аккаунт</h1>
          <p className="registration__text">Уже есть аккаунт? <a className="registration__link"
                                                                 href="">Войти</a></p>
          <form className={styles.form} onSubmit={onSubmit}>

              <div className={styles.elementList}>
                  <div className={styles.nameWrapper}>
                      <Input
                          id='nameInput'
                          aria-label='Имя'
                          type='text'
                          placeholder='Введите ваше имя'
                          {...register('name')}
                          error={errors.name?.message}
                      ></Input>
                      <Input
                          id='surnameInput'
                          aria-label='Фамилия'
                          type='text'
                          placeholder='Введите вашу фамилию'
                          {...register('surname')}
                          error={errors.surname?.message}
                      ></Input>
                  </div>
                  <Input
                      id='emailInput'
                      aria-label='Email'
                      type='email'
                      placeholder='Введите email'
                      {...register('email')}
                      error={errors.email?.message}
                  ></Input>
                  <Input
                      id='passwordInput'
                      aria-label='Пароль'
                      placeholder='Придумайте надёжный пароль'
                      type={showPassword ? 'text' : 'password'}
                      {...register('password')}
                      error={errors.password?.message}
                      rightIcon={
                          <button
                              type='button'
                              onClick={() => setShowPassword(!showPassword)}
                              className={styles.buttonIcon}
                          >
                              <img src='/eye.svg' alt='Показать пароль' />
                          </button>
                      }
                  ></Input>
                  <Input
                      id='confirmPasswordInput'
                      aria-label='Подтвердите пароль'
                      placeholder='Подтвердите пароль'
                      type={showPassword ? 'text' : 'password'}
                      {...register('confirmPassword')}
                      error={errors.confirmPassword?.message}
                      rightIcon={
                          <button
                              type='button'
                              onClick={() => setShowPassword(!showPassword)}
                              className={styles.buttonIcon}
                          >
                              <img src='/eye.svg' alt='Показать пароль' />
                          </button>
                      }
                  ></Input>
                  <div className={styles.buttonWrapper}>
                      <Input
                          id='birthdayInput'
                          aria-label='Дата рождения'
                          type='date'
                          {...register('birthDate')}
                          error={errors.birthDate?.message}
                      ></Input>
                      <Button
                          type='primary'
                          htmlType='submit'
                          className={styles.submitButton}
                          disabled={!isValid}
                      >
                          Отправить
                      </Button>
                  </div>
              </div>

              <div className={styles.divider}>
                  <span className={styles.dividerText}>или</span>
              </div>

              <div className={styles.elementList}>
                  <Button type='secondary' className={styles.button}>
                      <img src='/Google.svg' alt='Google' className={styles.icon} />
                      <span>Продолжить с Google</span>
                  </Button>
                  <Button type='secondary' className={styles.button}>
                      <img src='/Apple.svg' alt='Apple' className={styles.icon} />
                      <span>Продолжить с Apple</span>
                  </Button>
              </div>

          </form>
      </div>
  );
};
