import Typewriter from "typewriter-effect";

const Ingredients = () => (
  <code className="h-[165px] text-center leading-loose">
    <Typewriter
      options={{ delay: 40 }}
      onInit={(typewriter) => {
        typewriter
          .pauseFor(2000)
          .typeString("<span class='text-blue-500'>const </span>")
          .typeString("rahul: Array<")
          .typeString("<span class='text-green-500'>Expertise</span>")
          .typeString("> ")
          .typeString("<span class='text-blue-500'>= </span>")
          .typeString("[<br>")
          .typeString("<span class='pl-5'></span>")
          .typeString("<span class='text-red-500'>AWS_Expert</span>, ")
          .typeString("<span class='text-red-500'>Cloud_Architect</span>, ")
          .typeString("<span class='text-red-500'>AI_Innovator</span>,<br>")
          .typeString("<span class='pl-5'></span>")
          .typeString("<span class='text-red-500'>Full_Stack</span>, ")
          .typeString("<span class='text-red-500'>DevOps</span>, ")
          .typeString("<span class='text-red-500'>Serverless</span>,<br>")
          .typeString("<span class='pl-5'></span>")
          .typeString("<span class='text-red-500'>Blockchain</span>, ")
          .typeString("<span class='text-red-500'>Mentor</span>, ")
          .typeString("<span class='text-red-500'>...techInnovator</span>,<br>")
          .typeString("];")
          .start();
      }}
    />
  </code>
);

export default Ingredients;
