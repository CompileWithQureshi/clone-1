// 1280 x 800 width

import Nav from "./component/nav";
import Sidebar from "./component/sidebar";

function App() {
  return (
    <>
      <section
        className=" md:max-w-full md:h-full 
      "
      >
        <Container />
      </section>
    </>
  );
}

export default App;

const Container = () => {
  return (
    <>
      <main>
        <div className=" max-w-5xl h-fit border border-black  rounded-xl grid   m-9 mx-auto ">
          <Nav />
          <div>
            <Sidebar />
          </div>
        </div>
      </main>
    </>
  );
};
