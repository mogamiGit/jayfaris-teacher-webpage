import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import InputCustom from './Inputs/inputCustom'
import TextAreaCustom from './Inputs/textAreaCustom'
import Button from './Button';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../constants/urls';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isDisabled = !formData.from_name || !formData.from_email || !formData.message;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY,
      );
      console.log('SUCCESS!', response.status, response.text);
      setStatus('¡Mensaje enviado correctamente!');
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('Error al enviar el mensaje. Intenta de nuevo.');
    }
  };

  return (
    <div className="w-full mx-auto mb-0 md:mb-14">
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <InputCustom
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Sir Mix-a-Lot of Grammar*"
            required={true}
            inputName='Your name'
          />
          <InputCustom
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            placeholder="grammar.wizard@email.com*"
            required={true}
            inputName='Your email'
          />
          <TextAreaCustom
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Email me, and I’ll reply faster than a speeding grammar correction!*"
            required
            inputName='Your message'
          />
          <Button
            type="submit"
            text='Send'
            className='mt-3'
            disabled={isDisabled}
          />
        </form>
      </div>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
};

export default ContactForm;