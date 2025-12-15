const About = () => {
  return (
    <section>
      <h2 className="text-2xl font-normal text-gray-200 mb-7">
        ABOUT
      </h2>
      <div className="space-y-4 text-base leading-relaxed text-gray-700 dark:text-gray-300 [&>p]:text-lg [&>p]:text-gray-400 [&>p]:font-thin">
        <p>
          I didn’t become a developer through one big moment — it
          happened gradually. I kept gravitating toward the parts of a
          project that needed clarity and good judgment, and over time
          that became the work I return to every day.
        </p>
        <p>
          Most of what I build follows that approach: straightforward
          structure, readable logic, and interfaces that feel natural
          to use. TypeScript, React, Tailwind, and sometimes Node.js
          are simply the tools I utilize to keep things consistent.
        </p>
        <p>
          If you skim past everything else, just know this: I care
          about how things work, not how loudly they present
          themselves.
        </p>
      </div>
    </section>
  );
};

export default About;
