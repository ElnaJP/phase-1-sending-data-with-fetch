function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,email
      }),
    })
      .then((response) => response.json())
      .then(data => renderId(data))
      .catch((error)  => {
        document.body.innerHTML = error;
      });
  }
  const renderId =dtata => {
     document.body.innerHTML = data.id;
  }

  


  