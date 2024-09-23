function FormInput({ id, text, placeholder, description, type = 'text' }) {
  return (
    <div className="max-w-sm p-8">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {text}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
        />
      </div>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  )
}

export default function App() {
  return (
    <form>
      <FormInput
        id="email"
        text="Email"
        placeholder="you@example.com"
        description="Bunu sadece spam için kullanacağız."
        type="email"
      />
      <FormInput
        id="username"
        text="Kullanıcı Adı"
        placeholder="yourusername"
        description="Kullanıcı adınız herkese açık olacak."
        type="text"
      />
    </form>
  )
}
