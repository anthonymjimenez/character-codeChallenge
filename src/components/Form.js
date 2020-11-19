import React, {useState} from "react";

function LoginForm({chars, setCharacter}) {
  

let [name, setName] = useState('')
let [img, setImg] = useState('') 
let [show, setShow] = useState('')

  
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault(); 
        setCharacter((char) => 
            [...char, {name: name, img: img, show: show }]
        )
        }}
      >
        <div>
          <label>
            Name
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            img
            <input
              id="img"
              name="img"
              type="img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            show
            <input
              id="show"
              name="show"
              type="show"
              value={show}
              onChange={(e) => setShow(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Post new char</button>
        </div>
      </form>
    );
  
}

export default LoginForm;
