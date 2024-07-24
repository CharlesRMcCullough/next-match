'use client';

import { LoginSchema, loginSchema } from "@/lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardHeader } from "@nextui-org/card";
import { Button, CardBody, Input } from "@nextui-org/react";
import { useForm } from 'react-hook-form';
import { GiPadlock } from "react-icons/gi";

export default function LoginForm() {

  const {register, handleSubmit, formState: {errors, isValid}} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched'
  });

  function onSubmit(data: LoginSchema)
  {
    console.log(data)
  }

  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-secondary">
          <div className="flex flex-row items-center gap-3">
            <GiPadlock size={30} />
            <h1 className="text-3xl font-semibold">Login</h1>
          </div>
        </div>
        <p className="text-neutral-500">Welecom back to NextMatch</p>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input 
                defaultValue=''
                label="Email" 
                variant="bordered"
                {...register('email')} 
                isInvalid={!!errors.email} 
                errorMessage={errors.email?.message as string} />
            <Input
                defaultValue='' 
                label="Password" 
                variant="bordered" 
                type='password'
                {...register('password')}
                isInvalid={!!errors.password} 
                errorMessage={errors.password?.message as string} />

            <Button isDisabled={!isValid} fullWidth color='secondary' type='submit'>Login</Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}