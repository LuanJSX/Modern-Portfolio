import React, { useState } from 'react'
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

const [formStatus, setFormStatus] = useState({
  submitting: false,
  success: false,
  error: false,
  message: "",
});

const handleInputChange = (e) => {
  const {name, value } = e.target
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }))
};

const handleSubmit = async (e) => {
   e.preventDefault();

   setFormStatus({
    submitting: true,
    success: false,
    error: false,
    message: "",
   });

   try {
    await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
             name: formData.name,
             email: formData.email,
             message: formData.message,
      }
    );
   setFormStatus({
      submitting: false,
      success: true,
      error: false,
      message: "Message sent Successfully",
    });
  
    setFormData({
      name: "",
      email: "",
      message: "",
    })

   } catch (error) {
    setFormStatus ({
      submitting: false,
      success: false,
      error: true,
      message: "Message sent failed",
    })
   }
   
}
  

  return (

 
 <motion.section id='contact' className="contact" initial={{opacity: 0}} whileInView={{ opacity: 1}} viewport={{once: true}} transition={{duration: 0.6}}
 >
 <motion.h2 variants={fadeInUp} initial="initial" animate="animate" viewport={{once: true}}
 >  Vamos conversar?
 </motion.h2>

 <motion.div className='contact-content' variants={fadeInUp}>
  <motion.form className='contact-form' onSubmit={handleSubmit}>
    <motion.input type='text' name='name' placeholder='Seu Nome...'required whileFocus={{scale: 1.02}} onChange={handleInputChange}>
    </motion.input>
    <motion.input type='email' name='email' placeholder='Seu Email...'required whileFocus={{scale: 1.02}} onChange={handleInputChange}>
    </motion.input>
    <motion.textarea type='text' name='message' placeholder='Sua Mensagem...'required whileFocus={{scale: 1.02}} onChange={handleInputChange}>
    </motion.textarea>
    <motion.button className='submit-btn' whileHover= {{scale: 1.05}} whileTap={{scale: 0.9 }} type='submit'
    disabled={formStatus.submitting}> {formStatus.submitting ? "Aguarde, enviando..." : "Enviar mensagem"}</motion.button>

    {formStatus.message && <motion.div className={`form-status ${formStatus.success ? "sucess" : "error"}`}>{formStatus.message}</motion.div>}
  </motion.form>
 </motion.div>
 </motion.section>
  )
}

export default Contact