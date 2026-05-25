import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './contact.css';

const yupSchema = yup.object({
    name: yup.string().required("Name is a required field"),
    email: yup.string().email().required("Email is a required field"),
    message: yup.string().max(1000).required("Message is a required field")
})

function Contact(){
    const { handleSubmit, formState: { errors }, register } = useForm({
        resolver: yupResolver(yupSchema)
    });

    return(
        <form action="" className="contact">
            <h1>Contact Us</h1>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" {...register('name')} />
                <p>{errors.name?.message}</p>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" {...register('email')} />
                <p>{errors.email?.message}</p>
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" {...register('message')}></textarea>
                <p>{errors.message?.message}</p>
            </div>

            <button type="submit">Send</button>
        </form>
    )
}

export default Contact