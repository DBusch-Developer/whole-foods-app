const Home = () => {
  return (
    <>
      <img
        src={new URL(`../assets/whole-foods-img.jpg`, import.meta.url).href}
        className="border-0"
      />
    </>
  );
};

export default Home;
