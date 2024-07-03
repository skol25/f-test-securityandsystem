'use client';

import styles from '@/styles/components/profile/ContactForm.module.css';
import useContactForm from './useContactForm';
import Input from '@/components/common/input/input';
import Textarea from '@/components/common/textarea/textarea';
import Button from '@/components/common/button/button';

const ContactForm = () => {
  const { formData, errors, success, handleChange, handleSubmit } = useContactForm();

  return (
    <section className={styles.contactForm}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.group}>
          <Input
            type="text"
            name="name"
            placeholder="‎"
            onChange={handleChange}
            value={formData.name}
            className={errors.name ? styles.errorInput : ''}
            required
          />
          <label htmlFor="name">Nombre</label>
          {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
        </div>
        <div className={styles.group}>
          <Input
            type="email"
            name="email"
            placeholder="‎"
            onChange={handleChange}
            value={formData.email}
            className={errors.email ? styles.errorInput : ''}
            required
          />
          <label htmlFor="email">Email</label>
          {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
        </div>
        <div className={styles.group}>
          <Textarea
            name="message"
            placeholder="‎"
            onChange={handleChange}
            value={formData.message}
            className={errors.message ? styles.errorInput : ''}
            required
          />
          <label htmlFor="message">Mensaje</label>
          {errors.message && <p className={styles.errorMessage}>{errors.message}</p>}
        </div>
        <Button type="submit">Enviar</Button>
      </form>
      {success && <p className={styles.successMessage}>¡Mensaje enviado con éxito!</p>}
    </section>
  );
};

export default ContactForm;
