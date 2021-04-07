const Home = () => {
  const handleClick = (e) => {
    console.log(" Yay I see it", e.target);
  }

  const handleClickAgain = (name, e) => {
    console.log ("it is me " + name, e)
  }
  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={ handleClick }>Click me</button>
      <button onClick={ (e) => {handleClickAgain("xuxu", e)} }>Click me again</button>
    </div>
   );
}
 
export default Home;