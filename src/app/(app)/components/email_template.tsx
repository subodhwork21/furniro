import * as React from "react";
import Link from "next/link";

interface EmailTemplateProps {
  email: string;
  id: string | number;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  id,
}) => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  return (
    <>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
          lineHeight: "1.6",
        }}
      >
        <p>Dear User,</p>
        <p>
          Thank you for signing up with us. Please verify your email address
          {email} by clicking the button below:
        </p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <a
            href={base_url + "/verify" + "/" + id}
            target="_blank"
            style={{
              display: "inline-block",
              backgroundColor: "#007bff",
              color: "#ffffff",
              textDecoration: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            Verify Email
          </a>
        </div>
        <p>
          If you have trouble clicking the button above, you can also copy and
          paste the following link into your browser:
        </p>
        <p>{process.env.BASE_URL + "/verify" + "/" + id}</p>
        <p>Thank you,</p>
        <p>Furniro Team</p>
      </div>
    </>
  );
};
