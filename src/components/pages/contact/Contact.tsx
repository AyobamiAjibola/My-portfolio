import React, { useEffect } from 'react';
import { useState } from "react";
import "./contact.css";
import { LocalPhone, LocationOn, Mail, Send } from '@mui/icons-material';
import emailjs from '@emailjs/browser';
import { useForm, SubmitHandler } from "react-hook-form";
import { defaultValues, emailPattern } from '../../helpers/helpers';
import { Snackbar, Typography } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { LoadingButton } from '@mui/lab';

interface State {
  mail: any,
  success: boolean,
  fail: boolean,
  isLoading: boolean
}

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
  ) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const btn = {
  width: {sm: "40%", xs: "60%"},
  height: {sm: "50px", xs: "40px"},
  padding: "5px 0px",
  borderRadius: "5px",
  color: "white",
  fontWeight: 600,
  backgroundColor: "#DC143C",
  border: "0px",
  cursor: "pointer",
  marginTop: "20px",
  marginBottom: "5px",
  '&:hover': {
    backgroundColor: "white",
    border: "1px solid #DC143C",
    borderRadius: "5px",
    color: "#DC143C",
    fontWeight: 400,
    boxShadow: "0px 0px 15px -8px black"
  }
}

export default function Contact() {

  const [values, setValues] = useState<State>({
    mail: '',
    success: false,
    fail: false,
    isLoading: false
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
    defaultValues: defaultValues,
    mode: 'onTouched',
    criteriaMode: 'firstError',
    reValidateMode: 'onBlur'
  });

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
      setValues({...values, isLoading: true})
      emailjs.send(
        process.env.REACT_APP_SERVICEID!,
        process.env.REACT_APP_TEMPLATEID!,
        data,
        process.env.REACT_APP_PUBLICKEY!
      ).then((result) => {
        setValues({...values, isLoading: false})
        if(result.text){
          setValues({...values, success: true})
        }
        reset(defaultValues)
      }, (error) => {
          if(error.text){
            setValues({...values, fail: true, isLoading: false})
          }
      });
  };

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
    return;
    }
    setValues({...values, success: false, fail: false});
  };

  const func = () => {
    if(window.innerWidth > 762){
      return "ayobamiajibola46@gmail.com"
    } else if(window.innerWidth <= 762) {
      return "ayobamiajibola46\n@gmail.com"
    }
  }

  useEffect(() => {
    setValues({...values, mail: func()})
  },[])

  return (
    <div className="contact" id="contact">
      <div className='title'><h2>Contact Me</h2></div>
      <div className='socials'>
        <div className='email'>
          <Mail className='icon'/>
          <span className='mail'>{values.mail}</span>
        </div>
        <div className='address'>
          <LocationOn className='icon' />
          <span className='addi'>No 15 ini bassey street, arab road Kubwa, Abuja</span>
        </div>
        <div className='phone'>
          <LocalPhone className='icon' />
          <span className='number'>+234 8031 957 690</span>
        </div>
      </div>
      <div className="wrapper">
        {values.success &&
          <Snackbar open={values.success} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Thank you.
            </Alert>
          </Snackbar>
        }
        {values.fail &&
          <Snackbar open={values.fail} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                Sorry resend email.
            </Alert>
          </Snackbar>
        }
        <form>
          <div className='wrap'>
            <div className='nameWrapper'>
                <input
                    placeholder="Name"
                    className='name'
                    {...register("name", {
                        required: 'Name is required',
                        })}
                        autoComplete="name"
                />
                    {errors.name &&
                        (<Typography variant='body2'
                        component='span' sx={{color: 'red', textAlign: 'left'}}
                        >{errors.name.message}</Typography>)
                    }
            </div>
            <div className='emailWrapper'>
                <input
                    placeholder="Email"
                    className='email'
                    {...register("email", {
                        required: 'Email is required',
                        pattern: {
                            value: emailPattern,
                            message: 'Please enter a valid email address'
                        }
                        })}
                        autoComplete="email"
                />
                    {errors.email &&
                        (<Typography variant='body2'
                        component='span' sx={{color: 'red', textAlign: 'left'}}
                        >{errors.email.message}</Typography>)
                    }
            </div>
          </div>
          <div className='textareaWrapper'>
            <textarea
                placeholder="Message..."
                {...register("message", {
                    required: 'Required',
                    })}
            />
            {errors.message &&
                (<Typography variant='body2'
                component='span' pb={2}
                sx={{
                    color: 'red',
                    textAlign: 'left',
                    overflow: "hidden"
                }}
                >{errors.message.message}</Typography>)
            }
          </div>
          {/* <div className='btnWrapper'> */}
            <LoadingButton
              type="submit"
              onClick={handleSubmit(onSubmit)}
              sx={btn}
              endIcon={<Send />}
              loading={values.isLoading}
              loadingIndicator="Sending message..."
              variant='contained'
            >
              Send Message
            </LoadingButton>
          {/* </div> */}
        </form>
      </div>
    </div>
  )
}
