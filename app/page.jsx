import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Let's Build
        <br />
        <span className="blue_gradient text-center">Best</span>
      </h1>
      <p className="desc text-center">
       Hi my name is sahil and i have made this web to provide you with best prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
