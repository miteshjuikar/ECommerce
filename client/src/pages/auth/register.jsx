import CommonForm from '@/components/common/form'
import { registrationFormControl } from '@/config'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AuthLogin() {

  const [formData, setFormData] = useState({email: "", password: ""});
console.log(formData);

  function onSubmit(event) {

  }
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>

      <CommonForm
        formControls={registrationFormControl}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        buttonText={"Sign-In"}
      />
    </div>
  )
}

export default AuthLogin