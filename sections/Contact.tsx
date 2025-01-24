"use client";

import { useFormspark } from "@formspark/use-formspark";
import links from "data/links";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaTwitter } from "react-icons/fa";
import { FaDev } from "react-icons/fa"; // Add this line
import { Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const socialLinks = [
  {
    id: 1,
    title: "GitHub",
    subtitle: "Check out my open source projects and contributions",
    icon: FaGithub,
    url: links.github,
  },
  {
    id: 2,
    title: "LinkedIn",
    subtitle: "Connect with me professionally and explore my career journey",
    icon: FaLinkedin,
    url: links.linkedin,
  },
  {
    id: 3,
    title: "Dev.to",
    subtitle: "Follow my technical articles and development insights",
    icon: FaDev,
    url: links.dev,
  },
  {
    id: 4,
    title: "Email",
    subtitle: "Reach out directly via email for collaborations",
    icon: FaEnvelope,
    url: `mailto:${links.email}`,
  },
];

const SocialCard: React.FC<{
  social: (typeof socialLinks)[0];
  index: number;
}> = ({ social, index }) => {
  const Icon = social.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group p-6 bg-white dark:bg-gray-800/50 rounded-xl
                border border-gray-200 dark:border-gray-700
                hover:border-blue-500/50 dark:hover:border-blue-500/50
                transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div
            className="p-2 rounded-lg mt-1
                       bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                       border border-gray-200 dark:border-gray-700"
          >
            <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>

          <div>
            <h3
              className="font-bold text-gray-900 dark:text-white
                        group-hover:text-blue-500 dark:group-hover:text-blue-400
                        transition-colors duration-300"
            >
              {social.title}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">{social.subtitle}</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openURLInNewTab(social.url)}
          className="flex-shrink-0 p-2 rounded-lg
                   bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                   border border-gray-200 dark:border-gray-700
                   group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20
                   transition-all duration-300"
        >
          <Icon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [isSubmitted, setSubmitted] = useState(false);
  const [submit, submitting] = useFormspark({ formId: "fughhb2WE" });

  const onSubmit = handleSubmit(async (data) => {
    await submit(data);
    setSubmitted(true);
  });

  return (
    <section id={Section.Contact} className="space-y-8">
      {getSectionHeading(Section.Contact)}

      <div className="grid gap-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {socialLinks.map((social, index) => (
            <SocialCard key={social.id} social={social} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800/50 rounded-xl p-6
                  border border-gray-200 dark:border-gray-700
                  hover:border-blue-500/50 dark:hover:border-blue-500/50
                  transition-all duration-300"
        >
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-6"
              >
                <FaPaperPlane className="w-8 h-8 text-blue-500" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Thank you for reaching out. I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-900
                            border ${errors.name ? "border-red-500" : "border-gray-200 dark:border-gray-700"}
                            focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                            dark:focus:ring-blue-500/20 dark:focus:border-blue-500
                            transition-colors duration-200`}
                    placeholder="Regina Phalange"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                  <input
                    type="email"
                    className={`w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-900
                            border ${errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-700"}
                            focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                            dark:focus:ring-blue-500/20 dark:focus:border-blue-500
                            transition-colors duration-200`}
                    placeholder="regina@centralperk.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-900
                          border ${errors.message ? "border-red-500" : "border-gray-200 dark:border-gray-700"}
                          focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                          dark:focus:ring-blue-500/20 dark:focus:border-blue-500
                          transition-colors duration-200`}
                  placeholder="Type your message here..."
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                />
                {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full lg:w-auto px-8 py-3 rounded-lg font-medium
                        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                        text-white disabled:opacity-50 disabled:cursor-not-allowed
                        hover:opacity-90 transition-all duration-200
                        flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="w-4 h-4" />
                {submitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
