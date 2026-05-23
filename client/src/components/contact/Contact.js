import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const yupSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().max(1000).required()
})

function Contact(){
    const { handleSubmit, formState: { errors }, register } = useForm({
        resolver: yupResolver(yupSchema)
    });

    return(
        <div className="contact">
            
        </div>
    )
}

export default Contact