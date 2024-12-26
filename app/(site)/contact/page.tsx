import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "IStar",
  description: "This is Docs page for Solid Pro",
  // other metadata
};
const ContactPage = () => {
  return (
    <div className="">
      <Contact />
    </div>
  );
};

export default ContactPage;
