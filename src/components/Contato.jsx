import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Contato.module.css";

const Contato = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className={styles.container}>
      <h2>Contato</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <span>Email é obrigatório</span>}
        </div>
        <div className={styles.formGroup}>
          <label>Assunto:</label>
          <input type="text" {...register("assunto", { required: true })} />
          {errors.assunto && <span>Assunto é obrigatório</span>}
        </div>
        <div className={styles.formGroup}>
          <label>Mensagem:</label>
          <textarea {...register("mensagem", { required: true })} />
          {errors.mensagem && <span>Mensagem é obrigatória</span>}
        </div>
        <div className={styles.formGroup}>
          <label>Urgência:</label>
          <input type="checkbox" {...register("urgencia")} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
