import React from 'react'
import { useFormik } from 'formik';
import styles from "../../styles/Contact.module.scss"
import * as Yup from 'yup';

const Contact: React.FC<{}> = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            number: '',
            message: '',
        },
        validationSchema: Yup.object({

            name: Yup.string().required('Required'),
     
            email: Yup.string().email('Your e-mail address is invalid').required('Required'),
     
            number: Yup.number()
            .positive('A phone number cannot be negative')
            .max(999_999_999_999_999)
            .required('Required'),
            
            message: Yup.string().min(20)
          }),
        onSubmit: values => {

            alert(JSON.stringify(values, null, 2));

        },
    });

    return (
        <section id="contact" className="bg-gray-700 h-screen w-screen snap-start">
            <h1 className="sectionTitle">Contact</h1>
            <form onSubmit={formik.handleSubmit} className={styles.ContactForm}>
                <label htmlFor="name">Nom</label>
                <label htmlFor="number">Numéro de téléphone</label>
                                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                
                <input
                    id="number"
                    name="number"
                    type="number"
                    placeholder="0612345678"
                    onChange={formik.handleChange}
                    value={formik.values.number}

                />
                <label htmlFor="email">E-mail</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@domain.tld"
                    onChange={formik.handleChange}
                    value={formik.values.email}

                />
                
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Your message goes here"
                    onChange={formik.handleChange}
                    value={formik.values.message}

                />
                <button type="submit">Envoyer</button>
            </form>
        </section>
    )
}

export default Contact
