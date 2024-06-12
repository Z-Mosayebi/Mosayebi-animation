import { motion } from 'framer-motion';

function LoginForm() {
  return (
    <motion.div
      initial={{ scale: 4, opacity: 0, rotate: 20 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{
        ease: 'easeInOut',
        type: 'spring',
        duration: 2.2,
        delay: 3.3,
      }}
      className="flex h-full w-full items-center justify-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center mb-6">
          <img src="/Alegrion-logo.png" alt="Alegrion Logo" className="w-20 mb-4" />
          <h2 className="text-2xl font-bold">Sign up</h2>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="firstName">First name</label>
            <input className="w-full px-3 py-2 border rounded-md" type="text" id="firstName" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="surname">Surname</label>
            <input className="w-full px-3 py-2 border rounded-md" type="text" id="surname" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">Company E-mail address</label>
            <input className="w-full px-3 py-2 border rounded-md" type="email" id="email" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="password">Create password</label>
            <input className="w-full px-3 py-2 border rounded-md" type="password" id="password" />
          </div>
          <div className="mb-4 flex items-center">
            <input className="mr-2" type="checkbox" id="teamLead" />
            <label className="text-sm" htmlFor="teamLead">Are you a team or project lead?</label>
          </div>
          <div className="mb-6 text-center">
            <a href="#" className="text-sm text-blue-500">Already have a login?</a>
          </div>
          <div>
            <button className="w-full bg-red-500 text-white py-2 rounded-md" type="submit">Agree and Continue</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default LoginForm;
