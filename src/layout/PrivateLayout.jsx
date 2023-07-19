import Sidebar from "components/Sidebar";

const PrivateLayout = ({ children }) => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <main className="flex felx-col w-full  overflow-y-scroll items-center justify-center">
      {children}
      </main>
    </div>
  );
};

export default PrivateLayout;
