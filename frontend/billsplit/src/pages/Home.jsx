import Cadastrese from "../components/home/Cadastrese";
import CardAbout from "../components/home/CardAbout";

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 ">
      <div className="p-10">
        <CardAbout />
      </div>
      <div className="col-span-2">
        <Cadastrese />
      </div>
      <div className="p-5">
        <img src="explicacao.png" alt="" />
      </div>
      
    </div>
  );
}

export default Home;
