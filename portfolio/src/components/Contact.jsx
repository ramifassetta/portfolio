import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import fondo2 from "./fondo2.svg"
import { github, linkedin } from "../assets/assets";



export const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handlechange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // template_nmgie3s
    // service_zunx6yh
    // KHbdT_aqKqM8W_wYl

    emailjs
      .send(
        "service_zunx6yh",
        "template_nmgie3s",
        {
          from_name: form.name,
          to_name: "Ramiro",
          from_email: form.email,
          to_email: "ramiro.fassetta.01@gmail.com",
          message: form.message,
        },
        "KHbdT_aqKqM8W_wYl"
      )
      .then(
        () => {
          setLoading(false);
          alert("Gracias! Me comunicaré con usted muy pronto");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Algo salio mal. Por favor intente de nuevo");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden rounded-3xl"  style={{ backgroundImage: `url(${fondo2})`,
    backgroundRepeat: "no-repeat", 
    backgroundSize: "cover" }}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Envíame un mensaje</p>
        <h3 className={styles.sectionHeadText}>Contáctame.</h3>
        <div className="flex flex-row gap-5">
          <a href="https://www.linkedin.com/in/ramiro-fassetta/" target="_blank">
            <img src={linkedin} alt="" className="h-16"/>
          </a>
          <a href="https://github.com/ramifassetta" target="_blank">
            <img src={github} alt="" className="h-16"/>
          </a>
        </div>
        <form
          action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Nombre</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handlechange}
              placeholder="Cual es tu nombre?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handlechange}
              placeholder="Cual es tu Email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Mensaje</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handlechange}
              placeholder="Que quieres decirme?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>

        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
