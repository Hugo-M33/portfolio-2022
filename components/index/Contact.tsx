import React from 'react'
import { useFormik } from 'formik';
import styles from "../../styles/Contact.module.scss"
import * as Yup from 'yup';
import SlideSectionTitle from '../SlideSectionTitle';

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
        <section id="contact" className="bg-gradient-to-r from-violet-600 to-violet-900 h-screen w-screen snap-start relative grid place-items-center">
            <SlideSectionTitle>Contact</SlideSectionTitle>
            <form onSubmit={formik.handleSubmit} className="w-4/6 h-4/6 space-y-6 flex flex-col justify-center">
                <div className="flex flex-col" >
                    <label htmlFor="name" className="text-emerald-400 font-semibold tracking-wide pl-2 pb-2">Nom</label>
                    <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className="rounded-lg bg-slate-900 text-white border-gray-900"
                />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="number" className="text-emerald-400 font-semibold tracking-wide pl-2 pb-2">Numéro de téléphone</label>
                    <input
                            id="number"
                            name="number"
                            type="number"
                            placeholder="0612345678"
                            onChange={formik.handleChange}
                            value={formik.values.number}
                            className="rounded-lg bg-slate-900 text-white border-gray-900"
                        />
                </div>
                                
                
                
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-emerald-400 font-semibold tracking-wide pl-2 pb-2">E-mail</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john.doe@domain.tld"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="rounded-lg bg-slate-900 text-white border-gray-900"
                    />
                </div>
                
                <div className="flex flex-col">
                    <label htmlFor="message" className="text-emerald-400 font-semibold tracking-wide pl-2 pb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your message goes here"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        className="rounded-lg bg-slate-900 text-white border-gray-900"
                    />
                </div>
                <button type="submit" className="bg-slate-800 hover:bg-slate-600 px-4 py-2 mt-4 text-white rounded-xl shadow-md hover:shadow-xl transition-[background-color] duration-500 transition-shadow self-end">Envoyer</button>
            </form>
        </section>
    )
}

export default Contact
