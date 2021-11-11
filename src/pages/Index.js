import {useState} from "react";
import {Link} from "react-router-dom";

function Index(props){
    const [newForm, setNewForm] = useState({
        name:"",
        image:"",
        countryOfOrigin:"",
    });

    const handleChange =(event)=>{
        setNewForm({...newForm, [event.target.name]:event.target.value});
    };
    const handleSubmit =(event)=> {
        event.preventDefault();
        props.createCheese(newForm);
        setNewForm({
            name:"",
            image:"",
            countryOfOrigin:"",
        });
    };

    const loaded = () => {
        return props.cheese.map((chess)=> (
            <div key={chess._id} className="chess">
                <Link to={`/cheese/${chess._id}`}><h1>{chess.name}</h1></Link>
                <img src={chess.image} alt={chess.name}/>
                <h3>Origin: {chess.countryOfOrigin}</h3>
            </div>
        ));
    };
    const loading =()=>{
        return <h1>Loading...</h1>;
    };

    return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="country Of Origin"
          onChange={handleChange}
        />
        <input type="submit" value="Create Cheese" />
      </form>
      {props.cheese ? loaded() : loading()}
    </section>
  );
  } 
  
  export default Index