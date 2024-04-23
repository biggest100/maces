import { Services } from "./About";

function Home() {
  const name = "Alvin";
  return (
    <div>
      <h1>My name is {name}</h1>
      <Services />
      <NewHome name={name} />
    </div>
  );
}

const NewHome = ({ name }) => {
  return (
    <>
      <h1>My name is {name}</h1>
      <Services />
    </>
  );
};

export default Home;
