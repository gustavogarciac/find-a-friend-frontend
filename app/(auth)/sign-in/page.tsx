import Image from "next/image";
import React from "react";

const SignIn = () => {
  return (
    <div className="flex items-center justify-evenly gap-4">
      <div className="flex flex-col justify-between gap-2 rounded-lg bg-primary-red p-12">
        <Image
          src={"/assets/logo.svg"}
          alt="Logo Find a Friend"
          width={200}
          height={200}
        />

        <Image
          src={"/assets/dogs.png"}
          alt="A bunch of dogs that seem quite happy for you being here!"
          width={384}
          height={195}
        />
      </div>

      <div>
        <h1 className="h1-bold">Testing</h1>
      </div>
    </div>
  );
};

export default SignIn;
