function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
function Header() {
  return (
    <header className="bg-blue-500 text-white text-center p-4">
      <h1 className="text-2xl font-semibold">Orai Lietuvoje</h1>
    </header>
  );
}
function Footer() {
  return <footer className="bg-blue-500 text-white text-center p-4">2025-02-13 Artur Uvarov</footer>;
}
export default App;
