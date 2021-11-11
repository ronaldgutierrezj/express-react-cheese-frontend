import {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props){
    const[cheese, setCheese] = useState (null);
    const URL = "https://express-react-cheese-backend.herokuapp.com/cheese/";

    const getCheese = async() => {
        const response = await fetch(URL);
        const data = await response.json();
        setCheese(data);
    };

    const createCheese = async(chess) => {
        await fetch(URL, {
            method: "post",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(chess),
        });
        getCheese();
    };

    useEffect(() => getCheese(), []);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index cheese={cheese} createCheese={createCheese}/>
                </Route>
                <Route 
                    path="/cheese/:id" 
                    render={(rp)=>(
                        <Show {...rp}
                        />)} 
                />
            </Switch>
        </main>
    )
  } 
  
  export default Main