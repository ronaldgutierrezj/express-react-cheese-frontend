import { useState } from "react"
function Show(props) {
    const id = props.match.params.id
    const cheese = props.cheese
    const chess = cheese.find(p => p._id === id)

    const [editForm, setEditForm] = useState(chess)

    // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }

  // handlesubmit for form
  const handleSubmit = event => {
    event.preventDefault()
    props.updateCheese(editForm, chess._id)
    // redirect cheese back to index
    props.history.push("/")
  }
  const removeChess = () => {
    props.deleteCheese(chess._id)
    props.history.push("/")
  }
    return (
      <div className="chess">
        <h1>{chess.name}</h1>
        <h2>{chess.countryOfOrigin}</h2>
        <img src={chess.image} alt={chess.name} />
        <button id="delete" onClick={removeChess}>
        DELETE
      </button>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="Country Of Origin"
          onChange={handleChange}
        />
        <input type="submit" value="Update Cheese" />
      </form>
      </div>
    )
  }
  
  export default Show