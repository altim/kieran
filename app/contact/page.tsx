"use client";

import styles from "./page.module.scss";
import Button from "@/app/components/button/Button.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type ContactFormType = {
  name: string;
  email: string;
  message: string;
};

const schema = yup
  .object({
    name: yup.string().required("Name is required field"),
    email: yup
      .string()
      .email("Not valid email address")
      .required("Email is required field"),
    message: yup.string().required("Name is required field"),
  })
  .required();

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormType>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ContactFormType> = (data) => {
    console.log(data);
    fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactPageInner}>
        <div className={styles.blueRectangle} />
        <h1>Contact me</h1>

        <div className={styles.formWrapper}>
          <h2 className={styles.formTitle}>For hire or questions</h2>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formField}>
              <input
                placeholder={"Name"}
                type={"text"}
                defaultValue=""
                {...register("name")}
              />
              {errors?.name && <p>{errors?.name?.message}</p>}
            </div>

            <div className={styles.formField}>
              <input
                placeholder={"Email address"}
                type={"text"}
                defaultValue=""
                {...register("email")}
              />
              {errors?.email && <p>{errors?.email?.message}</p>}
            </div>

            <div className={styles.formField}>
              <textarea
                rows={10}
                placeholder={"Message"}
                defaultValue=""
                {...register("message")}
              />
              {errors?.message && <p>{errors?.message?.message}</p>}
            </div>
            <div className={styles.formAction}>
              <Button name={"SUBMIT"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
