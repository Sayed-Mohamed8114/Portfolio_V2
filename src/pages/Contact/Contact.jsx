import { Suspense, useRef, useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";

import { Model } from "../../components/models/fox";
import Loader from "../../components/common/Loader";

import { github, linkedin } from "../../assets/icons";

const socialLinks = [
  {
    name: "GitHub",
    icon: github,
    url: "https://github.com/Sayed-Mohamed8114",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/sayed-mohamed-xyz8112004/",
  },
];

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [currentAnimations, setCurrentAnimations] = useState("idle");

  const handleContactForm = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate name
    if (formData.name.trim().length < 3) {
      toast.error("Please enter a valid user name");
      return;
    }

    // Validate email
    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Validate message
    if (formData.message.trim().length < 20) {
      toast.error("Message must be more than 20 characters");
      return;
    }

    // Start fox animation after validation
    setCurrentAnimations("hit");

    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Sayed Mohamed",
          from_email: formData.email,
          to_email: "sayed.mohamed8114@gmail.com",
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setIsLoading(false);

        toast.success("Message sent successfully!");

        setTimeout(() => {
          setCurrentAnimations("idle");

          setFormData({
            name: "",
            email: "",
            message: "",
          });
        }, 1500);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);

        setIsLoading(false);
        setCurrentAnimations("idle");

        toast.error("An error has occurred, try again later");
      });
  };

  const handleFocus = () => {
    setCurrentAnimations("walk");
  };

  const handleBlur = () => {
    setCurrentAnimations("idle");
  };

  return (
    <section
      className="
        bg-linear-to-b
        from-white
        to-sky-200
        flex
        flex-col
        lg:flex-row
        relative
        w-full
        min-h-screen
        mt-30
        lg:mt-0
        lg:overflow-y-hidden
      "
    >
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
        <h1
          className="
            bg-linear-to-r
            mb-5
            font-extrabold
            font-serif
            text-3xl
            md:text-5xl
            from-sky-500
            to-sky-900
            bg-clip-text
            text-transparent
          "
        >
          Get In Touch
        </h1>

        <form
          ref={formRef}
          onSubmit={handleContactForm}
          className="
            bg-white/70
            shadow-lg
            rounded-lg
            gap-5
            flex
            flex-col
            w-[90%]
            lg:w-[80%]
            p-10
          "
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="
                font-serif
                font-extrabold
                text-sm
                md:text-2xl
                bg-linear-to-l
                from-black
                to-sky-500
                bg-clip-text
                text-transparent
              "
            >
              Enter your Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="sayed mohamed"
              value={formData.name}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="
                bg-sky-100
                p-3
                outline-sky-300
                placeholder:text-gray-400
                placeholder:font-bold
              "
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="
                font-serif
                font-extrabold
                text-sm
                md:text-2xl
                bg-linear-to-l
                from-black
                to-sky-500
                bg-clip-text
                text-transparent
              "
            >
              Enter your Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="sayed@gmail.com"
              value={formData.email}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="
                bg-sky-100
                p-3
                outline-sky-300
                placeholder:text-gray-400
                placeholder:font-bold
              "
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="
                font-serif
                font-extrabold
                text-sm
                md:text-2xl
                bg-linear-to-l
                from-black
                to-sky-500
                bg-clip-text
                text-transparent
              "
            >
              Enter your message here
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="enter your message here"
              value={formData.message}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              className="
                bg-sky-100
                p-3
                outline-sky-300
                placeholder:text-gray-400
                placeholder:font-bold
              "
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="
              w-[90%]
              md:w-[70%]
              p-3
              text-sky-50
              mx-auto
              font-extrabold
              hover:bg-sky-700
              duration-1000
              transition
              cursor-pointer
              font-serif
              text-2xl
              rounded-md
              bg-sky-900
              mt-5
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {isLoading ? "Sending....." : "Send Message"}
          </button>
        </form>

        <div
          className="
            bottom-0 flex fixed left-0
            mt-15
            md:hidden
            items-center
            justify-center
            gap-4
            mb-5
            bg-white/70
            backdrop-blur-md
            px-3
            py-1
            rounded-xl
            shadow-md
          "
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              className="
                w-8
                h-10
                flex
                items-center
                justify-center
                rounded-lg
                hover:bg-sky-100
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <img src={social.icon} alt={social.name} className="w-7 h-7" />
            </a>
          ))}
        </div>
      </div>

      <div
        className="
          lg:w-1/2
          w-full
          lg:h-screen
          md:h-137.5
          h-87.5
        "
      >
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 100,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />

          <ambientLight intensity={1} />

          <pointLight position={[5, 10, 0]} intensity={2} />

          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Model
              currentAnimations={currentAnimations}
              position={[0.5, 0.35, 0]}
              rotation={[0, Math.PI / -4, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>

      <div
        className="
          fixed
          left-0
          top-1/2
          -translate-y-1/2
          z-50
          hidden
          md:flex
          flex-col
          bg-white/80
          backdrop-blur-md
          shadow-lg
          rounded-r-xl
          overflow-hidden
        "
      >
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            className="
              w-14
              h-14
              flex
              items-center
              justify-center
              hover:bg-sky-100
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <img src={social.icon} alt={social.name} className="w-7 h-7" />
          </a>
        ))}
      </div>
    </section>
  );
}
