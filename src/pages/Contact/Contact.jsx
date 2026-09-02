import { useRef, useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleContactForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.name.trim() < 3) {
      toast.error("please enter a valid user name");
    } else if (!emailRegex.test(formData.email)) {
      toast.error("please enter a valid email address");
    } else if (formData.message.length < 50) {
      toast.error("message must be more than 50 charachter");
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_TEMEPLATE_ID,
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          {
            from_name: formData.name,
            to_name: "Sayed",
            from_email: formData.email,
            to_email: "sayed.mohamed8114@gmail.com",
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
        .then(() => {
          setIsLoading(false);
          toast.success("Sent correctly");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch(() => {
          setIsLoading(false);
          toast.error("unerror has occurred, try again later");
        });
    }
  };

  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section
      className="bg-linear-to-b flex flex-col 
    lg:flex-row max-container from-sky-200 to-white 
    relative w-full min-h-screen"
    >
      <div className="flex flex-col items-center w-full justify-center">
        <h1 className="bg-linear-to-r mb-5 font-extrabold font-serif text-5xl from-sky-500 to-sky-900 bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <form
          onSubmit={handleContactForm}
          className="bg-white/50 rounded-lg gap-5 flex flex-col w-[90%] lg:w-[50%] p-10"
        >
          <div className="flex flex-col gap-2 ">
            <label
              for="name"
              className="font-serif font-extrabold text-2xl bg-linear-to-l from-black to-sky-500 bg-clip-text text-transparent"
            >
              Enter your Name
            </label>
            <input
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              type="text"
              name="name"
              placeholder="sayed mohamed"
              className="bg-sky-100 p-3 outline-sky-300 placeholder:text-gray-400 placeholder:font-bold "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              for="email"
              className="font-serif font-extrabold text-2xl bg-linear-to-l from-black to-sky-500 bg-clip-text text-transparent"
            >
              Enter your Email
            </label>
            <input
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              type="text"
              name="email"
              placeholder="sayed@gmail.com"
              className="bg-sky-100 p-3 outline-sky-300 placeholder:text-gray-400 placeholder:font-bold "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-serif font-extrabold text-2xl bg-linear-to-l from-black to-sky-500 bg-clip-text text-transparent"
            >
              Enter your message here
            </label>
            <textarea
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              rows={6}
              name="message"
              placeholder="enter your message here"
              className="bg-sky-100 p-3 outline-sky-300 placeholder:text-gray-400 placeholder:font-bold "
            />
          </div>
          <button
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
            type="submit"
            className="w-[70%] p-3 text-sky-50 mx-auto  font-extrabold 
          hover:bg-sky-700 duration-1000 transition cursor-pointer
          font-serif text-2xl rounded-md bg-sky-900 mt-5 "
          >
            {isLoading ? "Sending....." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
