const Home = () => {
  const handleClick = () => {
    console.log(" Yay I see it");
  }

  const handleClickAgain = (name) => {
    console.log ("it is me " + name)
  }
  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={ handleClick }>Click me</button>
      <button onClick={ () => {handleClickAgain("xuxu")} }>Click me again</button>
    </div>
   );
}
 
export default Home;