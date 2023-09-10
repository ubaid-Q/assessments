"use client";
import React, { SyntheticEvent, useState } from "react";
import SuccessModal from "../../components/modal";
import { api } from "../../shared/request";
import styles from "./contact.module.css";

export default function PublicPage() {
  const [modal, setModal] = useState({
    open: false,
    message: "",
  });
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await api.POST("/api/v1/contact", formData);
      const data = await response.json();
      setModal({ ...modal, message: "Contact Data Submitted", open: true });
    } catch (error) {
      console.log(error);
    }
  };

  const submitToSalesforce = async (e: SyntheticEvent) => {
    setModal({ ...modal, open: false });
    e.preventDefault();
    try {
      const response = await api.POST("/api/v1/salesforce", formData);
      const data = await response.json();
      setModal({
        ...modal,
        message: "Contact submitted to Salesforce",
        open: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Title</label>
            <input
              type="text"
              name="title"
              className={styles.input}
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Subject</label>
            <input
              type="text"
              name="subject"
              className={styles.input}
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              className={styles.input}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Message</label>
            <textarea
              name="message"
              className={styles.textarea}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
        <SuccessModal
          SalesforceBtnHandler={submitToSalesforce}
          isOpen={modal.open}
          onClose={() => setModal({ ...modal, open: false })}
          message={modal.message}
        />
      </div>
    </div>
  );
}
