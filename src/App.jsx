// 1280 x 800 width

// import Cards from "./component/cards";
// import Main from "./component/main-header";
import Main from "./component/main-header";
import Nav from "./component/nav";
import Sidebar from "./component/sidebar";

function App() {
  return (
    <>
      <section className=" md:max-w-6xl md:h-full ml-52">
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
        <div className=" w-fit h-fit border border-red-200  rounded-xl    m-9 mx-auto ">
          {/* this is navbar */}
          <Nav />
          {/* this content side and middle */}
          <div className="gap-2 flex border-4 ">
            <Sidebar />
            <Main />
            <br />
          </div>
        </div>
      </main>
    </>
  );
};
