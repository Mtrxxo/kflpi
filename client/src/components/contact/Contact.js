import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './contact.css';
import Nav from '../nav/nav';

const yupSchema = yup.object({
    name: yup.string().min(2, "Your name should include at least two letters").max(40, "Name can't be longer than 40 characters").required("Name is a required field"),
    email: yup.string().email().required("Email is a required field"),
    message: yup.string().max(1000, "You've reached the limit of 1000 characters.").required("Message is a required field")
})

const onSubmit = (data) => {
    console.log(data)
}

function Contact(){
    const { handleSubmit, formState: { errors }, register } = useForm({
        resolver: yupResolver(yupSchema)
    });

    return(
        <div className='contact_container'>
            <header className="contact_header">
                <Nav />
            </header>
            <main className="contact_main">
                <form action="" className="contact" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Contact Us</h1>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" {...register("name")} />
                        <p className='err_msg'>{errors.name?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" {...register("email")} />
                        <p className='err_msg'>{errors.email?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" {...register("message")}></textarea>
                        <p className='err_msg'>{errors.message?.message}</p>
                    </div>

                    <button type="submit">Send</button>
                </form>
            </main>
        </div>
    )
}

export default Contact